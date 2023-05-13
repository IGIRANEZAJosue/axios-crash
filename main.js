// GET REQUEST
function getTodos() {
  console.log('GET Request');
  
  // axios({
  //   method: 'get',
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   params: {
  //     _limit: 5,
  //   }
  // })
  // .then(res => showOutput (res))
  // .catch(err => console.error(err));

   axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {timeout: 50000})
      .then(res => showOutput (res))
      .catch((err) => console.error(err));
}


// POST REQUEST
function addTodo() {
   console.log('POST Request');

   axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false
   })
      .then(res => showOutput (res))
      .catch(err => console.error(err));
}


// PUT/PATCH REQUEST
function updateTodo() {
   console.log('PUT/PATCH Request');

   axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true
   })
      .then(res => showOutput (res))
      .catch(err => console.error(err));
}


// DELETE REQUEST
function removeTodo() {
   console.log('DELETE Request');

   axios.delete("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => showOutput (res))
      .catch(err => console.error(err));
}


// SIMULTANEOUS DATA
function getData() {
   console.log('Simultaneous Request');

   axios
      .all([
         axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
         axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
      ])
      .then(axios.spread((todos, posts) => showOutput(posts)))
      .catch(err => console.error(err));
}


// CUSTOM HEADERS
function customHeaders() {
   console.log('Custom Headers');

   const config = {
      headers: {
         'content-type': 'application/json',
         Authorization: "someToken",
      }
   }

   axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false
   }, config)
      .then(res => showOutput (res))
      .catch(err => console.error(err));
}


// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
   console.log('Transform Response');

   const options = {
      method: 'POST',
      url: "https://jsonplaceholder.typicode.com/todos",
      data: {
         title: "Hello World",
      }
   }

   axios(options).then(res => showOutput(res));
}


// ERROR HANDLING
function errorHandling() {
   console.log('Error Handling');

   axios
      .get('https://jsonplaceholder.typicode.com/todoss')
      .then(res => showOutput (res))
      .catch((err) => {
         if(err.response){
            //Server responded with a status other than the 200 range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
         }

         if (err.response.status=== 404 ){
            //The Request was made but no response
            alert("Error: Page not found");
         } else if (err.request){
            console.log(err.request);
         }else {
            console.log(err.message);
         }

      });
}


// CANCEL TOKEN
function cancelToken() {
   console.log('Cancel Token');

   //Not needed too much 🥱🥱😴

   axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => showOutput (res))   
}


// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES





// =================================================================================================

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);




