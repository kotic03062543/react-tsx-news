import type { StackBarChartProps } from "./Type";
import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryLegend,
} from "victory";

interface NewStackBarChartProps {
  stack: StackBarChartProps;
  isShowViewFullScreen?: boolean;
}

function StackBarChart({ stack, isShowViewFullScreen }: NewStackBarChartProps) {
  const total = stack.hazardous.map((item, i) => ({
    x: item.x,
    y: item.y + stack.nonHazardous[i].y,
    label: `${item.y + stack.nonHazardous[i].y}`,
  }));

  return (
    <div>
      {/* หัวกราฟ */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-[25px] font-bold">{stack.title}</div>
          <div className="text-[15px] text-gray-400">
            {stack ? stack.subtitle : ""}
          </div>
        </div>
        {isShowViewFullScreen ? (
          <div className="text-blue-600 hover:underline">View full screen</div>
        ) : null}
      </div>

      {/* Victory Chart */}
      <VictoryChart
        domainPadding={stack.domainPadding ?? 40} // ระยะห่างระหว่างแท่ง
        theme={VictoryTheme.material} // ใช้ธีม Material ของ Victory
        height={stack.height || 226} // กำหนดความสูงของกราฟ
        padding={{ top: 5, bottom: 25, left: 25, right: 5 }} // กำหนด padding ของกราฟ
      >
        <VictoryLegend
          x={70}
          y={20}
          orientation="horizontal" // แนวนอน
          gutter={20} // ระยะห่างระหว่าง legend items
          data={[
            {
              name: "Non-hazardous waste",
              symbol: { fill: "#2563eb", type: "circle", size: 3 },
            },
            {
              name: "Hazardous waste",
              symbol: { fill: "#22c55e", type: "circle", size: 3 },
            },
          ]}
          style={{
            labels: { fontSize: 8, fill: "#4b5563" },
          }}
        />

        {/* แกน X */}
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 8, padding: 5 },
            grid: { stroke: "transparent" }, // ซ่อนกริด
            axis: { stroke: "transparent" }, // ซ่อนเส้นแกน X
            ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
          }}
        />

        {/* แกน Y */}
        <VictoryAxis
          dependentAxis
          // tickValues={[0, 2000, 4000, 6000, 8000]}
          tickValues={[
            0,
            (stack.tickValues ?? 0) / 3,
            ((stack.tickValues ?? 0) * 2) / 3,
            stack.tickValues ?? 0,
          ]}
          tickFormat={(t) => `${t / 1000}K`}
          style={{
            tickLabels: { fontSize: 8, padding: 5 },
            grid: {
              stroke: "#d1d5db", // สีกริด
              strokeDasharray: "none", // เส้นกริดไม่เป็นเส้นประ
              strokeWidth: 1, // ความหนาของเส้นกริด
            },
            axis: { stroke: "transparent" }, // ซ่อนเส้นแกน Y
            ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
          }}
        />

        {/* กราฟ stacked bar */}
        <VictoryStack colorScale={["#22c55e", "#2563eb"]}>
          <VictoryBar data={stack.hazardous} barWidth={12} />
          <VictoryBar
            data={stack.nonHazardous}
            cornerRadius={{ top: 5 }}
            barWidth={12}
          />
        </VictoryStack>

        {/* ตัวเลขบนยอดแท่ง */}
        <VictoryBar
          data={total}
          // labels={({ datum }) => datum.label}
          labelComponent={
            <VictoryLabel
              dy={-1} // ระยะห่างจากยอดแท่ง
              dx={10} // ระยะห่างจากแกน X
              angle={-60} // เอียงข้อความ
              style={{ fontSize: 7, fill: "#333" }}
            />
          }
          style={{ data: { fill: "transparent" } }}
        />
      </VictoryChart>
    </div>
  );
}

export default StackBarChart;
