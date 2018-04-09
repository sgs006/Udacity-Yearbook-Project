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
    if (data[i].Free == 0) {
      $('.post').append(
        '<tr>' +
        '<td id="col1">' +
        data[i].Resource +
        '</td>' +
        '<td id="text">' +
        '<span class="fa-stack fa-2x"><i class="fa fa-usd fa-stack-1x"></i><i class="fa fa-circle-thin fa-stack-2x"></i></span>' +
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
    else if (data[i].Free == 1) {
      $('.post').append(
        '<tr>' +
        '<td id="col1">' +
        data[i].Resource +
        '</td>' +
        '<td class="text">' +
        '<span class="fa-stack fa-2x"><i class="fa fa-usd fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x" style="color:Red"></i></span>' +
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

}


window.addEventListener('DOMContentLoaded', init);
