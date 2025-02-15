export interface IUserGrowthDataItem {
  name: string,
  activeUsers: number,
  totalUsers: number,
}

export interface IKeyMetrics {
  totalUsers: { name: string, value: string },
  activeUsers: { name: string, value: string },
  totalStreams: { name: string, value: string },
  revenue: { name: string, value: string },
  topArtist: { name: string, value: string },
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