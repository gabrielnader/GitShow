(function(){
  
  const getQueryParamaters = () => {
    const query = location.search.slice(1)
    const parameters = query.split('&')
    let data = {}

    parameters.forEach( (parameter) => {
      let position = parameter.split('=')
      let key = position[0]
      let value = position[1]
      data[key] = value
    })

    return data
  }

  const repositoryData = getQueryParamaters()

  app.git.repositorySearch(repositoryData.user, repositoryData.repo)
})()