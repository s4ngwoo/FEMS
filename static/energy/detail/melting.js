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
// JSON 데이터
var jsonData = {
  solvent: {
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
var labels = Object.keys(jsonData.solvent);
var fuelData = [];
var electricityData = [];
var companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.solvent[label].fuel);
  electricityData.push(jsonData.solvent[label].Electricity);
  companiesData.push(jsonData.solvent[label]['Number of Companies']);
});

// Canvas 엘리먼트 가져오기
var ctx = document.getElementById('meltingChart').getContext('2d');

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
var constants = jsonData.solvent;

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
  제지업종: {
    보일러용: {
      석탄류: 2462,
      석유류: 265901,
      도시가스: 206712,
      기타연료: 232771,
      열에너지: 0,
      전력: 0,
      합계: 707846,
    },
    오븐용: {
      석탄류: 0.0,
      석유류: 18946.0,
      도시가스: 6957.0,
      기타연료: 6740.0,
      열에너지: 0.0,
      전력: 17392.0,
      합계: 50035.0,
    },
    동력용: {
      석탄류: 0,
      석유류: 680,
      도시가스: 23032,
      기타연료: 28720,
      열에너지: 29798,
      전력: 484999,
      합계: 567229,
    },
    '공정용히터 및 건조기': {
      석탄류: 3,
      석유류: 6087,
      도시가스: 21589,
      기타연료: 54937,
      열에너지: 352910,
      전력: 151983,
      합계: 587509,
    },
    기타: {
      석탄류: 0,
      석유류: 591,
      도시가스: 3606,
      기타연료: 0,
      열에너지: 0,
      전력: 87822,
      합계: 92019,
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
const categories = Object.keys(data.제지업종);
const fuels = Object.keys(data.제지업종.보일러용).filter(
  item => item !== '합계'
);

// 데이터 가공
const dataset = fuels.map(fuel => ({
  label: fuel,
  data: categories.map(category => data.제지업종[category][fuel]),
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
  제지: {
    종업원수별: {
      '0~10인': 2346,
      '11~50인': 1419,
      '51~150인': 166,
      '150인 이상': 50,
      총합계: 3981,
    },
    규모별: {
      소기업: 3711,
      중기업: 244,
      중견기업: 3,
      대기업: 23,
      총합계: 3981,
    },
  },
  // data ...
};

var tableBody2 = document.querySelector('#table2 tbody');
var constants2 = table2Data.제지.종업원수별;

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
var constants3 = table2Data.제지.규모별;

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
