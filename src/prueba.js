fetch('http://localhost:4000/student/')
.then(response=>response.json())
.then(data=>console.log(data));