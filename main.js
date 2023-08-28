document.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const bio = document.querySelector('#bio');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector("#followers");
    const following = document.querySelector('#following');
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/lumoura0')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            name.innerText = json.name;
            username.innerText = json.login;
            bio.innerText = json.bio;
            avatar.src = json.avatar_url;
            following.innerText = json.following;
            followers.innerText = json.followers;
            repos.innerText = json.public_repos;
            link.href = json.html_url;
        })
})