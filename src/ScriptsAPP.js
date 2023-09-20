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
    Titulo: '',
    ListaTurmas: [],
    Pessoas:null,
    Evoluções: null,
    DBPessoas: [{
        id: 0,
        TipoPessoa:1,
        CdPessoa: 4410,
        nome: "Raquel",
        idade: 41,
        cpf: '00100000000',
        Cref: '000000000',
        Rg: '20333990',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',
        DtNascimento:'',

        HoraAula: 20,
        NrSeqTurma: 1,
        ProporcaoSalarial:20,
        IdLogin: 'Admin',
        SenhaLogin: 'Admin!',
        TipoLogin:'Admin',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,
        NrSeqEvolução:[],
        
        status: 'Ativo'
    },
    {
        id: 2,
        TipoPessoa:1,
        CdPessoa: 4411,
        nome: "Luana",
        idade: 41,
        cpf: '00200000000',
        Cref: '000000000',
        Rg: '20333990',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',
        DtNascimento:'',

        HoraAula: 20,
        NrSeqTurma: 1,
        ProporcaoSalarial:20,
        IdLogin: 'Prof',
        SenhaLogin: 'Prof!',
        TipoLogin:'Prof',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,
        NrSeqEvolução:[],

        status: 'Ativo'
    },
    {
        id: 1,
        TipoPessoa:3,
        CdPessoa: 4412,
        nome: "Jean",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Rg: '20333990',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',
        DtNascimento:'',

        HoraAula: 20,
        NrSeqTurma: null,
        ProporcaoSalarial:20,
        IdLogin: '',
        SenhaLogin: '',
        TipoLogin:'',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,
        NrSeqEvolução:[],

        status: 'Ativo'
    },
    {
        id: 3,
        TipoPessoa:3,
        CdPessoa: 4414,
        nome: "Romário",
        idade: 41,
        cpf: '00000000000',
        Cref: '000000000',
        Rg: '20333990',
        Whatsapp: '31987408888',
        telAlternativo: '31987408888',
        Nascimento: '13/08/1994',
        Rua: 'rouxinin',
        NRua: '221',
        Bairro: 'Cariru',
        Cidade: 'Ipacity',
        Cep: '31163522',
        sexo: 'Femea',
        DtNascimento:'',

        HoraAula: 20,
        NrSeqTurma: null,
        ProporcaoSalarial:20,
        IdLogin: '',
        SenhaLogin: '',
        TipoLogin:'',

        Turma: 1,
        Pae: 'Adeilt',
        Mãe: 'nazara',

        valorMensalidade: 100.00,
        NrSeqEvolução:[312],

        status: 'Ativo'
    }],
    DBEvolução:[{
      Peso: 70,
      Altura: 1.82,
      DCultanea: 1.5,
      DenCorporal: 2,
      FcMaxima: 130,
      FcRepouso: 70,
      DistAtividade: 100,
      TempAtividade: 5,
      NvAprendizado: 2,
      CondFisico: 4,
      DtRegistro: '20/01/2023',  
      NrSeqEvolução: 312
      }/*,
      {
        Peso: 72,
        Altura: 1.82,
        DCultanea: 1.5,
        DenCorporal: 2,
        FcMaxima: 120,
        FcRepouso: 65,
        DistAtividade: 120,
        TempAtividade: 5,
        NvAprendizado: 2,
        CondFisico: 5,
        DtRegistro: '21/01/2023',  
        NrSeqEvolução: 313
      }*/],
  DbTurmas:[{
    NrSeqTurma: 1,
    LimiteAlunos: 6,
    Horário:15,
    DiaSemana: 'Terça-feira',
    Valor:80,
    DataCadastro:'01/08/2023',
    Professores:[4410,4411],
    Alunos:[4412,4413]
  },{
    NrSeqTurma: 2,
    LimiteAlunos: 6,
    Horário:15,
    DiaSemana: 'Terça-feira',
    Valor:80,
    DataCadastro:'01/08/2023',
    Professores:['Raquel','Luana'],
    Alunos:['Jean','Romário']
  }]
  }
},
methods:{
    ValidarAcesso(parametro){
      this.Acessante= this.DBPessoas.find((Pessoa) => (Pessoa.IdLogin == parametro.IdLogin))
       if (this.Acessante.SenhaLogin == parametro.SenhaLogin) {
          this.Login = true
          this.TpLogin = this.Acessante.TipoLogin
      }else{
        alert('Login ou Senha Incorretos')
      }
    },
    AjustarDado(parametro){
      let par = parametro
      this.DBPessoas = this.DBPessoas.filter((dado) => dado.id != par.id)
      this.DBPessoas.push(par)
    },
    AdicionaDado(parametro){
      this.DBPessoas.push(parametro)
    },
    adicionarEvolução(parametro){
      this.Evoluções.push(parametro)
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
      this.ListaTurmas=this.DbTurmas
      this.Pessoas=this.DBPessoas
      this.Titulo = 'Turmas'
    },
    acessarAlunos(){
      this.TipoAcesso=3
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso))
      this.Titulo = 'Alunos'
    },
    acessarFinanceiro(){
      this.TipoAcesso=4
      this.Pessoas = this.DBPessoas.filter((Pessoa) => (Pessoa.TipoPessoa == this.TipoAcesso));
      this.Titulo = 'Financeiro'
    }
  }
}
