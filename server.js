let express = require("express");
let app = express();

//import MD5 to encrypt password
const md5 = require("md5");

//import generate and verify token
const jwt = require("jsonwebtoken");
const secret = "sneat";
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sneatadmin:sneat123456@clustersneatweb1.si12kxs.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("success 8000");
});
const analyticsDataSchema = new mongoose.Schema({
  page: String,
  stackedBarData: Array,
  month: String,
  year22: Number,
  revenue_2022: Number,
  year21: Number,
  revenue_2021: Number,
  color22: String,
  color21: String,

  pieChartData: Array,
  id: String,
  label: Number,
  value: Number,
  color: String,
  country: String,

  burger: Number,
  burgerColor: String,
  sandwich: Number,
  sandwichColor: String,
  type: String,
  titleSubscribe: String,
  mins: String,
  avatarInfo: String,
  avatarInfoSub: String,
  color: String,
  avatar: Array,
  bscType: String,
  tabledata: Array,
  number: Array,
  brower: Object,
  browericonUrl: String,
  browername: String,
  visits: String,
  datapercentage: Number,
  page: String,

  analyticsSales: Array,
  picIcon: String,
  title: Array,
  amount: String,
  percentage: Number,
  growth: String,
});
//  db Analytics Page
const AnalyticsDataModel = mongoose.model("AnalyticsData", analyticsDataSchema);

