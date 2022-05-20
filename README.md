## Curso capgemini start - Angular (service)


Um serviço Angular é um objeto sem estado e fornece algumas funções muito úteis. Essas funções podem ser chamadas de qualquer componente do Angular, como controladores, diretivas, etc. Isso ajuda a dividir o aplicativo da web em unidades lógicas pequenas e diferentes que podem ser reutilizadas.

Conforme a Arquitetura do Angular a utilização de Serviços tem o propósito de organizar o projeto de software Angular, isolando lógica de negócio e separando-a dos Controllers.

No arquivo ex: curso.services.ts 

teremos o:

@Injectable({
  providedIn: 'root' //o injectable vai dizer o que esse serviço vai ter acesso, o padrão é root
                    //nesse caso ele tem acesso total do serviço
})

## modelo (model)

O AngularJS usa a arquitetura Model-View-Controller (MCV), que é usado no desenvolvimento de apps para a internet. Esse tipo de arquitetura consiste em: Model (Modelo) – a estrutura de dados que gerencia a informação e recebe comandos do controle. View (Visão) – a representação da informação.
Controller (Controle) – responde aos comandos e interage com o modelo.

Os modelos no AngularJS são simplesmente um arquivo HTML preenchido ou enriquecido com coisas do AngularJS, como atributos e diretivas. Uma diretiva é um elemento marcador usado para direcionar um determinado atributo ou classe para processar seu comportamento de acordo com as necessidades. O modelo e o controlador no Angular são combinados com os modelos para manipular a visualização que o usuário vê em seu navegador. Os modelos angulares também podem acomodar CSS , controles de formulário , filtros e expressões .



Cada curso cadastrado será um objeto, e cada objeto tem suas caracteríticas