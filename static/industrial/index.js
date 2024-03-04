/* const data = {
  제조업전체: {
    '2020년 1분기': 100.0,
    '2020년 2분기': 95.1,
    '2020년 3분기': 100.5,
    '2020년 4분기': 104.4,
    '2021년 1분기': 107.8,
    '2021년 2분기': 106.4,
    '2021년 3분기': 107.9,
    '2021년 4분기': 111.5,
    '2022년 1분기': 114.7,
    '2022년 2분기': 112.5,
    '2022년 3분기': 109.4,
    '2022년 4분기': 102.4,
    '2023년 1분기': 101.5,
    '2023년 2분기': 104.8,
    '2023년 3분기': 106.7,
  },
  식품: {
    '2020년 1분기': 99.6,
    '2020년 2분기': 99.4,
    '2020년 3분기': 100.3,
    '2020년 4분기': 100.6,
    '2021년 1분기': 99.5,
    '2021년 2분기': 98.9,
    '2021년 3분기': 99.9,
    '2021년 4분기': 103.5,
    '2022년 1분기': 104.1,
    '2022년 2분기': 104.4,
    '2022년 3분기': 104.8,
    '2022년 4분기': 98.7,
    '2023년 1분기': 97.6,
    '2023년 2분기': 99.4,
    '2023년 3분기': 98.0,
  },
  제지: {
    '2020년 1분기': 102.7,
    '2020년 2분기': 96.9,
    '2020년 3분기': 99.3,
    '2020년 4분기': 101.1,
    '2021년 1분기': 103.6,
    '2021년 2분기': 101.2,
    '2021년 3분기': 99.7,
    '2021년 4분기': 102.7,
    '2022년 1분기': 103.3,
    '2022년 2분기': 101.9,
    '2022년 3분기': 101.5,
    '2022년 4분기': 97.7,
    '2023년 1분기': 96.6,
    '2023년 2분기': 96.8,
    '2023년 3분기': 96.6,
  },
  바이오의약: {
    '2020년 1분기': 101.1,
    '2020년 2분기': 101.3,
    '2020년 3분기': 101.6,
    '2020년 4분기': 96.4,
    '2021년 1분기': 97.8,
    '2021년 2분기': 99.7,
    '2021년 3분기': 105.0,
    '2021년 4분기': 109.3,
    '2022년 1분기': 111.7,
    '2022년 2분기': 115.8,
    '2022년 3분기': 120.0,
    '2022년 4분기': 120.5,
    '2023년 1분기': 126.4,
    '2023년 2분기': 121.7,
    '2023년 3분기': 132.9,
  },
  용해: {
    '2020년 1분기': 110.7,
    '2020년 2분기': 86.7,
    '2020년 3분기': 94.1,
    '2020년 4분기': 109.0,
    '2021년 1분기': 108.1,
    '2021년 2분기': 108.1,
    '2021년 3분기': 104.8,
    '2021년 4분기': 103.5,
    '2022년 1분기': 103.4,
    '2022년 2분기': 103.0,
    '2022년 3분기': 105.6,
    '2022년 4분기': 103.2,
    '2023년 1분기': 104.4,
    '2023년 2분기': 104.3,
    '2023년 3분기': 97.1,
  },
};

const colors = ['#949294', '#4cb140', '#f4c145', '#5752d1', '#ff696d'];

// 꺾은선 그래프를 그리는 함수
function drawLineChart(labels, datasets) {
  var ctx = document.getElementById('chart1').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// 데이터 처리
var labels = Object.keys(data['제조업전체']);
var datasets = [];

var index = 0;
for (const [key, value] of Object.entries(data)) {
  var dataset = {
    label: key,
    data: Object.values(value),
    backgroundColor: colors[index],
    borderColor: colors[index],
    borderWidth: 0.5,
    fill: false,
  };
  datasets.push(dataset);
  index++;
}

// 그래프 그리기
drawLineChart(labels, datasets);
 */
 
 
 const data = {
  제조업전체: {
    '2020년 1분기': 100.0,
    '2020년 2분기': 95.1,
    '2020년 3분기': 100.5,
    '2020년 4분기': 104.4,
    '2021년 1분기': 107.8,
    '2021년 2분기': 106.4,
    '2021년 3분기': 107.9,
    '2021년 4분기': 111.5,
    '2022년 1분기': 114.7,
    '2022년 2분기': 112.5,
    '2022년 3분기': 109.4,
    '2022년 4분기': 102.4,
    '2023년 1분기': 101.5,
    '2023년 2분기': 104.8,
    '2023년 3분기': 106.7,
  },
  식품: {
    '2020년 1분기': 99.6,
    '2020년 2분기': 99.4,
    '2020년 3분기': 100.3,
    '2020년 4분기': 100.6,
    '2021년 1분기': 99.5,
    '2021년 2분기': 98.9,
    '2021년 3분기': 99.9,
    '2021년 4분기': 103.5,
    '2022년 1분기': 104.1,
    '2022년 2분기': 104.4,
    '2022년 3분기': 104.8,
    '2022년 4분기': 98.7,
    '2023년 1분기': 97.6,
    '2023년 2분기': 99.4,
    '2023년 3분기': 98.0,
  },
  제지: {
    '2020년 1분기': 102.7,
    '2020년 2분기': 96.9,
    '2020년 3분기': 99.3,
    '2020년 4분기': 101.1,
    '2021년 1분기': 103.6,
    '2021년 2분기': 101.2,
    '2021년 3분기': 99.7,
    '2021년 4분기': 102.7,
    '2022년 1분기': 103.3,
    '2022년 2분기': 101.9,
    '2022년 3분기': 101.5,
    '2022년 4분기': 97.7,
    '2023년 1분기': 96.6,
    '2023년 2분기': 96.8,
    '2023년 3분기': 96.6,
  },
  바이오의약: {
    '2020년 1분기': 101.1,
    '2020년 2분기': 101.3,
    '2020년 3분기': 101.6,
    '2020년 4분기': 96.4,
    '2021년 1분기': 97.8,
    '2021년 2분기': 99.7,
    '2021년 3분기': 105.0,
    '2021년 4분기': 109.3,
    '2022년 1분기': 111.7,
    '2022년 2분기': 115.8,
    '2022년 3분기': 120.0,
    '2022년 4분기': 120.5,
    '2023년 1분기': 126.4,
    '2023년 2분기': 121.7,
    '2023년 3분기': 132.9,
  },
  용해: {
    '2020년 1분기': 110.7,
    '2020년 2분기': 86.7,
    '2020년 3분기': 94.1,
    '2020년 4분기': 109.0,
    '2021년 1분기': 108.1,
    '2021년 2분기': 108.1,
    '2021년 3분기': 104.8,
    '2021년 4분기': 103.5,
    '2022년 1분기': 103.4,
    '2022년 2분기': 103.0,
    '2022년 3분기': 105.6,
    '2022년 4분기': 103.2,
    '2023년 1분기': 104.4,
    '2023년 2분기': 104.3,
    '2023년 3분기': 97.1,
  },
};

// 데이터 처리
var labels = Object.keys(data['제조업전체']);
var datasets = [];

const colors = ['#949294', '#4cb140', '#f4c145', '#5752d1', '#ff696d'];

// 데이터셋 생성
var index = 0;
for (const [key, value] of Object.entries(data)) {
  var dataset = {
    label: key,
    data: Object.values(value),
    backgroundColor: colors[index],
    borderColor: colors[index],
    borderWidth: 0.5,
    fill: false,
  };
  datasets.push(dataset);
  index++;
}
console.log(datasets);

var ctx = document.getElementById('chart1').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: datasets,
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