const analyticsData = {
  page: "analytics",
  stackedBarData: [
    {
      month: "Jan",
      year22: 2022,
      revenue_2022: 18,
      year21: 2021,
      revenue_2021: -13,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Feb",
      year22: 2022,
      revenue_2022: 7,
      year21: 2021,
      revenue_2021: -18,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Mar",
      year22: 2022,
      revenue_2022: 15,
      year21: 2021,
      revenue_2021: -9,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Apr",
      year22: 2022,
      revenue_2022: 29,
      year21: 2021,
      revenue_2021: -14,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "May",
      year22: 2022,
      revenue_2022: 18,
      year21: 2021,
      revenue_2021: -5,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jun",
      year22: 2022,
      revenue_2022: 12,
      year21: 2021,
      revenue_2021: -17,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jul",
      year22: 2022,
      revenue_2022: 9,
      year21: 2021,
      revenue_2021: -15,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
  ],
  pieChartData: [
    {
      id: "make",
      label: "make",
      value: 284,
      color: "hsl(158, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 364,
      color: "hsl(329, 70%, 50%)",
    },
    {
      id: "rust",
      label: "rust",
      value: 596,
      color: "hsl(342, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 517,
      color: "hsl(326, 70%, 50%)",
    },
    {
      id: "java",
      label: "java",
      value: 276,
      color: "hsl(11, 70%, 50%)",
    },
  ],
  revenueBarData: [
    {
      country: "Mon",
      burger: 89,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Tue",
      burger: 104,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Wed",
      burger: 100,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Thu",
      burger: 30,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Fri",
      burger: 0,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 130,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Sat",
      burger: 40,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Sun",
      burger: 60,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
  ],
  orderStatisPieData: [
    {
      id: "Decor",
      label: "Decor",
      value: 40,
      color: "hsl(148, 70%, 50%)",
    },
    {
      id: "Fashion",
      label: "Fashion",
      value: 45,
      color: "hsl(92, 70%, 50%)",
    },
    {
      id: "Sport",
      label: "Sport",
      value: 20,
      color: "hsl(114, 70%, 50%)",
    },
    {
      id: "Electronic",
      label: "Electronic",
      value: 80,
      color: "hsl(353, 70%, 50%)",
    },
  ],
  activityTimeline: [
    {
      type: "invoices",
      titleSubscribe: "12 Invoices have been paid",
      mins: "12 min ago",
      subtitleSubscribe: "Invoices have been paid to the company",
      avatarInfo: "Invoices.pdf",
      avatarInfoSub: "",
      color: "primary",
      avatar: [""],
    },
    {
      type: "meeting",
      titleSubscribe: "Client Meeting",
      mins: "45 min ago",
      subtitleSubscribe: "Project meeting with john @10:15am",
      avatar: ["https://greakproject.vercel.app/images/avatars/3.png"],
      avatarInfo: "Steven Nash (Client)",
      avatarInfoSub: "CEO of ThemeSelection",
      color: "secondary",
    },
    {
      type: "newProject",
      titleSubscribe: "Create a new project for client",
      mins: "2 days ago",
      subtitleSubscribe: "5 team members in a project",
      avatar: [
        "https://greakproject.vercel.app/images/avatars/12.png",
        "https://greakproject.vercel.app/images/avatars/5.png",
        "https://greakproject.vercel.app/images/avatars/9.png",
        "https://greakproject.vercel.app/images/avatars/6.png",
        "https://greakproject.vercel.app/images/avatars/14.png",
      ],
      avatarInfo: "",
      avatarInfoSub: "",
      color: "info",
    },
  ],
  bscUserData: [
    {
      bscType: "BROWSER",
      tabledata: [
        {
          number: 1,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/chrome.png",
            browername: "Chrome",
          },
          visits: "8.92k",
          datapercentage: 64.91,
        },
        {
          number: 2,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/safari.png",
            browername: "Safari",
          },
          visits: "1.29k",
          datapercentage: 19.03,
        },
        {
          number: 3,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/firefox.png",
            browername: "Firefox",
          },
          visits: "328",
          datapercentage: 3.26,
        },
        {
          number: 4,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/edge.png",
            browername: "Edge",
          },
          visits: "142",
          datapercentage: 3.99,
        },
        {
          number: 5,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/opera.png",
            browername: "Opera",
          },
          visits: "85",
          datapercentage: 2.12,
        },
        {
          number: 6,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/brave.png",
            browername: "Brave",
          },
          visits: "36",
          datapercentage: 1.06,
        },
      ],
    },
    {
      bscType: "SYSTEM",
      tabledata: [
        {
          number: 1,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/windows.png",
            browername: "Windows",
          },
          visits: "475.26k",
          datapercentage: 61.5,
        },
        {
          number: 2,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/mac.png",
            browername: "Mac",
          },
          visits: "89.12k",
          datapercentage: 15.67,
        },
        {
          number: 3,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/ubuntu.png",
            browername: "Ubuntu",
          },
          visits: "38.68k",
          datapercentage: 5.82,
        },
        {
          number: 4,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/linux.png",
            browername: "Linux",
          },
          visits: "30.27k",
          datapercentage: 5.03,
        },

        {
          number: 5,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/chrome.png",
            browername: "Chrome",
          },
          visits: "8.34k",
          datapercentage: 3.25,
        },
        {
          number: 6,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/cent.png",
            browername: "Cent",
          },
          visits: "2.25k",
          datapercentage: 1.76,
        },
      ],
    },
    {
      bscType: "COUNTRY",
      tabledata: [
        {
          number: 1,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/usa.png",
            browername: "USA",
          },
          visits: "87.24k",
          datapercentage: 38.12,
        },
        {
          number: 2,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/china.png",
            browername: "China",
          },
          visits: "62.69k",
          datapercentage: 35.99,
        },
        {
          number: 3,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/brazil.png",
            browername: "Brazil",
          },
          visits: "12.58k",
          datapercentage: 12.72,
        },
        {
          number: 4,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/india.png",
            browername: "India",
          },
          visits: "4.13k",
          datapercentage: 5.03,
        },
        {
          number: 5,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/australia.png",
            browername: "Australia",
          },
          visits: "2.21k",
          datapercentage: 7.11,
        },
        {
          number: 6,
          brower: {
            browericonUrl:
              "https://greakproject.vercel.app/images/cards/france.png",
            browername: "France",
          },
          visits: "1.56k",
          datapercentage: 6.59,
        },
      ],
    },
  ],
  analyticsSales: [
    {
      picIcon:
        "https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png",
      title: "Sales",
      amount: "$4,679",
      percentage: 28.14,
      growth: "positive",
    },
  ],
};
//  db cmd Page
const crmDataSchema = new mongoose.Schema({
  page: String,
  customerRating: Array,
  ratingNumber: Number,
  pointNumber: Number,

  stackedBarData: Array,
  month: String,
  year22: Number,
  revenue_2022: Number,
  year21: Number,
  revenue_2021: Number,

  crmOrder: Array,
  picIcon: String,
  title: String,
  amount: String,
  percentage: Number,
  growth: String,

  pieChartData: Array,
  id: String,
  label: String,
  value: Number,
  color: String,

  topSalesVolume: Object,
  sales: Array,
  volume: Array,
  subTitle: String,
  leadNumber: String,
  color: String,
  imgurl: String,

  salesCountry: Array,

  heat: Array,
  id: String,
  data: Array,
  x: String,
  y: Number,

  teamMembers: Array,
  project: String,
  tasks: String,
  progress: Number,

  tableCustomers: Array,
  status: String,
  statusbgColor: String,
  statusColor: String,
  paidBy: String,
});
const crmDataModel = mongoose.model("CrmData", crmDataSchema);

