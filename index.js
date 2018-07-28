const app = "I don't do much.";

const token = '1945346062f9b716c534c291231f08ca145fe1e8'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
