async function getFromJsonData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      data.forEach(item => {
        console.log(`Title: ${item.title}, ID: ${item.id}`);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function to work
  getFromJsonData();
  