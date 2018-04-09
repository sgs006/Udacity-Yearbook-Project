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
  for (var i = 0; i < data.length; i++) {
    $('.post').append(
      '<tr>' +
      '<td id="col1" scope="row">' +
      data[i].Resource +
      '</td>' +
      '<td class="text" id = "' + data[i].Type + '">' +
      data[i].Type +
      '</td>' +
      '<td class="text">' +
      data[i].Description +
      '</td>' +
      '<td id="address"><a href ="' +
      data[i].Link + '" target="_blank">Check it out!</a> ' +
      '</td>' +
      '</tr>' );
  }

}


window.addEventListener('DOMContentLoaded', init);
