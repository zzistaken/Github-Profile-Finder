class UI {
    constructor(){
        this.searchForm = document.getElementById("githubForm");
        this.resultArea = document.querySelector(".resultArea");
        this.repoList = document.getElementById("repository-list");
        this.inputName = document.getElementById("usernameInput");
        this.searchArea = document.querySelector(".searchArea");
        this.resultRepos = document.querySelector(".resultRepos");
        this.body = document.getElementById("body");
        this.switcher = document.getElementById("switch");
    }
    clearInput = () => {
        this.inputName.value = "";
    }
    showUserData = user => {
        this.resultArea.innerHTML = `
        <div class="profile">
        <a href="${user.html_url}" target="_blank">
            <img src="${user.avatar_url}" alt="avatar" id="avatar">
        </a>
        <h2 id="fullname">${user.name}</h2>
        <h3 id="username">${user.login}</h3>
        <h4 id="bio">${user.bio}</h4>
        <hr><br>
        <h5><i class="fa-solid fa-user fa-lg"></i> <span id="followers">${user.followers}</span> Followers • <span id="followings">${user.following}</span> Following</h5>
        <br><hr><br>
        <h5><i class="fa-solid fa-location-dot fa-lg"></i> <span id="location">${user.location}</span></h5>
        <br><hr><br>
        <h5><i class="fa-solid fa-briefcase fa-lg"></i> <span id="publicRepos">${user.public_repos}</span></h5>
    </div>
        `
    }
    showUserRepos = repos => {
        this.repoList.innerHTML = "";
        repos.forEach( repo => {
            this.repoList.innerHTML += `
            <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
            `
        });
    }
    alert = () => {
        const div = document.createElement("div");
        div.className = "alert";
        div.textContent = "User not found";
        this.searchArea.appendChild(div);

        setTimeout(() => {
            div.remove();
        },2000);
    }
    switchTheme = () => {
        if (this.switcher.checked) {
            this.body.classList.add("dark-Theme");
            this.inputName.classList.add("dark-Theme");
        } else {
            this.body.classList.remove("dark-Theme");
            this.inputName.classList.remove("dark-Theme");
        }
    }  
}