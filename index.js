let searchId = document.querySelector("#searchId")
let imgUser = document.querySelector("#imgUser")
let nomUser = document.querySelector("#nomUser")
let showGit = document.querySelector("#showGit")
let idForm = document.querySelector("#idForm")
let login = document.querySelector("#login")
let pays = document.querySelector("#pays")
let repo = document.querySelector(".repo")
let mesgerror = document.querySelector("#mesgerror")
let parent = document.querySelector(".parent")

idForm.addEventListener("submit", (event) => {
    event.preventDefault()
    fetch(`https://api.github.com/users/${searchId.value}`).then((response) => {
        if (response.ok) {
            parent.style.display = "flex"
            return response.json();
        }
        else {
            alert("Not Found")
            parent.style.display = "none"

        }


    })
        .then((result) => {
            imgUser.src = result.avatar_url
            login.innerHTML = result.login
            pays.innerHTML = result.location
            nomUser.innerHTML = result.name
            showGit.href = result.html_url




        })
    fetch(`https://api.github.com/users/${searchId.value}/repos`).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            mesgerror.style.display = "block"
            mesgerror.innerHTML = "PAS DE REPOS"
        }
    }).then((results) => {
        //pour chaque resultat je vais cree une paragraph
        results.forEach(result => {
            let paragraph = document.createElement("p")
            paragraph.innerHTML = result.name
            repo.appendChild(paragraph)
        });
    })
})