document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector("#myForm");
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let search = e.target.search.value
        //console.log(search)
        SearchInGithub(search)

function SearchInGithub() {

    fetch(`https://api.github.com/search/users?q=${search}`)
    .then(res => res.json())
    .then(data => {console.log(data)
        document.getElementById('user-list').innerHTML = ''
        document.getElementById('repos-list').innerHTML =''

        data.items.forEach(user => {
            console.log(user)
            let userCard = document.createElement('li')
            userCard.className = 'all-users'
            userCard.innerHTML = `
                <div class='content'>
                    <h3> User: ${user.login}</h3>
                    <p> URL: ${user.html_url}</p>
                    <div class ='repos'>
                    <button id='repo-button' style='margin-bottom: 25px'>
                    Repositories
                    </button>
                    </div>
                    <img src=${user.avatar_url} />
                </div>`

           document.getElementById('user-list').appendChild(userCard)   

           const repoButton = document.getElementById('repo-button')
           console.log(repoButton)
           repoButton.addEventListener('click', () => {
               fetch(user.repos_url)
               .then(res => res.json())
               .then(repos => {
                repos.forEach(repo => {
                    let repoCard = document.createElement('li')
                    repoCard.innerHTML = `
                    <h4> ${repo.name} </h4>
                    <p> ${repo.html_url}</p>
                    `
                    document.getElementById('repos-list').appendChild(repoCard)

               })
            })
           })
    })
})
}
})
})  

