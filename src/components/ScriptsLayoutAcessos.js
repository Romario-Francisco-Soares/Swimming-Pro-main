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
      modalAtivo: false,
      modalAtivoEvolução: false,
      dadoCarregado: null,
      EmEdição:false,
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
    

    //Lógica para Evolução
    ExibirModalEvolução(){
      if(this.EvoluçãoAdicionar.length==0){
        alert('Selecione um Aluno')
      }else{
        this.modalAtivoEvolução = true
      }
    },
    SalvarEvolução(){
      const par = this.EvoluçãoAdicionar[0]
      const index = this.DBEvolução.findIndex((dado) => dado.NrSeqEvolução == par[0].NrSeqEvolução);
      this.DBEvolução[index] = par[0];
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
    carregaDadoTurma(parametro){
      let par = parametro
      this.dadoCarregado = par
    },
    carregaDado(parametro){
      let par = parametro
      this.dadoCarregado = par
      if(this.TipoAcesso === 3){
        const evol = this.DBEvolução
        const index = this.DBEvolução.findIndex((dado) => dado.NrSeqEvolução == par.NrSeqEvolução);
        if(this.EvoluçãoAdicionar.length == 1){
          this.EvoluçãoAdicionar.pop()
          this.EvoluçãoAdicionar.push(evol[index])          
        }else{
          this.EvoluçãoAdicionar.push(evol[index])
        }
      }
    },
    AdicionarDado(parametro){
      let par = parametro
      par.status = 'Ativo'
      par.TipoPessoa = this.TipoAcesso
      this.ListaPessoas.push(par)
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
        this.DadoFiltrado = this.ListaPessoas
      }else{
        this.DadoFiltrado = this.ListaPessoas.filter((dado) => dado.nome.toLowerCase().indexOf(Parametro.toLowerCase()) != -1)
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
    this.DadoFiltrado = this.ListaPessoas
  }
};