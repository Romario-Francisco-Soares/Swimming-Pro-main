import Acesso from './components/Acesso.vue'
import MenuOpcoes from './components/MenuOpcoes.vue'
import LayoutAcessos from './components/LayoutAcessos.vue'

export default {
name: 'App',
components: {
  MenuOpcoes,
  LayoutAcessos,
  Acesso
},
data(){
  return{
    Acessante:null,
    Login: false,

    TipoAcesso: null,
    Parceiros: "Parceiros",
    Turmas: "Turmas",
    Alunos: "Alunos",
    Financeiro: "Financeiro",
    TpLogin: '',
    Titulo:'',

    Pessoas:null,
    DBPessoas: [{
        id: 0,
        TipoPessoa:1,
        nome: "Raquel",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',

        HoraAula: 20,
        Turmas: 1,
        ProporcaoSalarial:20,
        IdLogin: 'Admin',
        SenhaLogin: 'Admin!',
        TipoLogin:'Admin',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,

        status: 'Ativo'
    },
    {
        id: 2,
        TipoPessoa:1,
        nome: "Luana",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',

        HoraAula: 20,
        Turmas: 1,
        ProporcaoSalarial:20,
        IdLogin: 'Prof',
        SenhaLogin: 'Prof!',
        TipoLogin:'Prof',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,

        status: 'Ativo'
    },
    {
        id: 1,
        TipoPessoa:3,
        nome: "Jean",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',

        HoraAula: 20,
        Turmas: 1,
        ProporcaoSalarial:20,
        IdLogin: '',
        SenhaLogin: '',
        TipoLogin:'',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,

        status: 'Ativo'
    },
    {
        id: 3,
        TipoPessoa:3,
        nome: "Romário",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',

        HoraAula: 20,
        Turmas: 1,
        ProporcaoSalarial:20,
        IdLogin: '',
        SenhaLogin: '',
        TipoLogin:'',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,

        status: 'Ativo'
    }]
  }
},
methods:{
    ValidarAcesso(parametro){  
      
      this.Acessante= this.DBPessoas.find((Pessoa) => (Pessoa.IdLogin == parametro.IdLogin))
       if (this.Acessante.SenhaLogin == parametro.SenhaLogin) {
          this.Login = true
          this.TpLogin = this.Acessante.TipoLogin
      }
    },
    AjusdarTado(){
      
    },
    AdicionaDado(parametro){
      this.DBPessoas.push(parametro)
    },
    acessarMenuOpções(){
      this.TipoAcesso=null
    },
    acessarParceiros(){
      this.TipoAcesso=1
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso));
      this.Titulo = 'Parceiro'
    },
    acessarTurmas(){
      this.TipoAcesso=2
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso));
      this.Titulo = 'Turmas'
    },
    acessarAlunos(){
      this.TipoAcesso=3
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso));
      this.Titulo = 'Alunos'
    },
    acessarFinanceiro(){
      this.TipoAcesso=4
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso));
      this.Titulo = 'Financeiro'
    }
  }
}
