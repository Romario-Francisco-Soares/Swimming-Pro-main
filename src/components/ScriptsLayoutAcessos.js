export default {
  name: 'LayoutPadrão',
  props:{Titulo: String,
         ListaPessoas: [],
         TipoAcesso: Number},
  data() {
    return {
      Exibir: false,
      DebugaId: false,
      DadoFiltrado: null,
      DadoPesquisa: null,
      modalAtivo: false,
      dadoCarregado: null,
      EmEdição:null,
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
    AjustarDado(){
      this.DadoFiltrado = this.DadoFiltrado.filter((dado) => dado.id != this.DadoAdicionar.id)
      this.DadoFiltrado.push(this.DadoAdicionar)
      //this.ListaPessoas.push(this.DadoAdicionar)
      //this.$emit('adicionarDado', this.DadoAdicionar)
      this.FecharModal()
      this.LimparModal()
    },
    EditarPessoa(parametro){
      this.EmEdição = true
      this.DadoAdicionar.id = parametro.id,
      this.DadoAdicionar.TipoPessoa=parametro.TipoPessoa,
      this.DadoAdicionar.nome= parametro.nome,
      this.DadoAdicionar.idade= parametro.idade,
      this.DadoAdicionar.cpf= parametro.cpf,
      this.DadoAdicionar.Cref= parametro.Cref,
      this.DadoAdicionar.Whatsapp= parametro.Whatsapp,
      this.DadoAdicionar.telAlternativo= parametro.telAlternativo,
      this.DadoAdicionar.Nascimento= parametro.Nascimento,
      this.DadoAdicionar.Rua= parametro.Rua,
      this.DadoAdicionar.NRua= parametro.NRua,
      this.DadoAdicionar.Bairro= parametro.Bairro,
      this.DadoAdicionar.Cidade= parametro.Cidade,
      this.DadoAdicionar.Cep= parametro.Cep,
      this.DadoAdicionar.sexo= parametro.sexo,

      this.DadoAdicionar.HoraAula= parametro.HoraAula,
      this.DadoAdicionar.Turmas= parametro.Turmas,
      this.DadoAdicionar.ProporcaoSalarial=parametro.ProporcaoSalarial,

      this.DadoAdicionar.Turma= parametro.Turma,
      this.DadoAdicionar.Pae= parametro.Pae,
      this.DadoAdicionar.Mãe= parametro.Mãe,
      this.DadoAdicionar.valorMensalidade= parametro.valorMensalidade,

      this.DadoAdicionar.status= parametro.status
      this.ExibirModal()
    },
    carregaDado(parametro){
      this.dadoCarregado = parametro
    },
    AdicionarDado(){
      this.DadoAdicionar.status = 'Ativo'
      this.DadoAdicionar.TipoPessoa = this.TipoAcesso
      this.ListaPessoas.push(this.DadoAdicionar)
      this.$emit('adicionarDado', this.DadoAdicionar)
      this.FecharModal()
    },
    ExibirModal(){
      this.modalAtivo = true
    },
    FecharModal(){
      this.modalAtivo = false
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
      this.DadoAdicionar.id = null,
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