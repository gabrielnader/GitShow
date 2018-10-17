class View{
  
  showUser(user){
    
    const error = document.querySelector('#error')
    const contentHolder = document.querySelector('#user-profile')
    
    const { name, avatar_url, followers, following, bio, email } = user

    error.style.display = 'none'

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

  showRepositories(user){
    
    const error = document.querySelector('#error')
    let repos = ``
    const userName = user[0].owner.login
    const contentHolder = document.querySelector('#user-repositories')

    error.style.display = 'none'
    
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

    const error = document.querySelector('#error')
    const contentHolder = document.querySelector('#repo-details')
    
    error.style.display = 'none'
  
    contentHolder.innerHTML = `
      <div class="repo-owner">
        <img class="repo-owner-image" src="${repo.owner.avatar_url}">
        <h3 class="repo-owner-name">${repo.owner.login}</h3>
      </div>
      <div class="repo-info">
        <h2 class="repo-name">${repo.name}</h2>
        <p class="repo-description">${repo.description === null ? 'Repositório sem descrição' : repo.description}</p>
        <div class="repo-other-infos">
          <p>${repo.language === null ? 'Nenhuma linguagem selecionada' : repo.language}</p>
          <div class="repo-star-and-link">  
            <p><i class="star-icon fas fa-star"></i>${repo.stargazers_count}</p>
            <p><i class="fork-icon fas fa-code-branch"></i>${repo.forks_count}</p>
            <a href="${repo.html_url}" target="_blank"><i class="git-open-icon fab fa-github-alt"></i>Abrir no GitHub</a>
          </div>
        </div>
      </div>
    `
  }

  errorView(){

    const error = document.querySelector('#error')

    error.style.display = 'block'
    error.innerHTML = 'A conexão falhou. Tente novamente.'
  }
}