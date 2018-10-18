# git-hub-user-search
Aplicação que busca dados da API do GitHub e mostra dados do usuário na tela.

VERSIONAMENTO{

  -Usei o controle de versão no github usando o git flow para melhor organização.
}

HTML E CSS{

  -Dividi o CSS por partes para facilitar a manutenção e organização do código.
  -Importei uma fonte do Google Fonts.
  -Copiei a CDN do site "fontawesome.com" para usar icones sem precisar fazer download de imagens.
  -Padronizei nomes de id e class usando letras mínusculas e "-" para separar palavras.
  -Usei ids para manipular elementos no DOM através do Javascript class para o CSS para facilitar já que o id é único.
  -Para deixar o layout responsivo usei as quebras padrões do bootstrap como referência.
  -Usei "rem" para selecionar tamanhos de fontes, pois são adaptáveis a mudanças gerais no "body".
  -Criei uma paleta de cores usando o site da adobe (#3B74A0, #CCCCCC, #F5F5F5, #313E50, #66666E).
  -Usei o "reset" do CSS para resetar os valores padrões do browser e trabalhar melhor "http://meyerweb.com/eric/tools/css/reset/"
}

JAVASCRIPT{
  
  -Separei em dois blocos de "scripts" no html para diferenciar os arquivos Javascript que contém classe dos que não tem.
  -Separei em pastas e arquivos diferentes para cada parte do sistema para facilitar manutenção.
  -Utilizei a própria API do GitHub para ordenar a lista de repositórios.
  -Utilizei o evento "onkeyup" no input do HTML para chamar a conexão com a API, a partir dela é chamada uma função, com o objeto criado no "fetch" como parâmetro, que cria o conteúdo e o insere no HTML.
  -Padronizei nomes de variáveis, funções e métodos com o camelCase.
  -Utilizei a template string para facilitar a criação de conteúdo HTML com variáveis do Javascript.
  -No arquivo "repositoryDetails.js" eu peguei os valores enviados através da URL e os tranformei em variáveis. Precisei usar "slice" para pegar a URL a partir do "?", usei o split para criar um array com o valor anterior ao "&" e o valor após o mesmo. Por fim usei um "foreach" nesse array para criar as variáveis. A partir delas consegui chamar a conexão com a API para conseguir os detalhes do repositório selecionado.

}
