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
    console.log('./melting_map/' + selectedPage);

    // 선택된 페이지 파일 로드
    $('#pageContent').load('./melting_map/' + selectedPage);
  });

  // 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
  $('#pageContent').load('./melting_map/seoul');
};

// grapph
// JSON 데이터
var jsonData = {
  solvent: {
    '2k toe 미만': {
      fuel: 141700,
      'Number of Companies': 833,
    },
    '2k toe 이상': {
      fuel: 120000,
      'Number of Companies': 32,
    },
  },
  // 데이터 생략
};

// 데이터 분류
var labels = Object.keys(jsonData.solvent);
var fuelData = [];
var companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.solvent[label].fuel);
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
        label: '에너지소비',
        data: fuelData,
        backgroundColor: '#FF7A00',
        borderColor: '#FF7A00',
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
var constants = jsonData.solvent;

for (item in constants) {
  var row = document.createElement('tr');
  row.innerHTML =
    '<td>' +
    item +
    '</td><td>' +
    constants[item].fuel +
    '</td><td>' +
    constants[item]['Number of Companies'] +
    '</td>';
  tableBody.appendChild(row);
}

// graph2
const data = {
  용해업종: {
    보일러용: {
      석탄류: 0,
      석유류: 6252,
      도시가스: 14754,
      기타연료: 126,
      열에너지: 0,
      전력: 0,
      합계: 21132,
    },
    오븐용: {
      석탄류: 5550,
      석유류: 99.0,
      도시가스: 3974.0,
      기타연료: 0.0,
      열에너지: 1.0,
      전력: 81634.0,
      합계: 91258.0,
    },
    동력용: {
      석탄류: 0,
      석유류: 1031,
      도시가스: 156,
      기타연료: 0,
      열에너지: 0,
      전력: 106502,
      합계: 107689,
    },
    '공정용히터 및 건조기': {
      석탄류: 0,
      석유류: 5049,
      도시가스: 3308,
      기타연료: 0,
      열에너지: 0,
      전력: 44679,
      합계: 53036,
    },
    전력: {
      석탄류: 19,
      석유류: 2260,
      도시가스: 567,
      기타연료: 0,
      열에너지: 0,
      전력: 27872,
      합계: 30718,
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
const categories = Object.keys(data.용해업종);
const fuels = Object.keys(data.용해업종.보일러용).filter(
  item => item !== '합계'
);

// 데이터 가공
const dataset = fuels.map(fuel => ({
  label: fuel,
  data: categories.map(category => data.용해업종[category][fuel]),
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
    소기업: 4,
    중견기업: 0,
    중기업: 3,
    대기업: 0,
    총합계: 7,
  },
  gyeonggi: {
    소기업: 318,
    중견기업: 0,
    중기업: 20,
    대기업: 0,
    총합계: 338,
  },
  gyeongnam: {
    소기업: 146,
    중견기업: 0,
    중기업: 38,
    대기업: 3,
    총합계: 187,
  },
  gyeongbuk: {
    소기업: 138,
    중견기업: 0,
    중기업: 27,
    대기업: 2,
    총합계: 167,
  },
  gwangju: {
    소기업: 21,
    중견기업: 0,
    중기업: 0,
    대기업: 0,
    총합계: 21,
  },
  daegu: {
    소기업: 43,
    중견기업: 0,
    중기업: 6,
    대기업: 0,
    총합계: 49,
  },
  daejeon: {
    소기업: 10,
    중견기업: 0,
    중기업: 0,
    대기업: 0,
    총합계: 10,
  },
  busan: {
    소기업: 89,
    중견기업: 0,
    중기업: 2,
    대기업: 0,
    총합계: 91,
  },
  seoul: {
    소기업: 16,
    중견기업: 0,
    중기업: 0,
    대기업: 0,
    총합계: 16,
  },
  sejong: {
    소기업: 4,
    중견기업: 0,
    중기업: 0,
    대기업: 0,
    총합계: 4,
  },
  ulsan: {
    소기업: 5,
    중견기업: 0,
    중기업: 7,
    대기업: 0,
    총합계: 12,
  },
  incheon: {
    소기업: 89,
    중견기업: 0,
    중기업: 16,
    대기업: 1,
    총합계: 106,
  },
  jeonnam: {
    소기업: 15,
    중견기업: 1,
    중기업: 2,
    대기업: 0,
    총합계: 18,
  },
  jeonbuk: {
    소기업: 19,
    중견기업: 0,
    중기업: 7,
    대기업: 0,
    총합계: 26,
  },
  chungnam: {
    소기업: 25,
    중견기업: 0,
    중기업: 9,
    대기업: 1,
    총합계: 35,
  },
  chungbuk: {
    소기업: 29,
    중견기업: 1,
    중기업: 2,
    대기업: 1,
    총합계: 33,
  },
};

const personData = {
  seoul: {
    '0~10인': 14,
    '11~50인': 2,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 16,
  },
  busan: {
    '0~10인': 39,
    '11~50인': 50,
    '51~150인': 2,
    '150인 이상': 0,
    총합계: 91,
  },
  daegu: {
    '0~10인': 23,
    '11~50인': 20,
    '51~150인': 6,
    '150인 이상': 0,
    총합계: 49,
  },
  incheon: {
    '0~10인': 32,
    '11~50인': 58,
    '51~150인': 15,
    '150인 이상': 1,
    총합계: 106,
  },
  gwangju: {
    '0~10인': 14,
    '11~50인': 7,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 21,
  },
  daejeon: {
    '0~10인': 5,
    '11~50인': 5,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 10,
  },
  ulsan: {
    '0~10인': 5,
    '11~50인': 2,
    '51~150인': 3,
    '150인 이상': 2,
    총합계: 12,
  },
  sejong: {
    '0~10인': 0,
    '11~50인': 4,
    '51~150인': 0,
    '150인 이상': 0,
    총합계: 4,
  },
  gyeonggi: {
    '0~10인': 191,
    '11~50인': 130,
    '51~150인': 10,
    '150인 이상': 7,
    총합계: 338,
  },
  chungbuk: {
    '0~10인': 20,
    '11~50인': 9,
    '51~150인': 3,
    '150인 이상': 1,
    총합계: 33,
  },
  chungnam: {
    '0~10인': 4,
    '11~50인': 22,
    '51~150인': 6,
    '150인 이상': 3,
    총합계: 35,
  },
  jeonbuk: {
    '0~10인': 10,
    '11~50인': 10,
    '51~150인': 5,
    '150인 이상': 1,
    총합계: 26,
  },
  jeonnam: {
    '0~10인': 10,
    '11~50인': 6,
    '51~150인': 2,
    '150인 이상': 0,
    총합계: 18,
  },
  gyeongbuk: {
    '0~10인': 60,
    '11~50인': 83,
    '51~150인': 23,
    '150인 이상': 1,
    총합계: 167,
  },
  gyeongnam: {
    '0~10인': 66,
    '11~50인': 87,
    '51~150인': 24,
    '150인 이상': 10,
    총합계: 187,
  },
  gangwon: {
    '0~10인': 4,
    '11~50인': 0,
    '51~150인': 1,
    '150인 이상': 2,
    총합계: 7,
  },
};
