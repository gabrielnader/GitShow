class View{
  
  showUser(user){
    
    const contentHolder = document.querySelector('#user-profile')
    
    const { name, avatar_url, followers, following, bio, email } = user

    if(name == null){
      contentHolder.innerHTML = `<p>Usuário não encontrado!</p>`
    }else{
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
  }

  showRepositories(user){
    
    let repos = ``
    const contentHolder = document.querySelector('#user-repositories')
    
    user.forEach(element => repos += `
      <tr class="repositories-list-line">
        <td class="repositories-list-col">
          <p>${element.name}</p>
        </td>
        <td class="repositories-list-col">
          <a href="repositoryDetails.html?user=${element.owner.login}&repo=${element.name}">Detalhes</a>
        </td>
      </tr>
    `
    )
    
    contentHolder.innerHTML = `
      <div class="">
        <h2>Repositórios</h2>
        <select onchange="">
          <option value="star" selected>Estrelas</option>
          <option value="name">Nome</option>
          <option value="lang">Linguagem</option>
        </select>
      </div>
      <table class="repositories-list">
        <thead>
          <tr class="repositories-list-line">
            <th class="repositories-list-first-col">Nome</th>
            <th class="repositories-list-first-col">Ver mais</th>
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