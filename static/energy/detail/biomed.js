const map = {
  식료품제조업: {
    sum: 1125037,
    seoul: 10980,
    busan: 35153,
    daegu: 19387,
    incheon: 158459,
    gwangju: 14986,
    daejeon: 9904,
    ulsan: 29302,
    sejong: null,
    gyeonggi: 275340,
    gangwon: 29613,
    chungbuk: 163719,
    chungnam: 97906,
    jeonbuk: 160310,
    jeonnam: 24082,
    gyeongbuk: 36348,
    gyeongnam: 49882,
    jeju: null,
  },
};

// Dropdown 변경 이벤트 처리
$('#pageDropdown').change(function () {
  var selectedPage = $(this).val(); // 선택된 페이지 값 가져오기

  // 선택된 페이지 파일 로드
  $('#pageContent').load('./map_html/' + selectedPage + '.html');
});

// 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
$('#pageContent').load('./map_html/seoul.html');

// grapph
// // JSON 데이터
var jsonData = {
  pharma: {
    '2~5k toe': {
      fuel: 24222,
      Electricity: 38329,
      'Number of Companies': 40,
    },
    '5~10k toe': {
      fuel: 35091,
      Electricity: 42071,
      'Number of Companies': 23,
    },
    '10~20k toe': {
      fuel: 37686,
      Electricity: 32791,
      'Number of Companies': 10,
    },
    '20~50k toe': {
      fuel: 93517,
      Electricity: 164237,
      'Number of Companies': 23,
    },
    '50k toe이상': {
      fuel: 341302,
      Electricity: 337143,
      'Number of Companies': 15,
    },
  },
  // 데이터 생략
};

// 데이터 분류
var labels = Object.keys(jsonData.pharma);
var fuelData = [];
var electricityData = [];
var companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.pharma[label].fuel);
  electricityData.push(jsonData.pharma[label].Electricity);
  companiesData.push(jsonData.pharma[label]['Number of Companies']);
});

// Canvas 엘리먼트 가져오기
var ctx = document.getElementById('foodChart').getContext('2d');

// 누적 막대 그래프와 꺾은선 그래프 생성
var combinedChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: '기업 수',
        data: companiesData,
        type: 'line',
        fill: false,
        backgroundColor: '#4B494E',
        borderColor: '#4B494E',
        tension: 0.1,
        borderWidth: 0.5,
        yAxisID: 'y1', // 꺾은선 그래프를 위한 y축 지정
      },
      {
        label: '연료',
        data: fuelData,
        backgroundColor: '#FF7A00',
        borderColor: '#FF7A00',
        borderWidth: 1,
        barThickness: 10,
      },
      {
        label: '전력',
        data: electricityData,
        backgroundColor: '#0A7ACC',
        borderColor: '#0A7ACC',
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  },
  options: {
    scales: {
      y: {
        stacked: true, // 누적 막대 그래프 설정
        beginAtZero: true,
      },
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
    x: {
      stacked: true,
    },
  },
});

// table
var tableBody = document.querySelector('#table tbody');
var constants = jsonData.pharma;

for (item in constants) {
  var row = document.createElement('tr');
  row.innerHTML =
    '<td>' +
    item +
    '</td><td>' +
    constants[item].fuel +
    '</td><td>' +
    constants[item].Electricity +
    '</td><td>' +
    constants[item]['Number of Companies'] +
    '</td>';
  tableBody.appendChild(row);
}

// graph2
const data = {
  바이오의약업종: {
    보일러용: {
      석탄류: 0,
      석유류: 1070,
      도시가스: 90509,
      기타연료: 0,
      열에너지: 7842,
      전력: 0,
      합계: 99421,
    },
    오븐용: {
      석탄류: 0.0,
      석유류: 0.0,
      도시가스: 379.0,
      기타연료: 0.0,
      열에너지: 0.0,
      전력: 12895.0,
      합계: 13274.0,
    },
    동력용: {
      석탄류: 0.0,
      석유류: 10.0,
      도시가스: 2167.0,
      기타연료: 0.0,
      열에너지: 3863.0,
      전력: 107276.0,
      합계: 113316.0,
    },
    '공정용히터 및 건조기': {
      석탄류: 0.0,
      석유류: 551.0,
      도시가스: 992.0,
      기타연료: 0.0,
      열에너지: 15517.0,
      전력: 26004.0,
      합계: 43064.0,
    },
    기타: {
      석탄류: 0,
      석유류: 169,
      도시가스: 455,
      기타연료: 0,
      열에너지: 5792,
      전력: 24800,
      합계: 31216,
    },
  },
  // 데이터 생략
};

const colors = [
  '#4B494E',
  '#FF7A00',
  '#4CB140',
  '#5752D1',
  '#0A7ACC',
  '#F4C145',
];

// 데이터 추출
const categories = Object.keys(data.바이오의약업종);
const fuels = Object.keys(data.바이오의약업종.보일러용).filter(
  item => item !== '합계'
);

// 데이터 가공
const dataset = fuels.map(fuel => ({
  label: fuel,
  data: categories.map(category => data.바이오의약업종[category][fuel]),
}));

// 그래프 그리기
const ctx2 = document.getElementById('foodChart2').getContext('2d');
const myChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: categories,
    datasets: dataset.map((item, index) => ({
      label: item.label,
      data: item.data,
      backgroundColor: colors[index],
      borderColor: colors[index],
      borderWidth: 1,
      barThickness: 10,
    })),
  },
  options: {
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
      },
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
    x: {
      stacked: true,
    },
  },
});

// table2

const table2Data = {
  바이오: {
    종업원수별: {
      '0~10인': 248,
      '11~50인': 272,
      '51~150인': 124,
      '150인 이상': 60,
      총합계: 704,
    },
    규모별: {
      소기업: 501,
      중기업: 181,
      중견기업: 4,
      대기업: 18,
      총합계: 704,
    },
  },
  // data ...
};

var tableBody2 = document.querySelector('#table2 tbody');
var constants2 = table2Data.바이오.종업원수별;

for (table2Item in constants2) {
  if (table2Item !== '총합계') {
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + table2Item + '</td><td>' + constants2[table2Item] + '</td>';
    tableBody2.appendChild(row);
  }
}

var total = constants2.총합계;
$('#totalValue').text(total);

var tableBody3 = document.querySelector('#tbody3');
var constants3 = table2Data.바이오.규모별;

for (table3Item in constants3) {
  if (table3Item !== '총합계') {
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + table3Item + '</td><td>' + constants3[table3Item] + '</td>';
    tableBody3.appendChild(row);
  }
}

var total = constants3.총합계;
$('#totalValue2').text(total);
