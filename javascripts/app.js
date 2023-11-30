const form = document.getElementById("githubForm");
const usernameInput = document.getElementById("usernameInput");
const switcher = document.getElementById("switch");

const github = new Github();
const ui = new UI();

const eventListener = () => {
    form.addEventListener("submit",getData);
    switcher.addEventListener("change",ui.switchTheme);
}
const getData = e => {
    let username = usernameInput.value.trim();
    if(username === ""){
        // When input value is empty
        alert("Please enter a username");
    }
    else {
        github.getUserData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                // When user not found
                ui.alert();
            }
            else {
                // When process succesful
                ui.clearInput();
                ui.showUserData(response.user);
                ui.showUserRepos(response.repos);
            }
        })
        .catch(err => console.log(err));
    }

    e.preventDefault();
}

eventListener();