const crmData = {
  page: "crm",
  customerRating: [
    {
      ratingNumber: 4,
      pointNumber: 5,
    },
  ],
  stackedBarData: [
    {
      month: "Jan",
      year22: 2022,
      revenue_2022: 8,
      year21: 2021,
      revenue_2021: -17,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Feb",
      year22: 2022,
      revenue_2022: 7,
      year21: 2021,
      revenue_2021: -18,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Mar",
      year22: 2022,
      revenue_2022: 5,
      year21: 2021,
      revenue_2021: -10,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Apr",
      year22: 2022,
      revenue_2022: 9,
      year21: 2021,
      revenue_2021: -14,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "May",
      year22: 2022,
      revenue_2022: 8,
      year21: 2021,
      revenue_2021: -15,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jun",
      year22: 2022,
      revenue_2022: 2,
      year21: 2021,
      revenue_2021: -17,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jul",
      year22: 2022,
      revenue_2022: 9,
      year21: 2021,
      revenue_2021: -15,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
  ],
  crmOrder: [
    {
      picIcon:
        "https://greakproject.vercel.app/images/cards/stats-vertical-cube.png",
      title: "Order",
      amount: "$1,286",
      percentage: 13.24,
      growth: "negative",
    },
  ],
  leads: [
    {
      title: "Generated Leads",
      subTitle: "Monthly Report",
      leadNumber: "4,234",
      growth: "positive",
      percentage: 12.8,
    },
  ],
  pieChartData: [
    {
      id: "firstWeek",
      label: "First_Week",
      value: 23,
      color: "hsl(329, 70%, 50%)",
    },
    {
      id: "secondWeek",
      label: "Second_Week",
      value: 27,
      color: "hsl(342, 70%, 50%)",
    },
    {
      id: "thirdWeek",
      label: "Third_Week",
      value: 22,
      color: "hsl(326, 70%, 50%)",
    },
    {
      id: "fourthWeek",
      label: "Fourth_Week",
      value: 28,
      color: "hsl(158, 70%, 50%)",
    },
  ],
  topSalesVolume: {
    sales: [
      {
        title: "onePlus Nord",
        subTitle: "Oneplus",
        amount: "98,348",
        color: "#FFE0DB",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-oneplus-nord-error.png",
      },
      {
        title: "Smart Band 4",
        subTitle: "Xiaomi",
        amount: "15,459",
        color: "#E7E7FF",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-xiaomi-band.png",
      },
      {
        title: "Surface Pro X",
        subTitle: "Microsoft",
        amount: "4,589",
        color: "#D6F5FC",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-microsoft-surface.png",
      },
      {
        title: "iPhone 13",
        subTitle: "Apple",
        amount: "84,345",
        color: "#E8F9DF",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-apple-iPhone.png",
      },
      {
        title: "Bluetooth Earphone",
        subTitle: "Beats",
        amount: "10,3748",
        color: "#EBEDF0",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-beats-headphone.png",
      },
    ],
    volume: [
      {
        title: "ENVY Laptop",
        subTitle: "HP",
        amount: "12.4",
        percentage: "12.4",
        growth: "positive",
        color: "#EBEDF0",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-hp-envy.png",
      },
      {
        title: "Apple",
        subTitle: "iMac Pro",
        amount: "74.9",
        percentage: "8.5",
        growth: "negative",
        color: "#FFF1D6",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-apple-iMac.png",
      },
      {
        title: "Smart Watch",
        subTitle: "Fitbit",
        amount: "4.4",
        percentage: "17.6",
        growth: "positive",
        color: "#FFE0DB",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-fitbit-watch.png",
      },
      {
        title: "Oneplus Nord",
        subTitle: "Oneplus",
        amount: "12.34",
        percentage: "13.9",
        growth: "positive",
        color: "#E8F9DF",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-oneplus-nord-success.png",
      },
      {
        title: "Pixel 4a",
        subTitle: "Google",
        amount: "8.65",
        percentage: "11.8",
        growth: "negative",
        color: "#E7E7FF",
        imgurl:
          "https://greakproject.vercel.app/images/cards/avatar-google-pixel.png",
      },
    ],
  },
  earningReport: [
    {
      title: "Net Profit",
      subTitle: "12.4k Sales",
      amount: "1,619",
      percentage: "18.6",
      growth: "positive",
      color: "#E7E7FF",
      imgurl: "https://greakproject.vercel.app/images/cards/avatar-hp-envy.png",
    },
    {
      title: "Total Income",
      subTitle: "Sales, Affiliation",
      amount: "3,571",
      percentage: "39.6",
      growth: "positive",
      color: "#E8FADF",
      imgurl:
        "https://greakproject.vercel.app/images/cards/avatar-apple-iMac.png",
    },
    {
      title: "Total Expenses",
      subTitle: "FADVT, Marketing",
      amount: "430",
      percentage: "52.8",
      growth: "positive",
      color: "#FEBEDF0",
      imgurl:
        "https://greakproject.vercel.app/images/cards/avatar-fitbit-watch.png",
    },
  ],
  revenueBarData: [
    {
      country: "Mon",
      burger: 89,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Tue",
      burger: 104,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Wed",
      burger: 100,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Thu",
      burger: 30,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Fri",
      burger: 0,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 130,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Sat",
      burger: 40,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
    {
      country: "Sun",
      burger: 60,
      burgerColor: "hsl(35, 70%, 50%)",
      kebab: 0,
      kebabColor: "hsl(194, 70%, 50%)",
    },
  ],
  heat: [
    {
      id: "8k",
      data: [
        {
          x: "Jan",
          y: 34330,
        },
        {
          x: "Feb",
          y: 51406,
        },
        {
          x: "Mar",
          y: 37888,
        },
        {
          x: "Apr",
          y: -6521,
        },
        {
          x: "May",
          y: 53300,
        },
        {
          x: "Jun",
          y: -35127,
        },
        {
          x: "Jul",
          y: -4854,
        },
        {
          x: "Aug",
          y: 36213,
        },
      ],
    },
    {
      id: "7k",
      data: [
        {
          x: "Jan",
          y: -18405,
        },
        {
          x: "Feb",
          y: 69280,
        },
        {
          x: "Mar",
          y: -74567,
        },
        {
          x: "Apr",
          y: 5913,
        },
        {
          x: "May",
          y: -8883,
        },
        {
          x: "Jun",
          y: -87457,
        },
        {
          x: "Jul",
          y: -22426,
        },
        {
          x: "Aug",
          y: -3384,
        },
      ],
    },
    {
      id: "6k",
      data: [
        {
          x: "Jan",
          y: 27088,
        },
        {
          x: "Feb",
          y: 90068,
        },
        {
          x: "Mar",
          y: 69747,
        },
        {
          x: "Apr",
          y: -31379,
        },
        {
          x: "May",
          y: 56026,
        },
        {
          x: "Jun",
          y: 28934,
        },
        {
          x: "Jul",
          y: -90493,
        },
        {
          x: "Aug",
          y: 44520,
        },
      ],
    },
    {
      id: "5k",
      data: [
        {
          x: "Jan",
          y: -38937,
        },
        {
          x: "Feb",
          y: -94702,
        },
        {
          x: "Mar",
          y: 6378,
        },
        {
          x: "Apr",
          y: 58546,
        },
        {
          x: "May",
          y: -51404,
        },
        {
          x: "Jun",
          y: 89578,
        },
        {
          x: "Jul",
          y: 12836,
        },
        {
          x: "Aug",
          y: -37797,
        },
      ],
    },
    {
      id: "4k",
      data: [
        {
          x: "Jan",
          y: 97751,
        },
        {
          x: "Feb",
          y: -69941,
        },
        {
          x: "Mar",
          y: 57661,
        },
        {
          x: "Apr",
          y: 63792,
        },
        {
          x: "May",
          y: 5019,
        },
        {
          x: "Jun",
          y: 63315,
        },
        {
          x: "Jul",
          y: 83019,
        },
        {
          x: "Aug",
          y: 46476,
        },
      ],
    },
    {
      id: "3k",
      data: [
        {
          x: "Jan",
          y: 56563,
        },
        {
          x: "Feb",
          y: -54531,
        },
        {
          x: "Mar",
          y: -13041,
        },
        {
          x: "Apr",
          y: 42557,
        },
        {
          x: "May",
          y: -78167,
        },
        {
          x: "Jun",
          y: -58375,
        },
        {
          x: "Jul",
          y: -46348,
        },
        {
          x: "Aug",
          y: -5484,
        },
      ],
    },
    {
      id: "2k",
      data: [
        {
          x: "Jan",
          y: -3647,
        },
        {
          x: "Feb",
          y: -68445,
        },
        {
          x: "Mar",
          y: 70841,
        },
        {
          x: "Apr",
          y: -51750,
        },
        {
          x: "May",
          y: 89443,
        },
        {
          x: "Jun",
          y: 61440,
        },
        {
          x: "Jul",
          y: -86270,
        },
        {
          x: "Aug",
          y: -77369,
        },
      ],
    },
    {
      id: "1k",
      data: [
        {
          x: "Jan",
          y: 97706,
        },
        {
          x: "Feb",
          y: 31112,
        },
        {
          x: "Mar",
          y: -17342,
        },
        {
          x: "Apr",
          y: 31639,
        },
        {
          x: "May",
          y: 74258,
        },
        {
          x: "Jun",
          y: -48654,
        },
        {
          x: "Jul",
          y: 54344,
        },
        {
          x: "Aug",
          y: 94995,
        },
      ],
    },
  ],
  salesCountry: [
    {
      title: "8,656",
      subTitle: "United states of america",
      amount: "894",
      percentage: "25.8",
      growth: "positive",
      imgurl: "https://greakproject.vercel.app/images/cards/usa.png",
    },
    {
      title: "2,415",
      subTitle: "Brazil",
      amount: "645",
      percentage: "6.2",
      growth: "negative",
      imgurl: "https://greakproject.vercel.app/images/cards/brazil.png",
    },
    {
      title: "865",
      subTitle: "India",
      percentage: "12.4",
      amount: "148",
      growth: "positive",
      imgurl: "https://greakproject.vercel.app/images/cards/india.png",
    },
    {
      title: "745",
      subTitle: "Australia",
      percentage: "11.9",
      amount: "86",
      growth: "negative",
      imgurl: "https://greakproject.vercel.app/images/cards/australia.png",
    },
    {
      title: "45",
      subTitle: "Belgium",
      amount: "42",
      percentage: "16.2",
      growth: "positive",
      imgurl: "https://greakproject.vercel.app/images/cards/belgium.png",
    },
    {
      title: "12",
      subTitle: "China",
      percentage: "14.8",
      amount: "80",
      growth: "positive",
      imgurl: "https://greakproject.vercel.app/images/cards/china.png",
    },
  ],
  teamMembers: [
    {
      title: "Nathan Wagner",
      subtitle: "iOS Developer",
      project: "ZIPCAR",
      tasks: "87/135",
      progress: 87,
      imgurl: "https://greakproject.vercel.app/images/avatars/17.png",
      bgColor: "#E7E7FF",
      color: "#787AFF",
    },
    {
      title: "Emma Bowen",
      subtitle: "UI/UX Designer",
      project: "BITBANK",
      tasks: "340/420",
      progress: 340,
      imgurl: "https://greakproject.vercel.app/images/avatars/8.png",
      bgColor: "#FFE0DB",
      color: "#FF573A",
    },
    {
      title: "Adrian McGuire",
      subtitle: "React developer",
      project: "PAYERS",
      tasks: "50/82",
      progress: 50,
      imgurl: "https://greakproject.vercel.app/images/avatars/7.png",
      bgColor: "#FFF1D6",
      color: "#FFB319",
    },
    {
      title: "Alma Gonzalez",
      subtitle: "Product Manager",
      project: "BRANDI",
      tasks: "98/260",
      progress: 98,
      imgurl: "https://greakproject.vercel.app/images/avatars/2.png",
      bgColor: "#D6F5FC",
      color: "#13C6ED",
    },
    {
      title: "Travis Collins",
      subtitle: "VueJs developer",
      project: "AVIATO",
      tasks: "12/25",
      progress: 12,
      imgurl: "https://greakproject.vercel.app/images/avatars/11.png",
      bgColor: "#EBEDF0",
      color: "#919EAD",
    },
  ],
  tableCustomers: [
    {
      title: "Henry Barnes",
      subtitle: "jok@puc.co.uk",
      amount: "459.65",

      status: "PAID",
      statusbgColor: "#E8FADF",
      statusColor: "#75DE3D",
      imgurl: "https://greakproject.vercel.app/images/avatars/7.png",
      paidBy:
        "https://greakproject.vercel.app/images/cards/mastercard-light.png",
    },
    {
      title: "Herman Holland",
      subtitle: "sami@lelo.com",
      amount: "93.81",
      status: "PENDING",
      statusbgColor: "#FFF1D6",
      statusColor: "#FFAE08",
      imgurl: "https://greakproject.vercel.app/images/avatars/20.png",
      paidBy: "https://greakproject.vercel.app/images/cards/visa-light.png",
    },
    {
      title: "Hallie Warner",
      subtitle: "initus@odemi.com",
      amount: "934.34",
      status: "PENDING",
      statusbgColor: "#FFF1D6",
      statusColor: "#FFAE08",
      imgurl: "https://greakproject.vercel.app/images/avatars/9.png",
      paidBy: "https://greakproject.vercel.app/images/cards/visa-light.png",
    },
    {
      title: "John Davidson",
      subtitle: "tum@upkesja.gov",
      amount: "794.97",
      status: "PAID",
      statusbgColor: "#E8FADF",
      statusColor: "#75DE3D",
      imgurl: "https://greakproject.vercel.app/images/avatars/14.png",
      paidBy: "https://greakproject.vercel.app/images/cards/paypal-light.png",
    },
    {
      title: "Cora Schmidt",
      subtitle: "wipare@tin.com",
      amount: "19.49",
      status: "PAID",
      statusbgColor: "#E8FADF",
      statusColor: "#75DE3D",
      imgurl: "https://greakproject.vercel.app/images/avatars/2.png",
      paidBy:
        "https://greakproject.vercel.app/images/cards/mastercard-light.png",
    },
    {
      title: "Betty Ross",
      subtitle: "nur@kaomor.edu",
      amount: "636.27",
      status: "FAILED",
      statusbgColor: "#FFE0DB",
      statusColor: "#FF4A2B",
      imgurl: "https://greakproject.vercel.app/images/avatars/8.png",
      paidBy: "https://greakproject.vercel.app/images/cards/paypal-light.png",
    },
  ],
};
//  db Ecommerce Page
const ecommerceDataSchema = new mongoose.Schema({
  page: String,

  bestSeller: Object,
  awardName: String,
  awardAmount: String,
  awardTarget: Number,

  visitorsActivity: Object,
  newVisitors: Array,
  percentage: Number,
  growth: String,
  growthPercentage: Number,
  activity: Array,
  revenueBarData: Array,
  country: String,
  burger: Number,
  burgerColor: String,
  kebab: Number,
  kebabColor: String,
  lineChart: Array,
  id: String,
  data: Array,
  x: String,
  y: Number,

  analyticsSales: Array,
  picIcon: String,
  title: String,
  amount: String,

  reportIep: Array,
  growthAmount: String,
  color: String,
  imgurl: String,

  conversionRate: Array,
  stackedBarData: Array,
  month: String,
  year22: Number,
  year21: Number,
  revenue_2022: Number,
  revenue_2021: Number,
  color22: String,
  color21: String,

  phoneProductData: Array,
  phoneurl: String,

  subTitle: String,
  categoryColor: String,
  categoryName: String,
  paymentType: String,
  paidAmount: String,
  fullAmount: String,
  status: String,
  statusColor: String,
  statusbgColor: String,

  balanceData: Array,
  Balances: Array,
  amount: Number,
  id: String,
  lineGraph: Array,
  percentage: Number,
});
const ecommerceDataModel = mongoose.model("ecommerceData", ecommerceDataSchema);
const ecommerceData = {
  page: "ecommerce",
  bestSeller: {
    awardName: "Katie",
    awardAmount: "48.9",
    awardTarget: 78,
  },
  visitorsActivity: {
    newVisitors: [
      { percentage: 23, growth: "negative", growthPercentage: 8.75 },
    ],
    activity: [{ percentage: 82, growth: "positive", growthPercentage: 19.6 }],
    revenueBarData: [
      {
        country: "Mon",
        burger: 89,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Tue",
        burger: 104,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Wed",
        burger: 100,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Thu",
        burger: 30,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Fri",
        burger: 0,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 130,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Sat",
        burger: 40,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
      {
        country: "Sun",
        burger: 60,
        burgerColor: "hsl(35, 70%, 50%)",
        kebab: 0,
        kebabColor: "hsl(194, 70%, 50%)",
      },
    ],
    lineChart: [
      {
        id: "series1",
        data: [
          {
            x: "Jan",
            y: 24,
          },
          {
            x: "Feb",
            y: 21,
          },
          {
            x: "Mar",
            y: 30,
          },
          {
            x: "Apr",
            y: 22,
          },
          {
            x: "May",
            y: 42,
          },
          {
            x: "Jun",
            y: 26,
          },
          {
            x: "Jul",
            y: 35,
          },
          {
            x: "Aug",
            y: 29,
          },
        ],
      },
    ],
  },
  analyticsSales: [
    {
      picIcon:
        "https://greakproject.vercel.app/images/cards/stats-vertical-wallet.png",
      title: "Sales",
      amount: "$4,679",
      percentage: 28.14,
      growth: "positive",
    },
  ],
  transactionCard: [
    {
      picIcon:
        "https://greakproject.vercel.app/images/cards/stats-vertical-card.png",
      title: "Transactions",
      amount: "$14,854",
      percentage: 17.53,
      growth: "positive",
    },
  ],
  revenueCard: [
    {
      picIcon:
        "https://greakproject.vercel.app/images/cards/stats-vertical-desktop.png",
      title: "Revenue",
      amount: "$42,389",
      percentage: 52.76,
      growth: "positive",
    },
  ],
  reportIep: [
    {
      title: "Income",
      amount: "42,845",
      growth: "positive",
      growthAmount: "+2.7",
      color: "rgb(113, 221, 55)",
      imgurl: "https://greakproject.vercel.app/images/cards/paypal-primary.png",
    },
    {
      title: "Expense",
      amount: "38,658",
      growth: "negative",
      growthAmount: "-1.15",
      color: "rgb(255, 62, 29)",
      imgurl: "https://greakproject.vercel.app/images/cards/shopping-bag.png",
    },
    {
      title: "Profit",
      amount: "18,220",
      growth: "positive",
      growthAmount: "+1.34",
      color: "rgb(113, 221, 55)",
      imgurl: "https://greakproject.vercel.app/images/cards/wallet-info.png",
    },
  ],
  conversionRate: {
    rate: { number: "8.72", growth: "positive", growthPercentage: 4.8 },
    coversionDetail: [
      {
        title: "Impressions",
        subTitle: "12.4k Visits",

        percentage: "12.8",
        growth: "positive",
      },
      {
        title: "Added To Cart",
        subTitle: "32 Product in cart",

        percentage: "-8.3",
        growth: "negative",
      },
      {
        title: "Checkout",
        subTitle: "21 Product checkout",
        percentage: "9.12",
        growth: "positive",
      },
      {
        title: "Purchased",
        subTitle: "12 Orders",
        percentage: "2.24",
        growth: "positive",
      },
    ],
  },
  stackedBarData: [
    {
      month: "Jan",
      year22: 2022,
      revenue_2022: 8,
      year21: 2021,
      revenue_2021: -13,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Feb",
      year22: 2022,
      revenue_2022: 17,
      year21: 2021,
      revenue_2021: -8,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Mar",
      year22: 2022,
      revenue_2022: 5,
      year21: 2021,
      revenue_2021: -19,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Apr",
      year22: 2022,
      revenue_2022: 29,
      year21: 2021,
      revenue_2021: -14,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "May",
      year22: 2022,
      revenue_2022: 18,
      year21: 2021,
      revenue_2021: -5,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jun",
      year22: 2022,
      revenue_2022: 12,
      year21: 2021,
      revenue_2021: -17,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Jul",
      year22: 2022,
      revenue_2022: 9,
      year21: 2021,
      revenue_2021: -15,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Aug",
      year22: 2022,
      revenue_2022: 3,
      year21: 2021,
      revenue_2021: -6,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Sep",
      year22: 2022,
      revenue_2022: 8,
      year21: 2021,
      revenue_2021: -15,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
    {
      month: "Oct",
      year22: 2022,
      revenue_2022: 5,
      year21: 2021,
      revenue_2021: -5,
      color22: "#696CFF",
      color21: "#03C3EC",
    },
  ],
  phoneProductData: [
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/oneplus-7pro-light.png",
      title: "OnePlus 7Pro",
      subTitle: "OnePlus",
      categoryColor: "#E7E7FF",
      id: "phone",
      categoryName: "Smart Phone",
      paymentType: "Partially Paid",
      paidAmount: "120",
      fullAmount: "499",
      status: "CONFIRMED",
      statusColor: "rgb(105, 108, 255)",
      statusbgColor: "rgba(105, 108, 255, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/apple-magic-mouse-light.png",
      title: "Magic Mouse",
      subTitle: "Apple",
      categoryColor: "#FFF1D6",
      id: "mouse",
      categoryName: "Mouse",
      paymentType: "Fully Paid",
      paidAmount: "149",
      fullAmount: "",
      status: "COMPLETED",
      statusColor: "rgb(113, 221, 55)",
      statusbgColor: "rgba(113, 221, 55, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/apple-iMac-pro-light.png",
      title: "iMac Pro",
      subTitle: "Apple",
      categoryColor: "#D6F5FC",
      id: "computer",
      categoryName: "Computer",
      paymentType: "Unpaid",
      paidAmount: "0",
      fullAmount: "899",
      status: "CANCELLED",
      statusColor: "rgb(255, 62, 29)",
      statusbgColor: "rgba(255, 62, 29, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/samsung-note-10-light.png",
      title: "Note 10",
      subTitle: "Samsung",
      categoryColor: "#E7E7FF",
      id: "phone",
      categoryName: "Smart Phone",
      paymentType: "Fully Paid",
      paidAmount: "169",
      fullAmount: "",
      status: "COMPLETED",
      statusColor: "rgb(113, 221, 55)",
      statusbgColor: "rgba(113, 221, 55, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/apple-iPhone-11-pro-light.png",
      title: "iPhone 11 Pro",
      subTitle: "Apple",
      categoryColor: "#E7E7FF",
      id: "phone",
      categoryName: "Smart Phone",
      paymentType: "Fully Paid",
      paidAmount: "399",
      fullAmount: "",
      status: "COMPLETED",
      statusColor: "rgb(113, 221, 55)",
      statusbgColor: "rgba(113, 221, 55, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/mi-led-tv-4x-light.png",
      title: "Mi Led TV 4X",
      subTitle: "Xiaomi",
      categoryColor: "#E7E7FF",
      id: "tv",
      categoryName: "Smart TV",
      paymentType: "Partially Paid",
      paidAmount: "349",
      fullAmount: "2599",
      status: "CONFIRMED",
      statusColor: "rgb(105, 108, 255)",
      statusbgColor: "rgba(105, 108, 255, 0.16)",
    },
    {
      phoneurl:
        "https://greakproject.vercel.app/images/cards/logitech-mx-light.png",
      title: "Logitech MX",
      subTitle: "Logitech",
      categoryColor: "#FFF1D6",
      id: "mouse",
      categoryName: "Mouse",
      paymentType: "Fully Paid",
      paidAmount: "89",
      fullAmount: "",
      status: "COMPLETED",
      statusColor: "rgb(113, 221, 55)",
      statusbgColor: "rgba(113, 221, 55, 0.16)",
    },
  ],
  balanceData: {
    Balances: [
      { amount: 2.54, id: "wallet", color: "#FFF1D6" },
      { amount: 4.21, id: "paypal", color: "#EBEDF0" },
    ],
    lineGraph: [
      {
        id: "line",
        color: "hsl(188, 70%, 50%)",
        data: [
          {
            x: "Jan",
            y: 30,
          },
          {
            x: "Feb",
            y: 51,
          },
          {
            x: "Mar",
            y: 40,
          },
          {
            x: "Apr",
            y: 80,
          },
          {
            x: "May",
            y: 60,
          },
          {
            x: "Jun",
            y: 100,
          },
        ],
      },
    ],
    percentage: 57.6,
  },
};
// account register Page
const registerSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});
const registerModel = mongoose.model("registerAccount", registerSchema);
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//encrypt Middleware
const encryption = (req, res, next) => {
  let password = req.body.password;
  req.body.password = md5(password + md5(password));
  next();
};

app.get("/api/v1/dashboards/analytics", (req, res) => {
  AnalyticsDataModel.create(analyticsData)
    .then((data) => {
      console.log("created_stackedChart Data", data);
      res.send({
        code: 1,
        messgae: "receive user get method, sent back Analystic page Data",
        data: analyticsData,
      });
    })
    .catch((error) => {
      console.log("receive user get method, error incurred ", error);
    });
});

app.get("/api/v1/dashboards/crm", (req, res) => {
  crmDataModel
    .create(crmData)
    .then((data) => {
      res.send({
        code: 1,
        messgae: "receive user get method, sent back CRM page Data",
        data: crmData,
      });
    })
    .catch((error) => {
      console.log("receive user get method, error incurred in CRM page", error);
    });
});

app.get("/api/v1/dashboards/ecommerce", (req, res) => {
  ecommerceDataModel
    .create(ecommerceData)
    .then((data) => {
      res.send({
        code: 1,
        messgae: "receive user get method, sent back Ecommerce page Data",
        data: ecommerceData,
      });
    })
    .catch((error) => {
      console.log(
        "receive user get method, error incurred in ECOMMERCE page",
        error
      );
    });
});

const checkaccount = (req, res, next) => {
  let email = { email: req.body.email };
  registerModel.findOne(email).then((account) => {
    if (account) {
      res.send({
        code: 3,
        message: "账户已注册，重新注册新账户",
      });
    } else {
      next();
    }
  });
};

app.post("/api/v1/register", checkaccount, encryption, (req, res) => {
  registerModel
    .create(req.body)
    .then((data) => {
      res.send({
        code: 1,
        message: "receive user POST method, sent back Register page Data ",
        data: data,
      });
    })
    .catch((error) => {
      res.send({
        code: 0,
        message: "send:register failed",
        data: error,
      });
    });
});

//login

app.post("/api/v1/login", encryption, (req, res) => {
  registerModel
    .findOne(req.body)
    .then((data) => {
      if (data) {
        res.send({
          code: 1,
          message: "login succeeful",
          //generate token value
          token: jwt.sign(
            {
              uid: data._id,
              exp: Math.ceil(Date.now() / 1000) + 3600,
            },
            secret
          ),
        });
      } else {
        console.log("login fail server", data);
        res.send({
          code: 0,
          message: "failure login",
        });
      }
    })
    .catch((error) => {
      console.log(" log in error", error);
      res.send({
        code: 0,
        message: "failure login",
        data: err,
      });
    });
});

app.listen(8000, () => {
  console.log("server listen on 8000");
});
