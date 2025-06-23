import StackBarChart from "../../components/Chart/StackBarChart";
import { sample } from "lodash";
import type {
  GroupBarChartProps,
  StackBarChartProps,
} from "../../components/Chart/Type";
import GroupBarChart from "../../components/Chart/GroupBarChart";

function SportView() {
  const sampleForStackedBar: StackBarChartProps[] = [
    {
      title: "Total waste delivered from disposal",
      subtitle: "in thousand tons",
      hazardous: [
        { x: "2022", y: 1000 },
        { x: "2023", y: 2000 },
        { x: "2024", y: 2500 },
        { x: "2025", y: 3000 },
      ],
      nonHazardous: [
        { x: "2022", y: 2000 },
        { x: "2023", y: 3000 },
        { x: "2024", y: 1500 },
        { x: "2025", y: 4000 },
      ],
      height: 226,
      tickValues: 9000,
    },
  ];
  //   const hazardous = [
  //     { x: "2022", y: 1000 },
  //     { x: "2023", y: 2000 },
  //     { x: "2024", y: 2500 },
  //     { x: "2025", y: 3000 },
  //   ];
  //   const nonHazardous = [
  //     { x: "2022", y: 2000 },
  //     { x: "2023", y: 3000 },
  //     { x: "2024", y: 1500 },
  //     { x: "2025", y: 4000 },
  //   ];

  // ข้อมูลสำหรับกราฟแท่ง
  const sampleForGroupBar: GroupBarChartProps[] = [
    {
      title: "Total waste delivered from disposal",
      subtitle: "in thousand tons",
      onsite: [
        { x: "Composite", y: 1500 },
        { x: "Useed", y: 2500 },
        { x: "Other", y: 2000 },
        { x: "Recycle", y: 3500 },
        { x: "Reuse", y: 4000 },
      ],
      offsite: [
        { x: "Composite", y: 1000 },
        { x: "Useed", y: 2000 },
        { x: "Other", y: 2500 },
        { x: "Recycle", y: 3000 },
        { x: "Reuse", y: 3500 },
      ],
      legendFirst: "Offsite",
      legendSecond: "Onsite",
      height: 85,
      tickValues: 6000,
    },
  ];

  const sampleForGroupBar2: GroupBarChartProps[] = [
    {
      title: "Total waste delivered from disposal",
      subtitle: "in thousand tons",
      onsite: [
        { x: "Incineration E", y: 1000 },
        { x: "Incineration A", y: 2000 },
        { x: "Landfill", y: 2500 },
      ],
      offsite: [
        { x: "Incineration E", y: 1500 },
        { x: "Incineration A", y: 2500 },
        { x: "Landfill", y: 2000 },
      ],
      legendFirst: "Offsite",
      legendSecond: "Onsite",
      height: 85,
      tickValues: 3000,
      domainPadding: 60,
      vicPadding: {
        top: -35,
      },
    },
  ];
  //   const offsite = [
  //     { x: "Composite", y: 1000 },
  //     { x: "Useed", y: 2000 },
  //     { x: "Other", y: 2500 },
  //     { x: "Recycle", y: 3000 },
  //     { x: "Reuse", y: 3500 },
  //   ];
  //   const onsite = [
  //     { x: "Composite", y: 1500 },
  //     { x: "Useed", y: 2500 },
  //     { x: "Other", y: 2000 },
  //     { x: "Recycle", y: 3500 },
  //     { x: "Reuse", y: 4000 },
  //   ];

  //   const offsite1 = [
  //     { x: "Incineration E", y: 1000 },
  //     { x: "Incineration A", y: 2000 },
  //     { x: "Landfill", y: 2500 },
  //   ];
  //   const onsite1 = [
  //     { x: "Incineration E", y: 1500 },
  //     { x: "Incineration A", y: 2500 },
  //     { x: "Landfill", y: 2000 },
  //   ];

  // คำนวณยอดรวมเพื่อแสดงเลขบนยอดแท่ง
  //   const total = hazardous.map((item, i) => ({
  //     x: item.x,
  //     y: item.y + nonHazardous[i].y,
  //     label: `${item.y + nonHazardous[i].y}`,
  //   }));

  return (
    <div>
      {/* <div className="flex justify-center p-2">Sport View</div> */}
      <div className="flex flex-row gap-4 p-4">
        {/* ครึ่งซ้าย 1 stack */}
        <div className="w-full bg-white rounded-lg shadow p-2 h-full">
          {sampleForStackedBar.map((stack, index) => (
            <StackBarChart
              key={index}
              stack={stack}
              isShowViewFullScreen={true}
            />
          ))}
        </div>

        {/* ครึ่งขวา 2 group bar */}
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-white rounded-lg shadow p-2 h-full w-full">
            {sampleForGroupBar.map((group, index) => (
              <GroupBarChart key={index} group={group} />
            ))}
          </div>
          <div className="bg-white rounded-lg shadow p-2 h-full">
            {sampleForGroupBar2.map((group, index) => (
              <GroupBarChart key={index} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportView;
