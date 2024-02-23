fetch("{% static 'data/2-(1)/2-(1-1)/data.json' %}")
    .then(response => response.text()) // Convert response to text
    .then(data => {
        // Insert data into HTML element
        document.getElementById('dataContainer').innerText = data;
	console.log(data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
