


  fetch('https://hook.eu1.make.com/r41nrj329e1qc9dkar5dwd5b4cbajbhi', {
    headers: {
      'Cache-Control': 'no-cache',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    data.forEach(item => {
      console.log('Name:', item.name);
      console.log('Clone Price:', item.ClonePrice ? item.ClonePrice : 'No cloneprice available');
    });
  })
  .catch(error => console.error('Error fetching:', error));
