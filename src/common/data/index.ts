import {
  IUserGrowthDataItem,
  IKeyMetrics,
  IRevenueDistribution,
  IMostStreamedSongs,
  IStreamsData,
} from '../../types/chart';

const keyMetrics: IKeyMetrics = {
  totalUsers: {
    name: "Total users",
    value: "450"
  },
  activeUsers: {
    name: "Active users",
    value: "230"
  },
  totalStreams: {
    name: "Total streams",
    value: "390,560",
  },
  revenue: {
    name: "Revenue",
    value: "$300,000"
  },
  topArtist: {
    name: "Top Artist",
    value: "Shane & Shane"
  },
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
  { name: "Subscriptions", value: 23000 },
  { name: "Advertisements", value: 13060 },
  { name: "One Time Purchases", value: 23000 },
  { name: "Affiliate Marketing", value: 30000 },
  { name: "Sponsorships & Partnerships", value: 10070 },
]

const top5MostStreamedSongs: IMostStreamedSongs[] = [
  { name: "Take me Home, Country Roads", value: 82000 },
  { name: "Yet Not I", value: 47000 },
  { name: "Ancient Words", value: 23000 },
  { name: "Is He Worthy", value: 16000 },
  { name: "The Horse, The Man & The Son", value: 84700 },
]

const streamsTableData: IStreamsData[] = [
  {
    "songName": "Yet Not I",
    "artist": "CityAlight",
    "dateStreamed": "08/10/2018",
    "streamCount": 47000000,
    "userId": "bbfhjjhwi099"
  },
  {
    "songName": "The Horse, The Man & The Son",
    "artist": "Chief Ebenezer Obey",
    "dateStreamed": "08/10/1980",
    "streamCount": 847000,
    "userId": "absbhsuii34"
  },
  {
    "songName": "Way Maker",
    "artist": "Sinach",
    "dateStreamed": "03/09/2015",
    "streamCount": 97000000,
    "userId": "bbfhjjhwi099"
  },
  {
    "songName": "Take Me to the King",
    "artist": "Tamela Mann",
    "dateStreamed": "11/09/2012",
    "streamCount": 87000000,
    "userId": "absbhsuii34"
  },
  {
    "songName": "I Will Trust",
    "artist": "Fred Hammond",
    "dateStreamed": "04/20/2018",
    "streamCount": 47000000,
    "userId": "hjsn45kdq49"
  },
  {
    "songName": "Oceans (Where Feet May Fail)",
    "artist": "Hillsong UNITED",
    "dateStreamed": "06/10/2013",
    "streamCount": 60000000,
    "userId": "skjdhfhsd83"
  },
  {
    "songName": "No Weapon",
    "artist": "Fred Hammond",
    "dateStreamed": "02/01/2001",
    "streamCount": 49000000,
    "userId": "ka91sn72"
  },
  {
    "songName": "Blessed Assurance",
    "artist": "CeCe Winans",
    "dateStreamed": "05/11/1999",
    "streamCount": 31000000,
    "userId": "kf73dbsh38"
  },
  {
    "songName": "In Christ Alone",
    "artist": "Keith & Kristyn Getty",
    "dateStreamed": "07/04/2001",
    "streamCount": 54000000,
    "userId": "dhdhs83738"
  },
  {
    "songName": "God of Wonders",
    "artist": "Third Day",
    "dateStreamed": "08/02/2001",
    "streamCount": 25000000,
    "userId": "kdsjfl83294"
  },
  {
    "songName": "The Blessing",
    "artist": "Kari Jobe & Cody Carnes",
    "dateStreamed": "03/20/2020",
    "streamCount": 130000000,
    "userId": "ldfjd94hr9"
  },
  {
    "songName": "Here I Am to Worship",
    "artist": "Tim Hughes",
    "dateStreamed": "04/21/2001",
    "streamCount": 30000000,
    "userId": "jsd82dhf73"
  },
  {
    "songName": "Shout to the Lord",
    "artist": "Darlene Zschech",
    "dateStreamed": "10/15/1993",
    "streamCount": 85000000,
    "userId": "wkrj3928k"
  },
  {
    "songName": "Amazing Grace (My Chains Are Gone)",
    "artist": "Chris Tomlin",
    "dateStreamed": "01/05/2006",
    "streamCount": 120000000,
    "userId": "jdsfh3298f"
  },
  {
    "songName": "How Great Is Our God",
    "artist": "Chris Tomlin",
    "dateStreamed": "07/10/2004",
    "streamCount": 60000000,
    "userId": "abf39whsi04"
  },
  {
    "songName": "Yes and Amen",
    "artist": "Housefires",
    "dateStreamed": "09/06/2017",
    "streamCount": 110000000,
    "userId": "kj74dg7hjd"
  },
  {
    "songName": "We Believe",
    "artist": "Newsboys",
    "dateStreamed": "02/19/2014",
    "streamCount": 57000000,
    "userId": "sdjd94hjkf"
  },
  {
    "songName": "Your Great Name",
    "artist": "Natalie Grant",
    "dateStreamed": "05/23/2013",
    "streamCount": 46000000,
    "userId": "hjdks84dhf"
  },
  {
    "songName": "He Knows My Name",
    "artist": "Francesca Battistelli",
    "dateStreamed": "11/07/2009",
    "streamCount": 39000000,
    "userId": "dfg37dfkj9"
  },
  {
    "songName": "Glorious Day",
    "artist": "Casting Crowns",
    "dateStreamed": "08/06/2009",
    "streamCount": 52000000,
    "userId": "dksjh29dk"
  },
  {
    "songName": "Who You Say I Am",
    "artist": "Hillsong Worship",
    "dateStreamed": "10/18/2017",
    "streamCount": 80000000,
    "userId": "vfn93jsh08"
  },
  {
    "songName": "The Potter's Hand",
    "artist": "Darlene Zschech",
    "dateStreamed": "03/13/1997",
    "streamCount": 53000000,
    "userId": "hfds738dj"
  }
]

export const dashboardData = {
  keyMetrics,
  userGrowthData,
  revenueDistributionData,
  top5MostStreamedSongs,
  streamsTableData,
}