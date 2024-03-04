const map = {
  '의료용 물질 및 의약품 제조업': {
    sum: 275566,
    seoul: null,
    busan: null,
    daegu: null,
    incheon: 61228,
    gwangju: null,
    daejeon: null,
    ulsan: null,
    sejong: null,
    gyeonggi: 79222,
    gangwon: null,
    chungbuk: 76713,
    chungnam: 28329,
    jeonbuk: null,
    jeonnam: null,
    gyeongbuk: null,
    gyeongnam: null,
    jeju: null,
  },
};

// jQuery 로드
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// jQuery가 로드된 후 실행될 함수
script.onload = function () {
  // Dropdown 변경 이벤트 처리
  $('#pageDropdown').change(function () {
    var selectedPage = $(this).val(); // 선택된 페이지 값 가져오기
    console.log('./biomed_map/' + selectedPage);

    // 선택된 페이지 파일 로드
    $('#pageContent').load('./biomed_map/' + selectedPage);
  });

  // 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
  $('#pageContent').load('./biomed_map/seoul');
};

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
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
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
    전력: {
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
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
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

const companyData = {
  gangwon: {
    대기업: 1,
    소기업: 25,
    중견기업: 0,
    중기업: 9,
    총합계: 35,
  },
  gyeonggi: {
    대기업: 6,
    소기업: 180,
    중견기업: 2,
    중기업: 61,
    총합계: 249,
  },
  gyeongnam: {
    대기업: 0,
    소기업: 8,
    중견기업: 0,
    중기업: 0,
    총합계: 8,
  },
  gyeongbuk: {
    대기업: 0,
    소기업: 31,
    중견기업: 0,
    중기업: 5,
    총합계: 36,
  },
  gwangju: {
    대기업: 0,
    소기업: 2,
    중견기업: 0,
    중기업: 0,
    총합계: 2,
  },
  daegu: {
    대기업: 0,
    소기업: 17,
    중견기업: 0,
    중기업: 1,
    총합계: 18,
  },
  daejeon: {
    대기업: 1,
    소기업: 24,
    중견기업: 0,
    중기업: 11,
    총합계: 36,
  },
  busan: {
    대기업: 0,
    소기업: 12,
    중견기업: 0,
    중기업: 6,
    총합계: 18,
  },
  seoul: {
    대기업: 0,
    소기업: 37,
    중견기업: 1,
    중기업: 8,
    총합계: 46,
  },
  sejong: {
    대기업: 0,
    소기업: 5,
    중견기업: 1,
    중기업: 7,
    총합계: 13,
  },
  ulsan: {
    대기업: 0,
    소기업: 2,
    중견기업: 0,
    중기업: 1,
    총합계: 3,
  },
  incheon: {
    대기업: 2,
    소기업: 12,
    중견기업: 0,
    중기업: 6,
    총합계: 20,
  },
  jeonnam: {
    대기업: 1,
    소기업: 20,
    중견기업: 0,
    중기업: 3,
    총합계: 24,
  },
  jeonbuk: {
    대기업: 1,
    소기업: 20,
    중견기업: 0,
    중기업: 6,
    총합계: 27,
  },
  jeju: {
    대기업: 0,
    소기업: 1,
    중견기업: 0,
    중기업: 1,
    총합계: 2,
  },
  chungnam: {
    대기업: 1,
    소기업: 38,
    중견기업: 0,
    중기업: 13,
    총합계: 52,
  },
  chungbuk: {
    대기업: 5,
    소기업: 67,
    중견기업: 0,
    중기업: 43,
    총합계: 115,
  },
};

const personData = {
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
