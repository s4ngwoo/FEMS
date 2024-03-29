const data1 = {
  식품: {
    '2010년': 6.21,
    '2011년': 5.76,
    '2012년': 5.45,
    '2013년': 5.63,
    '2014년': 5.27,
    '2015년': 5.91,
    '2016년': 6.09,
    '2017년': 5.49,
    '2018년': 5.36,
    '2019년': 4.87,
    '2020년': 5.09,
    '2021년': 4.88,
    '2022년': 4.44,
  },
  제지: {
    '2010년': 5.58,
    '2011년': 4.02,
    '2012년': 6.52,
    '2013년': 5.07,
    '2014년': 4.32,
    '2015년': 3.63,
    '2016년': 5.56,
    '2017년': 3.34,
    '2018년': 6.35,
    '2019년': 6.18,
    '2020년': 6.71,
    '2021년': 5.59,
    '2022년': 5.55,
  },
  바이오의약: {
    '2010년': 11.05,
    '2011년': 9.87,
    '2012년': 7.68,
    '2013년': 8.28,
    '2014년': 8.45,
    '2015년': 9.28,
    '2016년': 8.82,
    '2017년': 10.06,
    '2018년': 7.86,
    '2019년': 7.38,
    '2020년': 13.56,
    '2021년': 13.14,
    '2022년': 12.6,
  },
  용해: {
    '2010년': 4.31,
    '2011년': 5.06,
    '2012년': 4.4,
    '2013년': 3.8,
    '2014년': 3.4,
    '2015년': 3.48,
    '2016년': 3.72,
    '2017년': 3.16,
    '2018년': 2.61,
    '2019년': 3.04,
    '2020년': 3.09,
    '2021년': 2.22,
    '2022년': 4.58,
  },
  전체제조업: {
    '2010년': 7.9,
    '2011년': 6.26,
    '2012년': 5.68,
    '2013년': 5.82,
    '2014년': 4.61,
    '2015년': 5.86,
    '2016년': 6.63,
    '2017년': 8.41,
    '2018년': 8.11,
    '2019년': 4.66,
    '2020년': 5.01,
    '2021년': 7.78,
    '2022년': 6.4,
  },
};

const colors = ['#4cb140', '#f4c145', '#5752d1', '#ff696d'];

const labels = Object.keys(data1.식품);
const datasets = Object.keys(data1).map((key, index) => ({
  label: key,
  data: Object.values(data1[key]),
  borderColor: colors[index],
  backgroundColor: colors[index],
  borderWidth: 0.5,
  fill: false,
}));

const config = {
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
           boxWidth: 5,
         },
       },
     },
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: true,
      onClick: (e, legendItem, legend) => {},
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: '단위 : %',
        },
      },
    },
  },
};

const canvas1 = document.getElementById('chart1');
canvas1.width = 463;
canvas1.height = 312;

var myChart = new Chart(document.getElementById('chart1'), config);

const data2 = {
  식품: {
    '2010년': 25565.73,
    '2011년': 21882.83,
    '2012년': 24745.7,
    '2013년': 25855.24,
    '2014년': 22508.29,
    '2015년': 26503.43,
    '2016년': 32649.34,
    '2017년': 35013.69,
    '2018년': 35988.21,
    '2019년': 23827.07,
    '2020년': 31431.58,
    '2021년': 34384.76,
    '2022년': 29607.83,
  },
  제지: {
    '2010년': 4854.54,
    '2011년': 3155.65,
    '2012년': 6610.04,
    '2013년': 4128.54,
    '2014년': 3107.17,
    '2015년': 1198.61,
    '2016년': 5944.28,
    '2017년': 3609.08,
    '2018년': 6827.32,
    '2019년': 6476.98,
    '2020년': 8734.19,
    '2021년': 9724.75,
    '2022년': 9138.65,
  },
  바이오의약: {
    '2010년': 9900.63,
    '2011년': 9917.52,
    '2012년': 7245.79,
    '2013년': 11618.24,
    '2014년': 10056.88,
    '2015년': 34380.79,
    '2016년': 20700.56,
    '2017년': 16180.08,
    '2018년': 15313.15,
    '2019년': 12346.49,
    '2020년': 33940.75,
    '2021년': 36462.73,
    '2022년': 39681.59,
  },
  용해: {
    '2010년': 1161.77,
    '2011년': 804.25,
    '2012년': 1458.79,
    '2013년': 523.73,
    '2014년': 736.02,
    '2015년': 363.26,
    '2016년': 746.17,
    '2017년': 541.34,
    '2018년': 960.88,
    '2019년': 529.54,
    '2020년': 1046.81,
    '2021년': 989.1,
    '2022년': 2531.86,
  },
};

const labels2 = Object.keys(data2.식품);
const datasets2 = Object.keys(data2).map((key, index) => ({
  label: key,
  data: Object.values(data2[key]),
  borderColor: colors[index],
  backgroundColor: colors[index],
  borderWidth: 0.5,
  fill: false,
}));

const config2 = {
  type: 'line',
  data: {
    labels: labels2,
    datasets: datasets2,
  },
  options: {
    plugins: {
       legend: {
         labels: {
           display: true,
           onClick: (e, legendItem, legend) => {},
           usePointStyle: true,
           boxWidth: 5,
         },
       },
     },
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: true,
      onClick: (e, legendItem, legend) => {},
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        title: {
          display: true,
          text: '단위: 억원',
        },
      },
    },
  },
};

const canvas2 = document.getElementById('chart2');
canvas2.width = 463;
canvas2.height = 312;

var myChart2 = new Chart(document.getElementById('chart2'), config2);
