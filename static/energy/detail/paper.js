const map = {
  '펄프, 종이 및 종이제품 제조업': {
    sum: 1115608,
    seoul: null,
    busan: null,
    daegu: 93052,
    incheon: null,
    gwangju: null,
    daejeon: 90376,
    ulsan: null,
    sejong: null,
    gyeonggi: 162103,
    gangwon: null,
    chungbuk: 77926,
    chungnam: 88595,
    jeonbuk: 111131,
    jeonnam: null,
    gyeongbuk: 37657,
    gyeongnam: 101640,
    jeju: null,
  },
};

// Dropdown 변경 이벤트 처리
$('#pageDropdown').change(function () {
  var selectedPage = $(this).val(); // 선택된 페이지 값 가져오기

  // 선택된 페이지 파일 로드
  $('#pageContent').load('./paper_map/' + selectedPage + '.html');
});

// 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
$('#pageContent').load('./paper_map/seoul.html');

// grapph
// // JSON 데이터
var jsonData = {
  paper: {
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
var labels = Object.keys(jsonData.paper);
var fuelData = [];
var electricityData = [];
var companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.paper[label].fuel);
  electricityData.push(jsonData.paper[label].Electricity);
  companiesData.push(jsonData.paper[label]['Number of Companies']);
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
var constants = jsonData.paper;

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

const companyData = {
  seoul: {
    '0~10인': 20,
    '11~50인': 21,
    '51~150인': 4,
    '150인 이상': 1,
    총합계: 46,
  },
  busan: {
    '0~10인': 5,
    '11~50인': 7,
    '51~150인': 4,
    '150인 이상': 2,
    총합계: 18,
  },
  daegu: {
    '0~10인': 9,
    '11~50인': 8,
    '51~150인': 1,
    '150인 이상': 0,
    총합계: 18,
  },
  incheon: {
    '0~10인': 7,
    '11~50인': 5,
    '51~150인': 4,
    '150인 이상': 4,
    총합계: 20,
  },
  gwangju: {
    '0~10인': 1,
    '11~50인': 1,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 2,
  },
  daejeon: {
    '0~10인': 14,
    '11~50인': 8,
    '51~150인': 11,
    '150인 이상': 3,
    총합계: 36,
  },
  ulsan: {
    '0~10인': 1,
    '11~50인': 1,
    '51~150인': 1,
    '150인 이상': 0,
    총합계: 3,
  },
  sejong: {
    '0~10인': 3,
    '11~50인': 4,
    '51~150인': 2,
    '150인 이상': 4,
    총합계: 13,
  },
  gyeonggi: {
    '0~10인': 77,
    '11~50인': 108,
    '51~150인': 43,
    '150인 이상': 21,
    총합계: 249,
  },
  chungbuk: {
    '0~10인': 23,
    '11~50인': 50,
    '51~150인': 28,
    '150인 이상': 14,
    총합계: 115,
  },
  chungnam: {
    '0~10인': 22,
    '11~50인': 16,
    '51~150인': 8,
    '150인 이상': 6,
    총합계: 52,
  },
  jeonbuk: {
    '0~10인': 14,
    '11~50인': 8,
    '51~150인': 4,
    '150인 이상': 1,
    총합계: 27,
  },
  jeonnam: {
    '0~10인': 12,
    '11~50인': 10,
    '51~150인': 2,
    '150인 이상': 0,
    총합계: 24,
  },
  gyeongbuk: {
    '0~10인': 22,
    '11~50인': 8,
    '51~150인': 6,
    '150인 이상': 0,
    총합계: 36,
  },
  gyeongnam: {
    '0~10인': 6,
    '11~50인': 2,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 8,
  },
  jeju: {
    '0~10인': 0,
    '11~50인': 2,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 2,
  },
  gangwon: {
    '0~10인': 12,
    '11~50인': 13,
    '51~150인': 6,
    '150인 이상': 4,
    총합계: 35,
  },
};

const personData = {
  seoul: {
    '0~10인': 112,
    '11~50인': 52,
    '51~150인': 2,
    '150인 이상': 0,
    총합계: 166,
  },
  busan: {
    '0~10인': 98,
    '11~50인': 35,
    '51~150인': 3,
    '150인 이상': 0,
    총합계: 136,
  },
  daegu: {
    '0~10인': 81,
    '11~50인': 69,
    '51~150인': 11,
    '150인 이상': 4,
    총합계: 165,
  },
  incheon: {
    '0~10인': 93,
    '11~50인': 53,
    '51~150인': 4,
    '150인 이상': 0,
    총합계: 150,
  },
  gwangju: {
    '0~10인': 39,
    '11~50인': 11,
    '51~150인': 3,
    '150인 이상': 1,
    총합계: 54,
  },
  daejeon: {
    '0~10인': 16,
    '11~50인': 8,
    '51~150인': 4,
    '150인 이상': 3,
    총합계: 31,
  },
  ulsan: {
    '0~10인': 20,
    '11~50인': 16,
    '51~150인': 1,
    '150인 이상': 2,
    총합계: 39,
  },
  sejong: {
    '0~10인': 6,
    '11~50인': 11,
    '51~150인': 2,
    '150인 이상': 2,
    총합계: 21,
  },
  gyeonggi: {
    '0~10인': 1131,
    '11~50인': 669,
    '51~150인': 75,
    '150인 이상': 15,
    총합계: 1890,
  },
  chungbuk: {
    '0~10인': 140,
    '11~50인': 97,
    '51~150인': 18,
    '150인 이상': 7,
    총합계: 262,
  },
  chungnam: {
    '0~10인': 121,
    '11~50인': 96,
    '51~150인': 12,
    '150인 이상': 7,
    총합계: 236,
  },
  jeonbuk: {
    '0~10인': 76,
    '11~50인': 38,
    '51~150인': 5,
    '150인 이상': 3,
    총합계: 122,
  },
  jeonnam: {
    '0~10인': 68,
    '11~50인': 32,
    '51~150인': 2,
    '150인 이상': 0,
    총합계: 102,
  },
  gyeongbuk: {
    '0~10인': 151,
    '11~50인': 116,
    '51~150인': 11,
    '150인 이상': 2,
    총합계: 280,
  },
  gyeongnam: {
    '0~10인': 157,
    '11~50인': 91,
    '51~150인': 12,
    '150인 이상': 4,
    총합계: 264,
  },
  jeju: {
    '0~10인': 9,
    '11~50인': 10,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 19,
  },
  gangwon: {
    '0~10인': 28,
    '11~50인': 15,
    '51~150인': 1,
    '150인 이상': 0,
    총합계: 44,
  },
};
