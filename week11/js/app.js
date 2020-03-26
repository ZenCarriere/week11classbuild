new Chart(document.getElementById('barChart'), {
	type: 'bar',
	data: {
		labels: ['North America', 'Europe', 'Africa', 'Asia'],
		datasets: [
			{
				label: 'Population (millions)',
				data: ['579', '741.4', '1216', '4463' ],
				backgroundColor: ['#3e95cd','#8e5ea2','#3cba9f','#e8c3b9']
			}
		]
	},
	options:{
		legend: {
			display: false
		}
	}
});






new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['Jan','Feb','Mar'],
		datasets: [
			{
				label: 'China',
				data: ['1179', '79824', '81171'],
				fill:false,
				borderColor: '#3e95cd'
			},
			{
				label: 'United States',
				data: [0, 60, 42886],
				fill:false,
				borderColor: '#3cba9f'
			},
			{
				label: 'Canada',
				data: [0, 20, 2091],
				fill:false,
				borderColor: '#c45850'
			}
		]
	},
	options:{
		title: {
			display: true,
			text: 'Coronavirus infection cases'
		}
	}
});







new Chart(document.getElementById('pieChart'), {
	type: 'pie',
	data: {
		labels: ['Apple', 'Cherry', 'Pumpkin'],
		datasets: [
			{
				data: ['579', '741', '1216'],
				backgroundColor: ['#3e95cd','#8e5ea2','#3cba9f']
			}
		]
	},
});