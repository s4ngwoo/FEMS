const constants = [
  {
    연도: 2018,
    식품: 2439.5,
    제지: 2168.2,
    바이오의약: 280.3,
    용해: 331,
  },
  {
    연도: 2019,
    식품: 2065.8,
    제지: 2013.3,
    바이오의약: 300.3,
    용해: 307.2,
  },
  {
    연도: 2020,
    식품: 2296.3,
    제지: 1917.5,
    바이오의약: 303.7,
    용해: 251.2,
  },
  {
    연도: 2021,
    식품: 2157.6,
    제지: 1917.5,
    바이오의약: 350,
    용해: 261.7,
  },
];

var tableBody = document.querySelector('#table tbody');
constants.forEach(function (item) {
  var row = document.createElement('tr');
  row.innerHTML =
    '<td>' +
    item.식품 +
    '</td><td>' +
    item.제지 +
    '</td><td>' +
    item.바이오의약 +
    '</td><td>' +
    item.용해;
  tableBody.appendChild(row);
});
