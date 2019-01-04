const http = new EasyHTTP;

// Get Users
/*http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); */

// User Data
const data = {
  name: 'John Kowalsky',
  username: 'JohnKowalsky',
  email: 'john@gmail.com'
}

// Post
/*http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err));*/

// Update Post
/*http.put('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));*/

// Delete
http.delete('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));