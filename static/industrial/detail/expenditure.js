// food
const foodData = {
  전력비: {
    2010: 430376,
    2011: 511110,
    2012: 609322,
    2013: 679205,
    2014: 750666,
    2015: 756335,
    2016: 841609,
    2017: 753457,
    2018: 845131,
    2019: 866851,
    2020: 896244,
    2021: 914534,
    2022: 1080378,
  },
  가스수도비: {
    2010: 597687,
    2011: 674931,
    2012: 751746,
    2013: 798569,
    2014: 926218,
    2015: 756114,
    2016: 649677,
    2017: 778019,
    2018: 864999,
    2019: 889448,
    2020: 868638,
    2021: 994255,
    2022: 1389134,
  },
  '전력비 비율': {
    2010: 0.0100680111,
    2011: 0.0119566638,
    2012: 0.0142541885,
    2013: 0.0158889981,
    2014: 0.0175607227,
    2015: 0.0176933406,
    2016: 0.0196881999,
    2017: 0.017626014,
    2018: 0.0197705919,
    2019: 0.0202786992,
    2020: 0.020966305,
    2021: 0.0213941726,
    2022: 0.0252738481,
  },
  '가스수도비 비율': {
    2010: 0.0139820049,
    2011: 0.0157890142,
    2012: 0.0175859877,
    2013: 0.0186813426,
    2014: 0.0216675025,
    2015: 0.0176881706,
    2016: 0.0151982341,
    2017: 0.0182006057,
    2018: 0.0202353744,
    2019: 0.0208073227,
    2020: 0.0203205034,
    2021: 0.0232591277,
    2022: 0.0324967388,
  },
};

const years = Object.keys(foodData['전력비']);

