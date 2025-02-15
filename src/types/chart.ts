export interface IUserGrowthDataItem {
  name: string,
  activeUsers: number,
  totalUsers: number,
}

export interface IKeyMetrics {
  totalUsers: number,
  activeUsers: number,
  totalStreams: number,
  revenue: number,
  topArtist: string,
}

export interface IRevenueDistribution {
  name: string,
  value: number
}

export interface IMostStreamedSongs {
  name: string,
  value: number
}

export interface IStreamsData {
  songName: string,
  artist: string,
  dateStreamed: string,
  streamCount: number,
  userId: string,
}