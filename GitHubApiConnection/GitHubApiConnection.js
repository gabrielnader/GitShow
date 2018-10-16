class GitHubApiConnection{

	nameSearch(value){

		const userUrl = `https://api.github.com/users/${value}`
		const reposUrl = `https://api.github.com/users/${value}/repos`
	
		fetch(userUrl)
		.then(response => response.json())
		.then(data => app.view.showUser(data))
	
		fetch(reposUrl)
		.then(response => response.json())
		.then(data => app.view.showRepositories(data))
	}
	
	repositorySearch(userName, repository){
	
		const singleRepo = `https://api.github.com/repos/${userName}/${repository}`
	
		fetch(singleRepo)
		.then(response => response.json())
		.then(data => app.view.showRepositoryDetails(data))
	
	}
}