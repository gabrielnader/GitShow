class GitHubApiConnection{

	nameSearch(value, sort = 'stars'){

		const userUrl = `https://api.github.com/users/${value}`
		const reposUrl = `https://api.github.com/users/${value}/repos?sort=${sort}`
	
		fetch(userUrl)
		.then(response => response.json())
		.then(data => app.view.showUser(data))
		.catch(error => app.view.errorView(error))
	
		fetch(reposUrl)
		.then(response => response.json())
		.then(data => app.view.showRepositories(data))
		.catch(error => app.view.errorView(error))
	}
	
	repositorySearch(userName, repository){
	
		const singleRepo = `https://api.github.com/repos/${userName}/${repository}`
	
		fetch(singleRepo)
		.then(response => response.json())
		.then(data => app.view.showRepositoryDetails(data))
		.catch(error => app.view.errorView(error))
	}
}