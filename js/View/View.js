class View{
  
  showUser(user){
    
    let contentHolder = document.querySelector('#user-profile')
    
    const { name, avatar_url, followers, following, bio, email } = user
    
    contentHolder.innerHTML = `
    <h2>${name}</h2>
    <img src='${avatar_url}'></img>
    <p>Followers: ${followers}</p>
    <p>Followings: ${following}</p>
    <p>Bio: ${bio == null ? 'Nenhuma bio encontrada' : bio}</p>
    <p>Email: ${email == null ? 'E-mail oculto' : email}</p>
    `
  }

  showRepositories(user){
    
    let repos = ``
    let contentHolder = document.querySelector('#user-repositories')
    
    user.forEach(element => repos += `
      <li>
        <p>${element.name}</p>
        <p>star: ${element.stargazers_count}</p>
        <p>linguagem: ${element.language}</p>
        <p>${element.description === null ? 'Repositório sem descrição' : element.description}</p>
        <a href="${element.html_url}" target="_blank"><p>${element.html_url}</p></a>
        <a href="repositoryDetails.html?user=${element.owner.login}&repo=${element.name}">Detalhes</a>
      </li>  
    `)
    
    contentHolder.innerHTML = `
    <h2>Repositórios</h2>
    <ul>
    ${repos}
    </ul>
    `
  }
}