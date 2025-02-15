import {
  IUserGrowthDataItem,
  IKeyMetrics,
  IRevenueDistribution,
  IMostStreamedSongs,
  IStreamsData,
} from '../../types/chart';

const keyMetrics: IKeyMetrics = {
  totalUsers: 450,
  activeUsers: 230,
  totalStreams: 390560,
  revenue: 300600500,
  topArtist: "Shane & Shane",
};

const userGrowthDataChartJS = {
  labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'],
  datasets: [
    {
      label: 'Total Users',
      data: [12, 55, 80, 81, 106, 155, 180, 211, 261, 307, 370, 450],
      fill: true,
      borderColor: 'black',
      tension: 0
    },
    {
      label: 'Active Users',
      data: [5, 39, 44, 67, 91, 115, 150, 181, 196, 260, 220, 230],
      fill: true,
      borderColor: 'green',
      tension: 0
    }
  ]
}

const userGrowthData: IUserGrowthDataItem[] = [
  {
    name: "January",
    activeUsers: 5,
    totalUsers: 12
  },
  {
    name: "February",
    activeUsers: 39,
    totalUsers: 55
  },
  {
    name: "March",
    activeUsers: 44,
    totalUsers: 80
  },
  {
    name: "April",
    activeUsers: 67,
    totalUsers: 81
  },
  {
    name: "May",
    activeUsers: 91,
    totalUsers: 106
  },
  {
    name: "June",
    activeUsers: 111,
    totalUsers: 155
  },
  {
    name: "July",
    activeUsers: 150,
    totalUsers: 180
  },
  {
    name: "August",
    activeUsers: 181,
    totalUsers: 211
  },
  {
    name: "September",
    activeUsers: 196,
    totalUsers: 261
  },
  {
    name: "October",
    activeUsers: 260,
    totalUsers: 307
  },
  {
    name: "November",
    activeUsers: 220,
    totalUsers: 370
  },
  {
    name: "December",
    activeUsers: 230,
    totalUsers: 450
  },
]

const revenueDistributionData: IRevenueDistribution[] = [
  { name: "Subscriptions", value: 2300008400 },
  { name: "Advertisements", value: 130600 },
  { name: "One Time Purchases", value: 2300300 },
  { name: "Affiliate Marketing", value: 30000 },
  { name: "Sponsorships & Partnerships", value: 100700 },
]

const top5MostStreamedSongs: IMostStreamedSongs[] = [
  { name: "Take me Home, Country Roads", value: 820000000 },
  { name: "Yet Not I", value: 47000000 },
  { name: "Ancient Words", value: 23000000 },
  { name: "Is He Worthy", value: 16000000 },
  { name: "The Horse, The Man & The Son", value: 847000 },
]

const streamsTableData: IStreamsData[] = [
  {
    songName: "Yet Not I",
    artist: "CityAlight",
    dateStreamed: "08/10/2018",
    streamCount: 47000000,
    userId: "bbfhjjhwi099"
  },
  {
    songName: "The Horse, The Man & The Son",
    artist: "Chief Ebenezer Obey",
    dateStreamed: "08/10/1980",
    streamCount: 847000,
    userId: "absbhsuii34"
  },
]

export const dashboardData = {
  keyMetrics,
  userGrowthData,
  revenueDistributionData,
  top5MostStreamedSongs,
  streamsTableData,
}