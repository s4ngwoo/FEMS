// jQuery 로드
let script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// jQuery가 로드된 후 실행될 함수
script.onload = function () {
  // Dropdown 변경 이벤트 처리
  $('#pageDropdown').change(function () {
    let selectedPage = $(this).val(); // 선택된 페이지 값 가져오기
    console.log('./paper_map/' + selectedPage);

    // 선택된 페이지 파일 로드
    $('#pageContent').load('./paper_map/' + selectedPage);
  });

  // 페이지 로드 시 초기 페이지 설정 (옵션의 첫 번째 페이지로 설정)
  $('#pageContent').load('./paper_map/seoul');
};

// grapph
// // JSON 데이터
let jsonData = {
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
let labels = Object.keys(jsonData.paper);
let fuelData = [];
let electricityData = [];
let companiesData = [];
labels.forEach(function (label) {
  fuelData.push(jsonData.paper[label].fuel);
  electricityData.push(jsonData.paper[label].Electricity);
  companiesData.push(jsonData.paper[label]['Number of Companies']);
});

// Canvas 엘리먼트 가져오기
let ctx = document.getElementById('foodChart').getContext('2d');
const canvas1 = document.getElementById('foodChart');
canvas1.width = 325;
canvas1.height = 250;

// 누적 막대 그래프와 꺾은선 그래프 생성
let combinedChart = new Chart(ctx, {
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
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
    scales: {
      y: {
        stacked: true, // 누적 막대 그래프 설정
        beginAtZero: true,
        title: {
          display: true,
          text: '단위: TOE',
        },
      },
      y1: {
        position: 'right',
        title: {
          display: true,
          text: '단위: 개',
        },
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
let tableBody = document.querySelector('#table tbody');
let constants = jsonData.paper;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

for (item in constants) {
  let row = document.createElement('tr');
  row.innerHTML =
    '<td>' +
    numberWithCommas(item) +
    '</td><td>' +
    numberWithCommas(constants[item].fuel) +
    '</td><td>' +
    numberWithCommas(constants[item].Electricity) +
    '</td><td>' +
    numberWithCommas(constants[item]['Number of Companies']) +
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
    전력: {
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
const canvas2 = document.getElementById('foodChart2');
canvas2.width = 325;
canvas2.height = 300;

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
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {},
      },
    },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: '단위: TOE',
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

console.log(map['펄프, 종이 및 종이제품 제조업']);

const companyData = {
  gangwon: {
    소기업: 41,
    중견기업: 0,
    중기업: 3,
    대기업: 0,
    총합계: 44,
  },
  gyeonggi: {
    소기업: 1787,
    중견기업: 1,
    중기업: 96,
    대기업: 6,
    총합계: 1890,
  },
  gyeongnam: {
    소기업: 245,
    중견기업: 0,
    중기업: 17,
    대기업: 2,
    총합계: 264,
  },
  gyeongbuk: {
    소기업: 262,
    중견기업: 0,
    중기업: 17,
    대기업: 1,
    총합계: 280,
  },
  gwangju: {
    소기업: 49,
    중견기업: 0,
    중기업: 5,
    대기업: 0,
    총합계: 54,
  },
  daegu: {
    소기업: 146,
    중견기업: 1,
    중기업: 16,
    대기업: 2,
    총합계: 165,
  },
  daejeon: {
    소기업: 24,
    중견기업: 0,
    중기업: 6,
    대기업: 1,
    총합계: 31,
  },
  busan: {
    소기업: 129,
    중견기업: 0,
    중기업: 7,
    대기업: 0,
    총합계: 136,
  },
  seoul: {
    소기업: 164,
    중견기업: 0,
    중기업: 2,
    대기업: 0,
    총합계: 166,
  },
  sejong: {
    소기업: 17,
    중견기업: 0,
    중기업: 4,
    대기업: 0,
    총합계: 21,
  },
  ulsan: {
    소기업: 34,
    중견기업: 0,
    중기업: 3,
    대기업: 2,
    총합계: 39,
  },
  incheon: {
    소기업: 144,
    중견기업: 0,
    중기업: 6,
    대기업: 0,
    총합계: 150,
  },
  jeonnam: {
    소기업: 99,
    중견기업: 0,
    중기업: 3,
    대기업: 0,
    총합계: 102,
  },
  jeonbuk: {
    소기업: 111,
    중견기업: 0,
    중기업: 10,
    대기업: 1,
    총합계: 122,
  },
  jeju: {
    소기업: 19,
    중견기업: 0,
    중기업: 0,
    대기업: 0,
    총합계: 19,
  },
  chungnam: {
    소기업: 207,
    중견기업: 0,
    중기업: 26,
    대기업: 3,
    총합계: 236,
  },
  chungbuk: {
    소기업: 233,
    중견기업: 1,
    중기업: 23,
    대기업: 5,
    총합계: 262,
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

let seoulValue = map['펄프, 종이 및 종이제품 제조업'].seoul;
let seoulPerson = personData.seoul;
let seoulCompany = companyData.seoul;

let busanValue = map['펄프, 종이 및 종이제품 제조업'].busan;
let busanPerson = personData.busan;
let busanCompany = companyData.busan;

let chungbukValue = map['펄프, 종이 및 종이제품 제조업'].chungbuk;
let chungbukPerson = personData.chungbuk;
let chungbukCompany = companyData.chungbuk;

let chungnamValue = map['펄프, 종이 및 종이제품 제조업'].chungnam;
let chungnamPerson = personData.chungnam;
let chungnamCompany = companyData.chungnam;

let daeguValue = map['펄프, 종이 및 종이제품 제조업'].daegu;
let daeguPerson = personData.daegu;
let daeguCompany = companyData.daegu;

let daejeonValue = map['펄프, 종이 및 종이제품 제조업'].daejeon;
let daejeonPerson = personData.daejeon;
let daejeonCompany = companyData.daejeon;

let gangwonValue = map['펄프, 종이 및 종이제품 제조업'].gangwon;
let gangwonPerson = personData.gangwon;
let gangwonCompany = companyData.gangwon;

let gwangjuValue = map['펄프, 종이 및 종이제품 제조업'].gwangju;
let gwangjuPerson = personData.gwangju;
let gwangjuCompany = companyData.gwangju;

let gyeongbukValue = map['펄프, 종이 및 종이제품 제조업'].gyeongbuk;
let gyeongbukPerson = personData.gyeongbuk;
let gyeongbukCompany = companyData.gyeongbuk;

let gyeonggiValue = map['펄프, 종이 및 종이제품 제조업'].gyeonggi;
let gyeonggiPerson = personData.gyeonggi;
let gyeonggiCompany = companyData.gyeonggi;

let gyeongnamValue = map['펄프, 종이 및 종이제품 제조업'].gyeongnam;
let gyeongnamPerson = personData.gyeongnam;
let gyeongnamCompany = companyData.gyeongnam;

let incheonValue = map['펄프, 종이 및 종이제품 제조업'].incheon;
let incheonPerson = personData.incheon;
let incheonCompany = companyData.incheon;

let jejuValue = map['펄프, 종이 및 종이제품 제조업'].jeju;
let jejuPerson = personData.jeju;
let jejuCompany = companyData.jeju;

let jeonbukValue = map['펄프, 종이 및 종이제품 제조업'].jeonbuk;
let jeonbukPerson = personData.jeonbuk;
let jeonbukCompany = companyData.jeonbuk;

let jeonnamValue = map['펄프, 종이 및 종이제품 제조업'].jeonnam;
let jeonnamPerson = personData.jeonnam;
let jeonnamCompany = companyData.jeonnam;

let sejongValue = map['펄프, 종이 및 종이제품 제조업'].sejong;
let sejongPerson = personData.sejong;
let sejongCompany = companyData.sejong;

let ulsanValue = map['펄프, 종이 및 종이제품 제조업'].ulsan;
let ulsanPerson = personData.ulsan;
let ulsanCompany = companyData.ulsan;

console.log(incheonPerson);
console.log(incheonCompany);