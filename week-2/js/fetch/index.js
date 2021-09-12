/* var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // Typical action to be performed when the document is ready:
    console.log('xhttp:', xhttp);
    console.log('xhttp:', xhttp.responseText);
    console.log('xhttp:', JSON.parse(xhttp.responseText));
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.onerror = function(err) {
  console.log(err);
};
xhttp.send(); */

/* The main difference between Fetch and XMLHttpRequest is that the Fetch API uses Promises, hence avoiding callback hell. */

let reqHeader = new Headers();
reqHeader.append('Content-Type', 'text/json');
let initObject = {
  method: 'GET', headers: reqHeader,
};

let value = 5;

/* fetch('https://jsonplaceholder.typicode.com/posts', initObject)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    value = 10;
    console.log(value);
  });

console.log(value); */


/* var userRequest = new Request('https://jsonplaceholdessr.typicode.com/posts', initObject);

fetch(userRequest)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("Something went wrong!", err);
  }); */


/* const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); */

const options = {
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
};

axios(options)
  .then(response => {
    console.log(response);
    const postsContainer = document.querySelector('.posts-container');
    
    if (response.status === 200) {
      response.data.forEach(item => {
        const postWrapper = document.createElement('div');
        const titleEl = document.createElement('p');
        const descriptionEl = document.createElement('p');
        /* const node = document.createTextNode(item.title);
        titleEl.appendChild(node); */
        titleEl.className = 'title';
        descriptionEl.className = 'description';
        titleEl.innerHTML = `<i>${item.title}</i>`;
        descriptionEl.innerHTML = `${item.body}`;
        postWrapper.className = 'post';
        postWrapper.classList.toggle("wrapper-container"); // to toggle class name. If  classname is exist, remove it.
        postWrapper.appendChild(titleEl);
        postWrapper.appendChild(descriptionEl);
        postsContainer.appendChild(postWrapper);

      })
    } 
  });



