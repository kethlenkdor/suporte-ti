# Base de conhecimento Nexo TI

Este projeto é uma aplicação web de base de conhecimento para suporte e operações internas. A interface permite:

- acessar a área por login;
- visualizar documentos organizados por categoria;
- buscar por palavra-chave;
- ordenar os registros;
- salvar favoritos;
- abrir detalhes em modal;
- criar, editar e excluir documentos;
- manter os dados locais no navegador;
- sair da aplicação e voltar para a tela de login.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- LocalStorage para persistência local
- Arquivos estáticos sem backend

## Estrutura do projeto

- index.html — redireciona para a página de login;
- login.html — tela de autenticação;
- login.js — validação do login demo e redirecionamento;
- home.html — interface principal da base de conhecimento;
- script.js — lógica da home, filtros, documentos, modais e persistência;
- styles.css — layout visual completo, responsividade e identidade do sistema;
- logo_semsa.png — logo institucional exibida no rodapé;
- README.md — documentação do projeto.

## Como usar

1. Abra o arquivo login.html no navegador.
2. Faça login com as credenciais demo:
   - usuário: admin
   - senha: admin123
3. A tela principal da base de conhecimento será exibida.
4. Navegue pela biblioteca, use filtros e busque documentos.
5. Clique em um item para abrir o conteúdo completo.
6. Use o botão Novo documento para criar novas entradas.
7. Clique em Sair para voltar para a tela de login.

## Fluxo principal

- A autenticação é simples e local, com validação em JavaScript.
- Ao realizar login com sucesso, a aplicação redireciona para a página home.
- A lista de documentos é montada a partir dos dados iniciais e do conteúdo salvo em LocalStorage.
- A função renderDocuments() atualiza a interface conforme o filtro ativo, texto de busca e ordenação.
- O modal de detalhes mostra o resumo, as etapas e os avisos do documento.
- O formulário de criação e edição salva as alterações no navegador.

## Observações importantes

- Os dados ficam armazenados localmente no navegador, então esta é uma solução estática sem banco de dados.
- O projeto foi pensado como base documental interna para suporte e operação de TI.
- É ideal para protótipo, demonstração ou sistema simples de gestão de conhecimento.

## Layout e identidade visual

A aplicação utiliza uma paleta principal em azul com a cor #17a6e3, com foco em uma aparência moderna, clara e profissional. O rodapé institucional foi elaborado com os dados da Prefeitura Municipal de Manaus, incluindo a logo SEMSA, CNPJ, endereço e copyright.

## Créditos e uso

Este projeto foi desenvolvido como uma interface de cadastro e consulta documental, voltada para ambientes internos de suporte técnico e organização de conhecimento.
