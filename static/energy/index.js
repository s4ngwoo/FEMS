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
const canvas = document.getElementById('chart1');
canvas.width = 431;
canvas.height = 253;

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
    plugins: {
      legend: {
	labels: {
	  display: true,
	  onClick: (e, legendItem, legend) => {},
	  usePointStyle: true,
	  boxWidth: 3,
	},
      },
    },
    responsive: false,
    maintainAspectRatio: false,
    //legend: {
      //display: true,
      //onClick: (e, legendItem, legend) => {},
    //},
    scales: {
      y: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: '단위: TOE',
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
