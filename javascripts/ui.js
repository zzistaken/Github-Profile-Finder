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
            let bgcolor = "#000";
        let textcolor = "#fff";

        if (repo.language) {
            const langLowerCase = repo.language.toLowerCase();
            switch (langLowerCase) {
                case "html":
                    bgcolor = "#e34c26";
                    break;
                case "javascript":
                    bgcolor = "#f0db4f";
                    textcolor = "#323330";
                    break;
                case "css":
                    bgcolor = "#2965f1";
                    break;
                case "python":
                    bgcolor = "#306998";
                    break;
                case "java":
                    bgcolor = "#5382a1";
                    break;
                case "c++":
                    bgcolor = "#00599c";
                    textcolor = "#fff";
                    break;
                case "ruby":
                    bgcolor = "#cc342d";
                    break;
                case "swift":
                    bgcolor = "#f05138";
                    break;
                case "typescript":
                    bgcolor = "#007acc";
                    break;
                case "c#":
                    bgcolor = "#178600";
                    break;
                case "kotlin":
                    bgcolor = "#7f52ff";
                    break;
                case "vue":
                    bgcolor = "#41b883";
                    break;
                default:
                    bgcolor = "#000";
                    textcolor = "#fff";
            }}
            this.repoList.innerHTML += `
            <li><a href="${repo.html_url}" target="_blank">${repo.name}</a>  <button id="repoLang" style="background-color: ${bgcolor}; color: ${textcolor}">${repo.language}</button></li>
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