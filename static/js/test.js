fetch("{% static 'data/2-(1)업종별연차별에너지사용량-업종별기업수/2-(1-1)업종별에너지소비량/data.json' %}")
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
%
