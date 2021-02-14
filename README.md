# PipedriveAndBlingIntegrator
* yarn install para instalar todos os pacotes;
* yarn start para iniciar o serviço.

*Todos os parâmetros se encontram no banco de dados (MongoDB).*

### Rotas:
* /api/integrator
	* Descrição: Para realizar a integração entre os sistemas;
	* Método: POST;
	* Body:
```
	{
	"pipedriveTerm":  "Termo para Pesquisar",
	"pipedriveStatus":  "Status para pesquisar"
	}
```

* /api/earnings
	* Descrição: Buscar todos os ganhos;
	* Método: GET;
	* Body: <Não tem>

* /api/orders
	* Descrição: Buscar dados inseridos no Bling;
	* Método: GET;
	* Body: <Não tem>
