const data1 = {
  식품: {
    '2010년': 11399,
    '2011년': 13784,
    '2012년': 15003,
    '2013년': 15792,
    '2014년': 23097,
    '2015년': 25519,
    '2016년': 29896,
    '2017년': 33051,
    '2018년': 32214,
    '2019년': 36577,
    '2020년': 34238,
    '2021년': 37612,
    '2022년': 50755,
    '2023년': 31601,
  },
  제지: {
    '2010년': 6933,
    '2011년': 5093,
    '2012년': 4091,
    '2013년': 4493,
    '2014년': 7135,
    '2015년': 7567,
    '2016년': 3562,
    '2017년': 6171,
    '2018년': 6084,
    '2019년': 8962,
    '2020년': 4121,
    '2021년': 4658,
    '2022년': 7834,
    '2023년': 2516,
  },
  바이오의약: {
    '2010년': 7089,
    '2011년': 12602,
    '2012년': 11922,
    '2013년': 12874,
    '2014년': 15918,
    '2015년': 16463,
    '2016년': 18832,
    '2017년': 16772,
    '2018년': 17455,
    '2019년': 8957,
    '2020년': 9867,
    '2021년': 10217,
    '2022년': 15670,
    '2023년': 12325,
  },
  용해: {
    '2010년': 1084,
    '2011년': 3902,
    '2012년': 4363,
    '2013년': 3256,
    '2014년': 1694,
    '2015년': 2799,
    '2016년': 2834,
    '2017년': 486,
    '2018년': 492,
    '2019년': 368,
    '2020년': 636,
    '2021년': 745,
    '2022년': 646,
    '2023년': 728,
  },
};

const colors = ['#4cb140', '#f4c145', '#5752d1', '#ff696d'];

const labels = Object.keys(data1.식품);
const datasets = Object.keys(data1).map((key, index) => ({
  label: key,
  data: Object.values(data1[key]),
  borderColor: colors[index],
  fill: false,
}));

const config = {
  type: 'line',
  data: {
    labels: labels,
    datasets: datasets,
  },
};

var myChart = new Chart(document.getElementById('chart1'), config);

// data_over_300
const data2 = {
  식품: {
    '2016년': 1,
    '2017년': 0.98,
    '2018년': 0.97,
    '2019년': 0.97,
  },
  제지: {
    '2016년': 0.65,
    '2017년': 0.68,
    '2018년': 0.67,
    '2019년': 0.68,
  },
  바이오의약: {
    '2016년': 1.17,
    '2017년': 1.11,
    '2018년': 1.16,
    '2019년': 1.21,
  },
  용해: {
    '2016년': 0.7,
    '2017년': 0.7,
    '2018년': 0.66,
    '2019년': 0.61,
  },
  '제조업 전체': {
    '2016년': 0.88,
    '2017년': 0.89,
    '2018년': 0.87,
    '2019년': 0.85,
  },
};

const labels2 = Object.keys(data2.식품);
const datasets2 = Object.keys(data2).map((key, index) => ({
  label: key,
  data: Object.values(data2[key]),
  borderColor: colors[index],
  fill: false,
}));

const config2 = {
  type: 'line',
  data: {
    labels: labels2,
    datasets: datasets2,
  },
};

var myChart2 = new Chart(document.getElementById('chart2'), config2);

// data_under_300
const data3 = {
  식품: {
    '2016년': 1.34,
    '2017년': 1.24,
    '2018년': 1.09,
    '2019년': 1.09,
  },
  제지: {
    '2016년': 0.69,
    '2017년': 0.57,
    '2018년': 0.6,
    '2019년': 0.55,
  },
  바이오의약: {
    '2016년': 0.9,
    '2017년': 1.01,
    '2018년': 0.92,
    '2019년': 0.84,
  },
  용해: {
    '2016년': 0.7,
    '2017년': 0.36,
    '2018년': 1.22,
    '2019년': 1.53,
  },
  제조업전체: {
    '2016년': 0.91,
    '2017년': 0.97,
    '2018년': 0.98,
    '2019년': 0.96,
  },
};

const labels3 = Object.keys(data3.식품);
const datasets3 = Object.keys(data3).map((key, index) => ({
  label: key,
  data: Object.values(data3[key]),
  borderColor: colors[index],
  fill: false,
}));

const config3 = {
  type: 'line',
  data: {
    labels: labels3,
    datasets: datasets3,
  },
};

var myChart2 = new Chart(document.getElementById('chart3'), config3);
