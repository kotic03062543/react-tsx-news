import {
  VictoryChart,
  VictoryStack,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryLegend,
  VictoryGroup,
} from "victory";

function SportView() {
  // ข้อมูลตัวอย่าง stacked bar chart
  const hazardous = [
    { x: "2022", y: 1000 },
    { x: "2023", y: 2000 },
    { x: "2024", y: 2500 },
    { x: "2025", y: 3000 },
  ];
  const nonHazardous = [
    { x: "2022", y: 2000 },
    { x: "2023", y: 3000 },
    { x: "2024", y: 1500 },
    { x: "2025", y: 4000 },
  ];

  // ข้อมูลสำหรับกราฟแท่ง
  const offsite = [
    { x: "Composite", y: 1000 },
    { x: "Useed", y: 2000 },
    { x: "Other", y: 2500 },
    { x: "Recycle", y: 3000 },
    { x: "Reuse", y: 3500 },
  ];
  const onsite = [
    { x: "Composite", y: 1500 },
    { x: "Useed", y: 2500 },
    { x: "Other", y: 2000 },
    { x: "Recycle", y: 3500 },
    { x: "Reuse", y: 4000 },
  ];

  const offsite1 = [
    { x: "Incineration E", y: 1000 },
    { x: "Incineration A", y: 2000 },
    { x: "Landfill", y: 2500 },
  ];
  const onsite1 = [
    { x: "Incineration E", y: 1500 },
    { x: "Incineration A", y: 2500 },
    { x: "Landfill", y: 2000 },
  ];

  // คำนวณยอดรวมเพื่อแสดงเลขบนยอดแท่ง
  const total = hazardous.map((item, i) => ({
    x: item.x,
    y: item.y + nonHazardous[i].y,
    label: `${item.y + nonHazardous[i].y}`,
  }));

  return (
    <div>
      {/* <div className="flex justify-center p-2">Sport View</div> */}
      <div className="flex flex-row gap-4 p-4">
        <div className="w-full h-[492px] p-4 bg-white rounded-lg shadow">
          {/* หัวกราฟ */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold">Waste generated</div>
              <div className="text-sm text-gray-400">in thousand tons</div>
            </div>
            <div>
              <button className="text-blue-600 hover:underline">
                View full screen
              </button>
            </div>
          </div>

          <div className="">
            {/* Victory Chart */}
            <VictoryChart
              domainPadding={40}
              theme={VictoryTheme.material}
              height={226}
              padding={{ top: 5, bottom: 25, left: 25, right: 5 }}
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
                  tickLabels: { fontSize: 10, padding: 5 },
                  grid: { stroke: "transparent" },
                  axis: { stroke: "transparent" }, // ซ่อนเส้นแกน X
                  ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
                }}
              />

              {/* แกน Y */}
              <VictoryAxis
                dependentAxis
                tickValues={[0, 2000, 4000, 6000, 8000]}
                tickFormat={(t) => `${t / 1000}K`}
                style={{
                  tickLabels: { fontSize: 10, padding: 5 },
                  grid: {
                    stroke: "#d1d5db",
                    strokeDasharray: "none",
                    strokeWidth: 1,
                  }, // เทาอ่อน solid เส้นตรง
                  //   grid: { stroke: "transparent" }, // ซ่อนกริด
                  axis: { stroke: "transparent" }, // ซ่อนเส้นแกน Y
                  ticks: { stroke: "transparent" }, // ซ่อนเส้นทิศทาง
                }}
              />

              {/* กราฟ stacked bar */}
              <VictoryStack colorScale={["#22c55e", "#2563eb"]}>
                <VictoryBar data={hazardous} barWidth={12} />
                <VictoryBar
                  data={nonHazardous}
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
                    style={{ fontSize: 8, fill: "#333" }}
                  />
                }
                style={{ data: { fill: "transparent" } }}
              />
            </VictoryChart>
          </div>
        </div>

        {/* Box2 บน */}
        <div className="flex flex-col gap-[17px] w-full">
          <div className="bg-white rounded-lg shadow p-2 h-[237px]">
            {/* Title + Subtitle */}
            <div className="flex items-center gap-2">
              <div className="text-[20px] font-bold">
                Total wasts dilivered from disposal
              </div>
              <div className="text-[12px] text-gray-400">in thousand tons</div>
            </div>

            {/* Legend แยกออกมา */}
            <div className="flex justify-center gap-4 text-[15px] text-gray-600 pl-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                Offsite
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Onsite
              </div>
            </div>

            <div className="">
              {/* Chart */}
              <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.material}
                height={85}
                padding={{ top: -15, bottom: 15, left: 20, right: 5 }}
              >
                <VictoryAxis
                  style={{
                    tickLabels: { fontSize: 7, padding: 2 },
                    grid: { stroke: "transparent" },
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 2000, 4000, 6000]}
                  tickFormat={(t) => `${t / 1000}K`}
                  style={{
                    tickLabels: { fontSize: 7, padding: 2 },
                    grid: {
                      stroke: "#d1d5db",
                      strokeDasharray: "none",
                      strokeWidth: 1,
                    },
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                  }}
                />
                <VictoryGroup offset={11} colorScale={["#22c55e", "#2563eb"]}>
                  <VictoryBar
                    data={onsite}
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
                  <VictoryBar
                    data={offsite}
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
          </div>

          {/* <div className="bg-white rounded-lg shadow p-4 h-full">Box3</div> */}
          <div className="bg-white rounded-lg shadow p-2 h-[237px]">
            {/* Title + Subtitle */}
            <div className="flex items-center gap-2">
              <div className="text-[20px] font-bold">
                Total wasts dilivered from disposal
              </div>
              <div className="text-[12px] text-gray-400">in thousand tons</div>
            </div>

            {/* Legend แยกออกมา */}
            <div className="flex justify-center gap-4 text-[15px] text-gray-600 pl-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                Offsite
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Onsite
              </div>
            </div>

            <div className="">
              {/* Chart */}
              <VictoryChart
                domainPadding={60}
                theme={VictoryTheme.material}
                height={85}
                padding={{ top: -35, bottom: 15, left: 20, right: 5 }}
              >
                <VictoryAxis
                  style={{
                    tickLabels: { fontSize: 7, padding: 2 },
                    grid: { stroke: "transparent" },
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickValues={[0, 1000, 2000, 3000]}
                  tickFormat={(t) => `${t / 1000}K`}
                  style={{
                    tickLabels: { fontSize: 7, padding: 2 },
                    grid: {
                      stroke: "#d1d5db",
                      strokeDasharray: "none",
                      strokeWidth: 1,
                    },
                    axis: { stroke: "transparent" },
                    ticks: { stroke: "transparent" },
                  }}
                />
                <VictoryGroup offset={11} colorScale={["#22c55e", "#2563eb"]}>
                  <VictoryBar
                    data={onsite1}
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
                  <VictoryBar
                    data={offsite1}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportView;
