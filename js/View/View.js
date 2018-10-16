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
      <tr>
        <td>
          <p>${element.name}</p>
        </td>
        <td>
          <a href="repositoryDetails.html?user=${element.owner.login}&repo=${element.name}">Detalhes</a>
        </td>
      </tr>
    `
    )
    
    contentHolder.innerHTML = `
      <h2>Repositórios</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ver mais</th>
          </tr>
        </thead>
        <tbody>
          ${repos}
        </tbody>
      </table>
    `
  }

  showRepositoryDetails(repo){
  
    const contentHolder = document.querySelector('#repo-details')
  
    contentHolder.innerHTML = `
      <h2>${repo.name}</h2>
      <p>${repo.description === null ? 'Repositório sem descrição' : repo.description}</p>
      <p>Estrelas: ${repo.stargazers_count}</p>
      <p>Linguagem: ${repo.language}</p>
      <a href="${repo.html_url}" target="_blank">Link externo: ${repo.html_url}</a>
    `
  }
}