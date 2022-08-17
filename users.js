
function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    for(const user of data){
        const div = document.createElement('div')
        div.classList.add('users')
        div.innerHTML = `
        <h1>${user.name}</h1>
        <p>${user.email}</p>
        `
      document.body.appendChild(div)
        
    }
}
