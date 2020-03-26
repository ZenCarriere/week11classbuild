new Chart(document.getElementById('barChart'), {
	type: 'bar',
	data: {
		labels: ['North America', 'Europe', 'Africa', 'Asia'],
		datasets: [
			{
				label: 'Population (millions)',
				data: ['579', '741.4', '1216', '4463' ]
			}
		]
	}
});