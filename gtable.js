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
	for (let i = 0; i < data.length; i++) {
		$('.post').append(
			'<tr>' +
			'<td id="col1" scope="row">' +
			data[i].Resource +
			'</td>' +
			'<td class="text">' +
			'<span class="fa-stack fa-2x"><i class="fa fa-usd fa-stack-1x"></i><i class="fa fa-circle-thin fa-stack-2x"' + ((data[i].Free === 1) ? 'style="color:red"' : 'style="color:inherit"') + '></i></span>' +
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
			'</tr>');

	}

}


function buttonHandler(evt) {
	evt.preventDefault();
	let buttonHref = evt.target.getAttribute('href');
	let resourceList = document.querySelectorAll("tr td:nth-child(3)");
	resourceList.forEach((resource, index) => {
		if (resource.id === buttonHref.substring(1)) {
			$("tbody tr:nth-child(" + resource.parentElement.rowIndex + ")").insertBefore("tbody tr:first");
		}
	});

}
let buttons = document.querySelectorAll(".resources-buttons");
buttons.forEach(button => {
	button.addEventListener("click", buttonHandler);
});
window.addEventListener('DOMContentLoaded', init);
