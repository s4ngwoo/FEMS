const salesData = {
  식품: {
    '2010년': 674655.5,
    '2011년': 702081.51,
    '2012년': 751499.13,
    '2013년': 773204.81,
    '2014년': 799253.24,
    '2015년': 893216.4,
    '2016년': 866112.36,
    '2017년': 897179.02,
    '2018년': 920132.21,
    '2019년': 962296.33,
    '2020년': 1072185.76,
    '2021년': 1131326.58,
  },
  제지: {
    '2010년': 198206.24,
    '2011년': 208983.68,
    '2012년': 210312.4,
    '2013년': 215754.92,
    '2014년': 215507.2,
    '2015년': 225753.03,
    '2016년': 227474.47,
    '2017년': 228889.69,
    '2018년': 238609.78,
    '2019년': 236397.48,
    '2020년': 241526.37,
    '2021년': 260800.03,
  },
  바이오의약: {
    '2010년': 134397.13,
    '2011년': 138736.11,
    '2012년': 138547.03,
    '2013년': 140580.24,
    '2014년': 149928.98,
    '2015년': 178943.73,
    '2016년': 177198.9,
    '2017년': 189652.39,
    '2018년': 200949.73,
    '2019년': 220400.55,
    '2020년': 278290.92,
    '2021년': 278467.38,
  },
  용해: {
    '2010년': 57169.75,
    '2011년': 67987.71,
    '2012년': 65275.95,
    '2013년': 59664.19,
    '2014년': 59556.88,
    '2015년': 57515.52,
    '2016년': 54610.1,
    '2017년': 53877.41,
    '2018년': 54626.3,
    '2019년': 54522.92,
    '2020년': 51540.49,
    '2021년': 58726.33,
  },
};

const colors = ['#4cb140', '#f4c145', '#5752d1', '#ff696d'];

const labels = Object.keys(salesData.식품);
const datasets = Object.keys(salesData).map((key, index) => ({
  label: key,
  data: Object.values(salesData[key]),
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
          text: '단위 추가',
        },
      },
    },
  },
};

const canvas1 = document.getElementById('chart1');
canvas1.width = 463;
canvas1.height = 312;

var myChart = new Chart(document.getElementById('chart1'), config);

const data = {
  식품: {
    '2010년': 675381,
    '2011년': 708862,
    '2012년': 754907,
    '2013년': 776878,
    '2014년': 799976,
    '2015년': 841399,
    '2016년': 866817,
    '2017년': 898977,
    '2018년': 922870,
    '2019년': 965004,
    '2020년': 1028304,
    '2021년': 1132524,
  },
  제지: {
    '2010년': 199521,
    '2011년': 210452,
    '2012년': 210303,
    '2013년': 216777,
    '2014년': 215556,
    '2015년': 217250,
    '2016년': 227584,
    '2017년': 230083,
    '2018년': 239709,
    '2019년': 235814,
    '2020년': 231701,
    '2021년': 262628,
  },
  바이오의약: {
    '2010년': 135160,
    '2011년': 139286,
    '2012년': 139327,
    '2013년': 142734,
    '2014년': 151390,
    '2015년': 164894,
    '2016년': 179061,
    '2017년': 190871,
    '2018년': 202392,
    '2019년': 223378,
    '2020년': 254295,
    '2021년': 284237,
  },
  용해: {
    '2010년': 57557,
    '2011년': 68757,
    '2012년': 65672,
    '2013년': 59947,
    '2014년': 59448,
    '2015년': 54644,
    '2016년': 54641,
    '2017년': 53881,
    '2018년': 54983,
    '2019년': 54689,
    '2020년': 49967,
    '2021년': 59281,
  },
};

const labels2 = Object.keys(data.식품);
const datasets2 = Object.keys(data).map((key, index) => ({
  label: key,
  data: Object.values(data[key]),
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
          text: '단위 추가',
        },
      },
    },
  },
};

const canvas2 = document.getElementById('chart2');
canvas2.width = 463;
canvas2.height = 312;

var myChart2 = new Chart(document.getElementById('chart2'), config2);
