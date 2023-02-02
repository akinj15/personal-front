import ButtonDropdownComponent from '../styled-compenets/button-dropdown/ButtonDropdownComponent.vue'
import TableComponent from '../styled-compenets/table/TableComponent.vue'


export default {
  components: {
    ButtonDropdownComponent,
    TableComponent
  },
  setup () {
    let array = 
[
	{
		"nome": "Samuel Isaac Dias",
		"idade": 19,
		"cpf": "909.731.072-51",
		"rg": "28.196.945-0",
		"data_nasc": "02/02/2004",
		"sexo": "Masculino",
		"signo": "Aquário",
		"mae": "Simone Louise",
		"pai": "Ricardo Arthur Guilherme Dias",
		"email": "samuel.isaac.dias@demasi.com.br",
		"senha": "DwiBdzRMRY",
		"cep": "69182-970",
		"endereco": "Rua Floriano Peixoto, s/n",
		"numero": 279,
		"bairro": "Centro",
		"cidade": "Augusto Montenegro",
		"estado": "AM",
		"telefone_fixo": "(92) 2841-0147",
		"celular": "(92) 98357-5725",
		"altura": "1,90",
		"peso": 70,
		"tipo_sanguineo": "B+",
		"cor": "preto"
	},
	{
		"nome": "Márcio Gustavo Gustavo Aragão",
		"idade": 19,
		"cpf": "212.379.982-39",
		"rg": "17.101.916-7",
		"data_nasc": "01/01/2004",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Tatiane Analu Flávia",
		"pai": "Davi Benício Julio Aragão",
		"email": "marcio_aragao@projetemovelaria.com.br",
		"senha": "P7PWB88ax4",
		"cep": "69182-970",
		"endereco": "Rua Floriano Peixoto, s/n",
		"numero": 770,
		"bairro": "Centro",
		"cidade": "Augusto Montenegro",
		"estado": "AM",
		"telefone_fixo": "(92) 2891-4069",
		"celular": "(92) 99950-8212",
		"altura": "1,96",
		"peso": 106,
		"tipo_sanguineo": "B+",
		"cor": "verde"
	},
	{
		"nome": "Cauê Bruno Enrico Silveira",
		"idade": 19,
		"cpf": "867.654.702-55",
		"rg": "41.395.241-1",
		"data_nasc": "03/01/2004",
		"sexo": "Masculino",
		"signo": "Capricórnio",
		"mae": "Maya Rafaela",
		"pai": "João Carlos Cauê Silveira",
		"email": "cauebrunosilveira@ferplast.com.br",
		"senha": "Y6uszqetKX",
		"cep": "69182-970",
		"endereco": "Rua Floriano Peixoto, s/n",
		"numero": 484,
		"bairro": "Centro",
		"cidade": "Augusto Montenegro",
		"estado": "AM",
		"telefone_fixo": "(92) 2886-3766",
		"celular": "(92) 98113-6790",
		"altura": "1,67",
		"peso": 74,
		"tipo_sanguineo": "A-",
		"cor": "vermelho"
	}
]
    let names = Object.keys(array[0])

    return {
      array,
      names
    }
  }
}
