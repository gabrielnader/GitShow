class View{
  
  showUser(user){
    
    const contentHolder = document.querySelector('#user-profile')
    
    const { name, avatar_url, followers, following, bio, email } = user
    
    contentHolder.innerHTML = `
      <h2 class="user-name">${name}</h2>
      <img class="user-image" src='${avatar_url}'></img>
      <div class="user-follows">
        <label class="user-followers">Followers: ${followers}</label>
        <label class="user-followings">Followings: ${following}</label>
      </div>
      <div class="user-info">
        <p class="user-email"><i class="user-icon far fa-envelope"></i>${email == null ? 'E-mail oculto' : email}</p>
        <p class="user-bio"><i class="user-icon far fa-user"></i>${bio == null ? 'Nenhuma bio encontrada' : bio}</p>
      </div>
    `
  }

  showRepositories(user){
    
    let repos = ``
    const contentHolder = document.querySelector('#user-repositories')
    
    user.forEach(element => repos += `
      <li>
        <p>${element.name}</p>
        <p>star: ${element.stargazers_count}</p>
        <p>linguagem: ${element.language}</p>
        <p>${element.description === null ? 'Repositório sem descrição' : element.description}</p>
        <a href="${element.html_url}" target="_blank"><p>${element.html_url}</p></a>
        <a href="repositoryDetails.html?user=${element.owner.login}&repo=${element.name}">Detalhes</a>
      </li>  
    `
    )
    
    contentHolder.innerHTML = `
      <h2>Repositórios</h2>
      <ul>
        ${repos}
      </ul>
    `
  }

  showRepositoryDetails(repo){
  
    const contentHolder = document.querySelector('#repo-details')
  
    contentHolder.innerHTML = `
      <h2>${repo.name}</h2>
      <p>Descrição: ${repo.description}</p>
      <p>Estrelas: ${repo.stargazers_count}</p>
      <p>Linguagem: ${repo.language}</p>
      <a href="${repo.html_url}">Link externo: ${repo.html_url}</a>
    `
  }
}