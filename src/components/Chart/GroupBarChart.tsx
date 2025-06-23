import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from "victory";
import type { GroupBarChartProps } from "./Type";

interface NewGroupBarChartProps {
  group: GroupBarChartProps;
  //   isShowViewFullScreen?: boolean;
}

function GroupBarChart({
  group,
}: //   isShowViewFullScreen = false,
NewGroupBarChartProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="text-[15px] font-bold">{group.title}</div>
        <div className="text-[10px] text-gray-400">
          {group.subtitle ? group.subtitle : "in thousand tons"}
        </div>
      </div>

      {/* Legend แยกออกมา */}
      <div className="flex justify-center gap-4 text-[15px] text-gray-600 pl-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
          {group.legendFirst || "Offsite"}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          {group.legendSecond || "Onsite"}
        </div>
      </div>

      {/* Chart */}
      <VictoryChart
        domainPadding={group.domainPadding ?? 20} // ระยะห่างระหว่างแท่ง
        theme={VictoryTheme.material}
        height={group.height && 85}
        //   height={group.height ?? 85}
        //   height={group.height || 85}
        // padding={{ top: -15, bottom: 15, left: 20, right: 5 }}
        padding={{
          top: group.vicPadding?.top ?? -15,
          bottom: group.vicPadding?.bottom ?? 15,
          left: group.vicPadding?.left ?? 20,
          right: group.vicPadding?.right ?? 5,
        }}
      >
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 7, padding: 2 }, // ขนาดและระยะห่างของ label แกน X
            grid: { stroke: "transparent" }, // ซ่อนเส้นกริด
            axis: { stroke: "transparent" }, // ซ่อนเส้นแกน X
            ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
          }}
        />
        <VictoryAxis
          dependentAxis // แกน Y
          // tickValues={[0, 2000, 4000, 6000]}
          tickValues={[
            0,
            (group.tickValues ?? 0) / 3,
            ((group.tickValues ?? 0) * 2) / 3,
            group.tickValues ?? 0,
          ]}
          tickFormat={(t) => `${t / 1000}K`} // แปลงค่าเป็นพัน
          style={{
            tickLabels: { fontSize: 7, padding: 2 },
            grid: {
              stroke: "#d1d5db", // สีกริด
              strokeDasharray: "none", // เส้นกริดไม่เป็นเส้นประ
              strokeWidth: 1, // ความหนาของเส้นกริด
            },
            axis: { stroke: "transparent" }, // ซ่อนเส้นแกน Y
            ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
          }}
        />
        <VictoryGroup offset={11} colorScale={["#22c55e", "#2563eb"]}>
          <VictoryBar
            data={group.onsite} // ข้อมูลสำหรับแท่ง Onsite
            barWidth={11} // ความกว้างของแท่ง
            cornerRadius={{ top: 5 }} // มุมโค้งของแท่ง
            labels={({ datum }) => `${datum.y}`} // แสดงค่า y เป็น label
            labelComponent={
              <VictoryLabel
                dy={-1} // การเลื่อนแนวตั้งของ label
                dx={10} // การเลื่อนแนวนอนของ label
                style={{ fontSize: 6, fill: "#333" }} // สไตล์ของ label
                angle={-60} // เอียง label -60 องศา
              />
            }
          />
          <VictoryBar
            data={group.offsite}
            barWidth={11}
            cornerRadius={{ top: 5 }}
            labels={({ datum }) => `${datum.y}`}
            labelComponent={
              <VictoryLabel
                dy={-1}
                dx={10}
                style={{ fontSize: 6, fill: "#333" }}
                angle={-60}
              />
            }
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default GroupBarChart;
