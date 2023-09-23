export default {
  name: 'LayoutPadrão',
  props:{Titulo: String,
         TipoAcesso: Number,
         ListaPessoas: [],
         DBEvolução:[],
         ListagemTurmas:[]},
  data() {
    return {
      Exibir: false,
      DebugaId: false,
      DadoFiltrado: null,
      DadoPesquisa: null,
      TurmaEdição:false,
      modalAtivo: false,
      modalAtivoEvolução: false,
      modalAtivoTurma: false,
      dadoCarregado: null,
      EmEdição:false,
      armazemDado: null,
      turmas:[],
      Evoluções: [],
      TurmaAdicionar:[],
      EvoluçãoAdicionar:[]/* {
        Peso: null,
        Altura: null,
        DCultanea: null,
        DenCorporal: null,
        FcMaxima: null,
        FcRepouso: null,
        DistAtividade: null,
        TempAtividade: null,
        NvAprendizado: null,
        CondFisico: null,
        DtRegistro: null,  
        NrSeqEvolução: null
      }*/,
      DadoAdicionar: {
        id: null,
        TipoPessoa:null,
        nome: null,
        idade: null,
        cpf: null,
        Cref: null,
        Whatsapp: null,
        telAlternativo: null,
        Nascimento: null,
        Rua: null,
        NRua: null,
        Bairro: null,
        Cidade: null,
        Cep: null,
        sexo: null,

        HoraAula: null,
        Turmas: null,
        ProporcaoSalarial:null,

        Turma: null,
        Pae: null,
        Mãe: null,

        valorMensalidade: null,

        status: null
    }
    }
    
  },
  methods:{
    //Lógica para Turmas
    EntrarTurmaEdição(){
      this.TurmaEdição = true
    },SairTurmaEdição(){
      this.TurmaEdição = false
    },
    ExibirModalTurma(){
      this.modalAtivoTurma = true
    },
    FecharModalTurma(){
      this.TurmaAdicionar.pop()
      this.modalAtivoTurma = false
    },
    SalvarTurma(parametro){
      let index = this.ListagemTurmas.length
      this.ListagemTurmas[index]={...parametro[0]}
      this.Turma = this.ListagemTurmas
      //this.$emit('editarTurma',parametro[0])
      this.FecharModalTurma()
      this.TurmaAdicionar.pop()
    },
    NovaTurma(){
      this.TurmaAdicionar=[{
        NrSeqTurma: Math.round(Math.random()*100), 
        LimiteAlunos: null,
        Valor:null,
        DataCadastro:'',
        
        DiaSemana: [],
        Horário:[],
        Duração:[],
        Professor:'',
        Alunos:[]}]
      this.armazemDado = this.TurmaAdicionar
      this.ExibirModalTurma()
    },
    EditarTurma(){
      this.TurmaAdicionar.pop()
      this.TurmaAdicionar.push(this.dadoCarregado)
      this.modalAtivoTurma = true
      this.ExibirModalTurma()
    },
    carregaDadoTurma(parametro){
      let par = parametro
      this.dadoCarregado = par
      console.log(this.dadoCarregado)
    },

    //Lógica para Evolução
    ExibirModalEvolução(){
      if(this.EvoluçãoAdicionar.length==0){
        alert('Selecione um Aluno')
      }else{
        this.modalAtivoEvolução = true
      }
    },
    SalvarEvolução(parametro){
      console.log(parametro)
      let par = parametro
      const index = this.Evoluções.findIndex((dado) => dado.NrSeqEvolução === par.NrSeqEvolução);
      this.Evoluções[index] = {...par};
      this.$emit('evolução',par)
      this.FecharModalEvolução()
      this.EvoluçãoAdicionar.pop()
    },    
    FecharModalEvolução(){
      this.EvoluçãoAdicionar.pop()
      this.modalAtivoEvolução = false
    },

    //Lógica para exebição e iterações de dados Pessoa
    AjustarDado(){
      let par = this.DadoAdicionar
      const index = this.DadoFiltrado.findIndex((dado) => dado.id === par.id);
      this.DadoFiltrado[index] = {...par};
      this.$emit('ajustarDado', par)
      this.FecharModal()
    },
    EditarPessoa(parametro){
      this.EmEdição = true
      let par = parametro
      this.DadoAdicionar = {...par};
    },
    carregaDado(parametro){
      let par = parametro
      this.dadoCarregado = par
      if(this.TipoAcesso === 3){
        const evol = this.Evoluções
        const index = this.Evoluções.findIndex((dado) => dado.NrSeqEvolução == par.NrSeqEvolução);
        this.EvoluçãoAdicionar.pop()
        if(this.EvoluçãoAdicionar.length == 0){
          this.EvoluçãoAdicionar.push(evol[index])          
        }else{
          alert('Ops... Algo deu errado, recarregue a página!')
        }
        console.log(this.EvoluçãoAdicionar)
      }
    },
    AdicionarDado(parametro){
      let par = parametro
      par.status = 'Ativo'
      par.TipoPessoa = this.TipoAcesso
      this.ListaPessoas.push(par)
      this.DadoFiltrado = [...this.ListaPessoas]
      this.$emit('adicionarDado', par)
      this.FecharModal()
    },
    ExibirModalNovo(){
      this.modalAtivo = true
      this.LimparModal()
    },
    ExibirModalEditar(){
      this.modalAtivo = true
    },
    FecharModal(){
      this.modalAtivo = false
      this.EmEdição = false
    },
    ExibirMaisInfo(){
      if (this.Exibir === false){
        this.Exibir = true
        }
      },
    ExibirMenosInfo(){
      if (this.Exibir === true){
        this.Exibir = false
      }
    },
    PesquisarDado(Parametro){
      if (Parametro == 'tudo'){
        if(this.TipoAcesso != 2){
          this.DadoFiltrado = this.ListaPessoas
        }else{
          this.ListagemTurmas = this.Turmas
        }
      }else{
        if(this.TipoAcesso != 2){
          this.DadoFiltrado = this.ListaPessoas.filter((dado) => dado.nome.toLowerCase().indexOf(Parametro.toLowerCase()) != -1)
        }else{
          let a = this.Turmas.filter((dado) => dado.NrSeqTurma == Parametro)
          console.log(Parametro, a)
          this.ListagemTurmas = a
        }
        
      }
    },
    LimparModal(){      
      
      this.DadoAdicionar.id= null,
      this.DadoAdicionar.TipoPessoa=null,
      this.DadoAdicionar.nome= null,
      this.DadoAdicionar.idade= null,
      this.DadoAdicionar.cpf= null,
      this.DadoAdicionar.Cref= null,
      this.DadoAdicionar.Whatsapp= null,
      this.DadoAdicionar.telAlternativo= null,
      this.DadoAdicionar.Nascimento= null,
      this.DadoAdicionar.Rua= null,
      this.DadoAdicionar.NRua= null,
      this.DadoAdicionar.Bairro= null,
      this.DadoAdicionar.Cidade= null,
      this.DadoAdicionar.Cep= null,
      this.DadoAdicionar.sexo= null,

      this.DadoAdicionar.HoraAula= null,
      this.DadoAdicionar.Turmas= null,
      this.DadoAdicionar.ProporcaoSalarial=null,

      this.DadoAdicionar.Turma= null,
      this.DadoAdicionar.Pae= null,
      this.DadoAdicionar.Mãe= null,

      this.DadoAdicionar.valorMensalidade= null,

      this.DadoAdicionar.status= null
    }
  },
  mounted() {
    this.DadoFiltrado = [...this.ListaPessoas]
    this.Evoluções = [...this.DBEvolução]
    this.Turmas = [...this.ListagemTurmas]
  }
};