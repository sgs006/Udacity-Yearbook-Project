var resourceSpreadsheet = '15_xFyNCeTMRxSbdJuqhezhw1Ahb69NplZG8iNjs9AII';

// https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcfDikMnMuNu9bH5fpt7Kv50p2bM/exc?id=15_xFyNCeTMRxSbdJuqhezhw1Ahb69NplZG8iNjs9AII&sheet=Resources



function init() {
  Tabletop.init({
    key: resourceSpreadsheet,
    callback: resourceData,
    simpleSheet: true
  });
}

function resourceData(data, tabletop) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    $('.post').append(
      '<tr>' +
      '<td id="col1">' +
      data[i].Resource +
      '</td>' +
      '<td class="text">' +
      data[i].Type +
      '</td>' +
      '<td class="text">' +
      data[i].Description +
      '</td>' +
      '<td id="address">' +
      data[i].Link +
      '</td>' +
      '</tr>' +
      '</table>');
  }

}


window.addEventListener('DOMContentLoaded', init);