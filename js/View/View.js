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
}