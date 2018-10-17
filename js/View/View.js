class View{
  
  showUser(user){
    
    const contentHolder = document.querySelector('#user-profile')
    
    const { name, avatar_url, followers, following, bio, email } = user

    if(name == null){
      contentHolder.innerHTML = `<p>Usuário não encontrado!</p>`
    }else{
      contentHolder.innerHTML = `
        <img class="user-image" src='${avatar_url}'></img>
        <h2 class="user-name">${name}</h2>
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
    const userName = user[0].owner.login
    const contentHolder = document.querySelector('#user-repositories')
    
    user.forEach(element => {
      repos += `
        <tr class="repositories-list-line">
          <td class="repositories-list-col">
            <p>${element.name}</p>
          </td>
          <td class="repositories-list-col">
            <a href="repositoryDetails.html?user=${element.owner.login}&repo=${element.name}">Ver detalhes</a>
          </td>
        </tr>
      `
    })
    
    contentHolder.innerHTML = `
      <table class="repositories-list">
        <thead>
          <tr class="repositories-list-line">
            <th class="repositories-list-first-col">Repositórios</th>
            <th class="repositories-list-first-col">
              <select onchange="app.git.nameSearch('${userName}', this.value)">
                <option disabled selected>Ordenar por</option>
                <option value="stars">Estrelas</option>
                <option value="forks">Forks</option>
                <option value="updated">Atualização</option>
              </select>
            </th>
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
      <h2 class="repo-name">${repo.name}</h2>
      <p>${repo.description === null ? 'Repositório sem descrição' : repo.description}</p>
      <p>Estrelas: ${repo.stargazers_count}</p>
      <p>Linguagem: ${repo.language === null ? 'Nenhuma linguagem selecionada' : repo.language}</p>
      <a href="${repo.html_url}" target="_blank">Link externo: ${repo.html_url}</a>
    `
  }
}