// https://api.github.com/users/
class Github {
    constructor(){
        this.url = "https://api.github.com/users/";
    }
    getUserData = async username => {
        const responseUser = await fetch(this.url + username);
        const responseRepos = await fetch(this.url + username + "/repos");

        const userData = await responseUser.json();
        const userRepos = await responseRepos.json();

        return {
            user:userData,
            repos:userRepos
        }
    }
}