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
  food: {
    '2~5k toe': {
      fuel: 130153,
      Electricity: 104388,
      'Number of Companies': 127,
    },
    '5~10k toe': {
      fuel: 152612,
      Electricity: 122318,
      'Number of Companies': 76,
    },
    '10~20k toe': {
      fuel: 155044,
      Electricity: 91423,
      'Number of Companies': 31,
    },
    '20~50k toe': {
      fuel: 210845,
      Electricity: 85763,
      'Number of Companies': 17,
    },
    '50k toe이상': {
      fuel: 32411,
      Electricity: 40080,
      'Number of Companies': 3,
    },
  },
  // 데이터 생략
};

// 데이터 분류
var labels = Object.keys(jsonData.food);
var fuelData = [];
var electricityData = [];
var companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.food[label].fuel);
  electricityData.push(jsonData.food[label].Electricity);
  companiesData.push(jsonData.food[label]['Number of Companies']);
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
    x: {
      stacked: true,
    },
  },
});

// table
var tableBody = document.querySelector('#table tbody');
var constants = jsonData.food;

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
  식품업종: {
    보일러용: {
      석탄류: 0,
      석유류: 48524,
      도시가스: 460949,
      기타연료: 21385,
      열에너지: 27412,
      전력: 0,
      합계: 558270,
    },
    오븐용: {
      석탄류: 29761,
      석유류: 1114,
      도시가스: 30056,
      기타연료: 0,
      열에너지: 0,
      전력: 103031,
      합계: 163962,
    },
    동력용: {
      석탄류: 0,
      석유류: 6830,
      도시가스: 48148,
      기타연료: 0,
      열에너지: 1193,
      전력: 554460,
      합계: 610631,
    },
    '공정용히터 및 건조기': {
      석탄류: 59.0,
      석유류: 22600.0,
      도시가스: 53455.0,
      기타연료: 34126.0,
      열에너지: 140708.0,
      전력: 181415.0,
      합계: 432363.0,
    },
    기타: {
      석탄류: 59,
      석유류: 3146,
      도시가스: 14957,
      기타연료: 0,
      열에너지: 0,
      전력: 202368,
      합계: 220530,
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
const categories = Object.keys(data.식품업종);
const fuels = Object.keys(data.식품업종.보일러용).filter(
  item => item !== '합계'
);

// 데이터 가공
const dataset = fuels.map(fuel => ({
  label: fuel,
  data: categories.map(category => data.식품업종[category][fuel]),
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
  식품: {
    종업원수별: {
      '0~10인': 12415,
      '11~50인': 5526,
      '51~150인': 780,
      '150인 이상': 254,
      총합계: 18975,
    },
    규모별: {
      소기업: 17712,
      중기업: 1136,
      중견기업: 21,
      대기업: 106,
      총합계: 18975,
    },
  },
  // data ...
};

var tableBody2 = document.querySelector('#table2 tbody');
var constants2 = table2Data.식품.종업원수별;

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
var constants3 = table2Data.식품.규모별;

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