const combinedChartData = {
  labels: years,
  datasets: [
    {
      type: 'line',
      label: '전력비 비율',
      data: years.map(year => foodData['전력비 비율'][year]),
      backgroundColor: '#0A7ACC',
      borderColor: '#0A7ACC',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'line',
      label: '가스수도비 비율',
      data: years.map(year => foodData['가스수도비 비율'][year]),
      backgroundColor: '#FF7A00',
      borderColor: '#FF7A00',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '전력비',
      data: years.map(year => foodData['전력비'][year]),
      backgroundColor: 'rgba(10, 122, 204, 0.5)',
      borderColor: 'rgba(10, 122, 204, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
    {
      type: 'bar',
      label: '가스수도비',
      data: years.map(year => foodData['가스수도비'][year]),
      backgroundColor: 'rgba(255, 122, 0, 0.5)',
      borderColor: 'rgba(255, 122, 0, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
  ],
};

var combinedChartCanvas = document.getElementById('chart1').getContext('2d');
var combinedChart = new Chart(combinedChartCanvas, {
  type: 'bar',
  data: combinedChartData,
  options: {
    scales: {
      y1: {
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
  },
});

// paper
const paperData = {
  전력비: {
    2010: 573130,
    2011: 611959,
    2012: 670245,
    2013: 748556,
    2014: 816261,
    2015: 832963,
    2016: 831206,
    2017: 834977,
    2018: 818771,
    2019: 779856,
    2020: 793563,
    2021: 779135,
    2022: 816535,
  },
  가스수도비: {
    2010: 433293,
    2011: 636101,
    2012: 587173,
    2013: 585451,
    2014: 508967,
    2015: 430006,
    2016: 379128,
    2017: 333097,
    2018: 447719,
    2019: 437841,
    2020: 375369,
    2021: 399221,
    2022: 587102,
  },
  '전력비 비율': {
    2010: 0.035995742,
    2011: 0.0384344185,
    2012: 0.0420951025,
    2013: 0.0470134676,
    2014: 0.051265717,
    2015: 0.0523146952,
    2016: 0.0522043459,
    2017: 0.0524411856,
    2018: 0.0514233589,
    2019: 0.0489792811,
    2020: 0.0498401567,
    2021: 0.0489339983,
    2022: 0.0512829257,
  },
  '가스수도비 비율': {
    2010: 0.027213203,
    2011: 0.03995067,
    2012: 0.0368777203,
    2013: 0.0367695692,
    2014: 0.0319659498,
    2015: 0.0270067612,
    2016: 0.0238113407,
    2017: 0.0209203386,
    2018: 0.0281192358,
    2019: 0.0274988427,
    2020: 0.0235752546,
    2021: 0.0250732925,
    2022: 0.0368732611,
  },
};

const years2 = Object.keys(paperData['전력비']);
const colors = ['#0A7ACC', '#FF7A00'];

const combinedChartData2 = {
  labels: years2,
  datasets: [
    {
      type: 'line',
      label: '전력비 비율',
      data: years2.map(year => paperData['전력비 비율'][year]),
      backgroundColor: '#0A7ACC',
      borderColor: '#0A7ACC',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'line',
      label: '가스수도비 비율',
      data: years2.map(year => paperData['가스수도비 비율'][year]),
      backgroundColor: '#FF7A00',
      borderColor: '#FF7A00',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '전력비',
      data: years2.map(year => paperData['전력비'][year]),
      backgroundColor: 'rgba(10, 122, 204, 0.5)',
      borderColor: 'rgba(10, 122, 204, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
    {
      type: 'bar',
      label: '가스수도비',
      data: years2.map(year => paperData['가스수도비'][year]),
      backgroundColor: 'rgba(255, 122, 0, 0.5)',
      borderColor: 'rgba(255, 122, 0, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
  ],
};

var combinedChartCanvas = document.getElementById('chart2').getContext('2d');
var combinedChart = new Chart(combinedChartCanvas, {
  type: 'bar',
  data: combinedChartData2,
  options: {
    scales: {
      y1: {
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
  },
});

// biomed
const biomedData = {
  전력비: {
    2010: 59981,
    2011: 72630,
    2012: 91356,
    2013: 96147,
    2014: 114659,
    2015: 130357,
    2016: 146723,
    2017: 151542,
    2018: 172140,
    2019: 181643,
    2020: 194591,
    2021: 213252,
    2022: 238415,
  },
  가스수도비: {
    2010: 73956,
    2011: 82345,
    2012: 99046,
    2013: 110413,
    2014: 128412,
    2015: 116912,
    2016: 125858,
    2017: 134489,
    2018: 149632,
    2019: 155085,
    2020: 161079,
    2021: 186407,
    2022: 277615,
  },
  '전력비 비율': {
    2010: 0.0091438814,
    2011: 0.0110721746,
    2012: 0.013926884,
    2013: 0.0146572542,
    2014: 0.0174793401,
    2015: 0.0198724421,
    2016: 0.0223673782,
    2017: 0.0231020169,
    2018: 0.0262421058,
    2019: 0.0276908029,
    2020: 0.0296646776,
    2021: 0.032509478,
    2022: 0.0363454842,
  },
  '가스수도비 비율': {
    2010: 0.0112743184,
    2011: 0.0125531904,
    2012: 0.015099196,
    2013: 0.0168320531,
    2014: 0.019575934,
    2015: 0.0178228016,
    2016: 0.0191865862,
    2017: 0.0205023502,
    2018: 0.0228108445,
    2019: 0.0236421341,
    2020: 0.0245558973,
    2021: 0.0284170571,
    2022: 0.0423213791,
  },
};

const years3 = Object.keys(biomedData['전력비']);

const combinedChartData3 = {
  labels: years3,
  datasets: [
    {
      type: 'line',
      label: '전력비 비율',
      data: years3.map(year => biomedData['전력비 비율'][year]),
      backgroundColor: '#0A7ACC',
      borderColor: '#0A7ACC',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'line',
      label: '가스수도비 비율',
      data: years3.map(year => biomedData['가스수도비 비율'][year]),
      backgroundColor: '#FF7A00',
      borderColor: '#FF7A00',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '전력비',
      data: years3.map(year => biomedData['전력비'][year]),
      backgroundColor: 'rgba(10, 122, 204, 0.5)',
      borderColor: 'rgba(10, 122, 204, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
    {
      type: 'bar',
      label: '가스수도비',
      data: years3.map(year => biomedData['가스수도비'][year]),
      backgroundColor: 'rgba(255, 122, 0, 0.5)',
      borderColor: 'rgba(255, 122, 0, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
  ],
};

var combinedChartCanvas = document.getElementById('chart3').getContext('2d');
var combinedChart = new Chart(combinedChartCanvas, {
  type: 'bar',
  data: combinedChartData3,
  options: {
    scales: {
      y1: {
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
  },
});

// melting
const meltingData = {
  전력비: {
    2010: 185133,
    2011: 230346,
    2012: 273147,
    2013: 283520,
    2014: 293471,
    2015: 285481,
    2016: 285093,
    2017: 295840,
    2018: 295655,
    2019: 290109,
    2020: 300976,
    2021: 309917,
    2022: 329216,
  },
  가스수도비: {
    2010: 49099,
    2011: 50760,
    2012: 55013,
    2013: 60216,
    2014: 62415,
    2015: 50620,
    2016: 42114,
    2017: 47621,
    2018: 50074,
    2019: 48445,
    2020: 49667,
    2021: 68765,
    2022: 93381,
  },
  '전력비 비율': {
    2010: 0.0371075092,
    2011: 0.0461698688,
    2012: 0.0547487742,
    2013: 0.0568279076,
    2014: 0.0588224565,
    2015: 0.0572209646,
    2016: 0.057143195,
    2017: 0.0592972918,
    2018: 0.059260211,
    2019: 0.0581485872,
    2020: 0.0603267364,
    2021: 0.0621188439,
    2022: 0.0659870782,
  },
  '가스수도비 비율': {
    2010: 0.0098412579,
    2011: 0.0101741838,
    2012: 0.0110266425,
    2013: 0.0120695164,
    2014: 0.0125102774,
    2015: 0.0101461226,
    2016: 0.0084412052,
    2017: 0.0095450119,
    2018: 0.010036684,
    2019: 0.0097101721,
    2020: 0.0099551061,
    2021: 0.0137830526,
    2022: 0.0187170106,
  },
};

const years4 = Object.keys(meltingData['전력비']);

const combinedChartData4 = {
  labels: years4,
  datasets: [
    {
      type: 'line',
      label: '전력비 비율',
      data: years4.map(year => meltingData['전력비 비율'][year]),
      backgroundColor: '#0A7ACC',
      borderColor: '#0A7ACC',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'line',
      label: '가스수도비 비율',
      data: years4.map(year => biomedData['가스수도비 비율'][year]),
      backgroundColor: '#FF7A00',
      borderColor: '#FF7A00',
      borderWidth: 0.5,
      fill: false,
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '전력비',
      data: years4.map(year => meltingData['전력비'][year]),
      backgroundColor: 'rgba(10, 122, 204, 0.5)',
      borderColor: 'rgba(10, 122, 204, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
    {
      type: 'bar',
      label: '가스수도비',
      data: years4.map(year => meltingData['가스수도비'][year]),
      backgroundColor: 'rgba(255, 122, 0, 0.5)',
      borderColor: 'rgba(255, 122, 0, 0.5)',
      borderWidth: 1,
      yAxisID: 'y-axis-0',
    },
  ],
};

var combinedChartCanvas = document.getElementById('chart4').getContext('2d');
var combinedChart = new Chart(combinedChartCanvas, {
  type: 'bar',
  data: combinedChartData4,
  options: {
    scales: {
      y1: {
        position: 'right',
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
  },
});

const constants = {
  식품: {
    '업종 전체 기대 당기이익 증가액': 246951,
    '당기 이익 증가 비율': 9.6,
  },
  제지: {
    '업종 전체 기대 당기이익 증가액': 140363.7,
    '당기 이익 증가 비율': 13.3,
  },
  바이오: {
    '업종 전체 기대 당기이익 증가액': 51603,
    '당기 이익 증가 비율': 1.4,
  },
  용해: {
    '업종 전체 기대 당기이익 증가액': 42259.7,
    '당기 이익 증가 비율': 13.9,
  },
};

const table = document.getElementById('table');

for (const key in constants) {
  if (constants.hasOwnProperty(key)) {
    const rowData = constants[key];
    const row = document.createElement('tr');

    const cell2 = document.createElement('td');
    cell2.textContent = rowData['업종 전체 기대 당기이익 증가액'];
    row.appendChild(cell2);

    const cell3 = document.createElement('td');
    cell3.textContent = rowData['당기 이익 증가 비율'];
    row.appendChild(cell3);

    table.appendChild(row);
  }
}
