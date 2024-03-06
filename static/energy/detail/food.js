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
    console.log('./food_map/' + selectedPage);

    // 선택된 페이지 파일 로드
    $('#pageContent').load('./food_map/' + selectedPage);
  });

  // 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
  $('#pageContent').load('./food_map/seoul');
};

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
    전력: {
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

// table2

const personData = {
  seoul: {
    '0~10인': 162,
    '11~50인': 62,
    '51~150인': 5,
    '150인 이상': 4,
    총합계: 233,
  },
  busan: {
    '0~10인': 298,
    '11~50인': 262,
    '51~150인': 28,
    '150인 이상': 10,
    총합계: 598,
  },
  daegu: {
    '0~10인': 216,
    '11~50인': 104,
    '51~150인': 19,
    '150인 이상': 4,
    총합계: 343,
  },
  incheon: {
    '0~10인': 383,
    '11~50인': 225,
    '51~150인': 34,
    '150인 이상': 12,
    총합계: 654,
  },
  gwangju: {
    '0~10인': 194,
    '11~50인': 65,
    '51~150인': 8,
    '150인 이상': 4,
    총합계: 271,
  },
  daejeon: {
    '0~10인': 131,
    '11~50인': 58,
    '51~150인': 7,
    '150인 이상': 4,
    총합계: 200,
  },
  ulsan: {
    '0~10인': 64,
    '11~50인': 40,
    '51~150인': 4,
    '150인 이상': 3,
    총합계: 111,
  },
  sejong: {
    '0~10인': 61,
    '11~50인': 37,
    '51~150인': 5,
    '150인 이상': 4,
    총합계: 107,
  },
  gyeonggi: {
    '0~10인': 3098,
    '11~50인': 1420,
    '51~150인': 221,
    '150인 이상': 64,
    총합계: 4803,
  },
  chungbuk: {
    '0~10인': 924,
    '11~50인': 487,
    '51~150인': 126,
    '150인 이상': 40,
    총합계: 1577,
  },
  chungnam: {
    '0~10인': 1286,
    '11~50인': 545,
    '51~150인': 95,
    '150인 이상': 24,
    총합계: 1950,
  },
  jeonbuk: {
    '0~10인': 1105,
    '11~50인': 366,
    '51~150인': 48,
    '150인 이상': 26,
    총합계: 1545,
  },
  jeonnam: {
    '0~10인': 1588,
    '11~50인': 588,
    '51~150인': 47,
    '150인 이상': 9,
    총합계: 2232,
  },
  gyeongbuk: {
    '0~10인': 1031,
    '11~50인': 410,
    '51~150인': 34,
    '150인 이상': 12,
    총합계: 1487,
  },
  gyeongnam: {
    '0~10인': 1070,
    '11~50인': 446,
    '51~150인': 47,
    '150인 이상': 21,
    총합계: 1584,
  },
  jeju: {
    '0~10인': 142,
    '11~50인': 82,
    '51~150인': 10,
    '150인 이상': 1,
    총합계: 235,
  },
  gangwon: {
    '0~10인': 662,
    '11~50인': 329,
    '51~150인': 42,
    '150인 이상': 12,
    총합계: 1045,
  },
};

const companyData = {
  gangwon: {
    소기업: 975,
    중견기업: 3,
    중기업: 65,
    대기업: 2,
    총합계: 1045,
  },
  gyeonggi: {
    소기업: 4478,
    중견기업: 4,
    중기업: 290,
    대기업: 31,
    총합계: 4803,
  },
  gyeongnam: {
    소기업: 1497,
    중견기업: 4,
    중기업: 78,
    대기업: 5,
    총합계: 1584,
  },
  gyeongbuk: {
    소기업: 1422,
    중견기업: 0,
    중기업: 62,
    대기업: 3,
    총합계: 1487,
  },
  gwangju: {
    소기업: 256,
    중견기업: 0,
    중기업: 15,
    대기업: 0,
    총합계: 271,
  },
  daegu: {
    소기업: 318,
    중견기업: 1,
    중기업: 22,
    대기업: 2,
    총합계: 343,
  },
  daejeon: {
    소기업: 186,
    중견기업: 0,
    중기업: 13,
    대기업: 1,
    총합계: 200,
  },
  busan: {
    소기업: 548,
    중견기업: 0,
    중기업: 48,
    대기업: 2,
    총합계: 598,
  },
  seoul: {
    소기업: 222,
    중견기업: 1,
    중기업: 8,
    대기업: 2,
    총합계: 233,
  },
  sejong: {
    소기업: 95,
    중견기업: 0,
    중기업: 11,
    대기업: 1,
    총합계: 107,
  },
  ulsan: {
    소기업: 103,
    중견기업: 0,
    중기업: 6,
    대기업: 2,
    총합계: 111,
  },
  incheon: {
    소기업: 605,
    중견기업: 0,
    중기업: 43,
    대기업: 6,
    총합계: 654,
  },
  jeonnam: {
    소기업: 2145,
    중견기업: 2,
    중기업: 82,
    대기업: 3,
    총합계: 2232,
  },
  jeonbuk: {
    소기업: 1445,
    중견기업: 0,
    중기업: 84,
    대기업: 16,
    총합계: 1545,
  },
  jeju: {
    소기업: 224,
    중견기업: 0,
    중기업: 9,
    대기업: 2,
    총합계: 235,
  },
  chungnam: {
    소기업: 1803,
    중견기업: 4,
    중기업: 135,
    대기업: 8,
    총합계: 1950,
  },
  chungbuk: {
    소기업: 1390,
    중견기업: 2,
    중기업: 165,
    대기업: 20,
    총합계: 1577,
  },
};
