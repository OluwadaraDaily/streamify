import { IKeyMetrics, IMostStreamedSongs, IRevenueDistribution, IStreamsData, IUserGrowthDataItem } from "./chart";

export interface IDashboardContext {
  keyMetrics: IKeyMetrics;
  userGrowthData: IUserGrowthDataItem[];
  revenueDistributionData: IRevenueDistribution[];
  top5MostStreamedSongs: IMostStreamedSongs[];
  streamsTableData: IStreamsData[];
}