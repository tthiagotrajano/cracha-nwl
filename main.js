function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/tthiagotrajano'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
    })
}

getGitHubProfileInfos()
