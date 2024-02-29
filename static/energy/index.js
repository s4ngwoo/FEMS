const data = {
  2018: {
    식품: 2439.5,
    제지: 2168.2,
    바이오의약: 280.3,
    용해: 331,
  },
  2019: {
    식품: 2065.8,
    제지: 2013.3,
    바이오의약: 300.3,
    용해: 307.2,
  },
  2020: {
    식품: 2296.3,
    제지: 1917.5,
    바이오의약: 303.7,
    용해: 251.2,
  },
  2021: {
    식품: 2157.6,
    제지: 1917.5,
    바이오의약: 350,
    용해: 261.7,
  },
};

// 그래프를 그릴 캔버스 요소 가져오기
const ctx = document.getElementById('chart1').getContext('2d');

// 라벨(연도)와 데이터(값)를 분리
const labels = Object.keys(data);
const datasets = [];

const colors = ['#4cb140', '#f4c145', '#5752d1', '#ff696d'];

// 각 데이터셋 생성
for (const category in data[labels[0]]) {
  if (data[labels[0]].hasOwnProperty(category)) {
    const values = [];
    for (const year in data) {
      if (data.hasOwnProperty(year)) {
        values.push(data[year][category]);
      }
    }

    const colorIndex = datasets.length % colors.length;
    datasets.push({
      label: category,
      data: values,
      fill: false,
      borderColor: colors[colorIndex],
      backgroundColor: colors[colorIndex],
      borderWidth: 2,
      yAxisId: 'y',
    });
  }
}

// 꺾은선 그래프 생성
new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: datasets,
  },
  options: {
    scales: {
      y: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: '1000 toe',
          size: 16,
        },
      },
    },
  },
});

// table
const constants = [
  {
    연도: 2018,
    식품: 2439.5,
    제지: 2168.2,
    바이오의약: 280.3,
    용해: 331,
  },
  {
    연도: 2019,
    식품: 2065.8,
    제지: 2013.3,
    바이오의약: 300.3,
    용해: 307.2,
  },
  {
    연도: 2020,
    식품: 2296.3,
    제지: 1917.5,
    바이오의약: 303.7,
    용해: 251.2,
  },
  {
    연도: 2021,
    식품: 2157.6,
    제지: 1917.5,
    바이오의약: 350,
    용해: 261.7,
  },
];

var tableBody = document.querySelector('#table tbody');
constants.forEach(function (item) {
  var row = document.createElement('tr');
  row.innerHTML =
    '<td>' +
    item.식품 +
    '</td><td>' +
    item.제지 +
    '</td><td>' +
    item.바이오의약 +
    '</td><td>' +
    item.용해;
  tableBody.appendChild(row);
});

// map data
const map = {
  식품업종: {
    2021: {
      합계: 10171,
      서울: 579,
      부산: 574,
      대구: 310,
      인천: 377,
      광주: 201,
      대전: 226,
      울산: 108,
      세종: 68,
      경기: 2363,
      강원: 621,
      충북: 680,
      충남: 848,
      전북: 616,
      전남: 833,
      경북: 831,
      경남: 767,
      제주: 169,
    },
  },
  제지업종: {
    2021: {
      합계: 2857,
      서울: 235,
      부산: 97,
      대구: 106,
      인천: 116,
      광주: 35,
      대전: 47,
      울산: 34,
      세종: 21,
      경기: 1360,
      강원: 26,
      충북: 149,
      충남: 144,
      전북: 83,
      전남: 41,
      경북: 181,
      경남: 172,
      제주: 10,
    },
  },
  바이오의약업종: {
    2021: {
      합계: 987,
      서울: 102,
      부산: 30,
      대구: 23,
      인천: 32,
      광주: 14,
      대전: 35,
      울산: 7,
      세종: 12,
      경기: 404,
      강원: 41,
      충북: 104,
      충남: 72,
      전북: 32,
      전남: 13,
      경북: 40,
      경남: 24,
      제주: 2,
    },
  },
  용해업종: {
    2021: {
      합계: 865,
      서울: 38,
      부산: 70,
      대구: 51,
      인천: 88,
      광주: 12,
      대전: 11,
      울산: 12,
      세종: 4,
      경기: 242,
      강원: 3,
      충북: 16,
      충남: 36,
      전북: 15,
      전남: 12,
      경북: 142,
      경남: 112,
      제주: 1,
    },
  },
};

for (const industry in data) {
  if (data.hasOwnProperty(industry)) {
    console.log(`[${industry}]`);
    const yearlyData = data[industry]['2021']; // 2021년 데이터만 가져옴
    for (const region in yearlyData) {
      if (yearlyData.hasOwnProperty(region)) {
        console.log(`${region}: ${yearlyData[region]}`);
      }
    }
  }
}
