window.addEventListener('resize', resize);

document.querySelector('#temp')
		.addEventListener('click', function (event) {
			document.querySelector('#historyPage').style.display = 'flex'
            document.querySelector('#firstPage').style.display = 'none'
			drawChart()
});

document.querySelector('#homeButton')
		.addEventListener('click', function (event) {
			document.querySelector('#historyPage').style.display = 'none'
            document.querySelector('#firstPage').style.display = 'flex'
});

function resize(){
	// var cc = document.querySelector('#historyPage').style.flex.direction
	// if (cc != 'column') {
	// 	document.querySelector('#chart').style.height = '70vh';
	// 	document.querySelector('#chart').style.width = '60vw';
	// }
}

function drawChart(){
	var data = [{x:'janvier', y:23},{x:'fevrier', y:23.5},{x:'mars', y:27},{x:'avril', y:28},{x:'mai', y:30}]
	var months = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
	var lLabels = []
	for (var i = 0; i <= 4; i++) {
		lLabels.push(months[i]);
	}
	var ctx = document.querySelector('#chart').getContext('2d');
	var chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: lLabels,
			datasets: [{
				label: 'Historique',
				borderColor: 'white',
				fill: false,
				data: data,
				lineTension: 0
			}]
		},
		options: {
			animation: {duration: 0},
			scales: {
				xAxes: [{ticks: { fontColor: "white" }}],
				yAxes: [{ticks: { fontColor: "white" }}]
			},
			legend: {
				display: true,
				labels: {fontColor: 'white'}
			}
		}
	});
	resize()
}
