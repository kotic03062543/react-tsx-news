export interface StackBarChartProps {
  title: string;
  subtitle?: string;
  domainPadding?: number;
  hazardous: { x: string; y: number }[];
  nonHazardous: { x: string; y: number }[];
  tickValues?: number;
  height?: number;
}

export interface GroupBarChartProps {
  title: string;
  subtitle?: string;
  domainPadding?: number;
  vicPadding?: VictoryPading;
  onsite: { x: string; y: number }[];
  offsite: { x: string; y: number }[];
  legendFirst?: string;
  legendSecond?: string;
  tickValues?: number;
  height?: number;
}
interface VictoryPading {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
