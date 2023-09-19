export default {
  name: 'LayoutPadrão',
  props:{Titulo: String,
         ListaPessoas: [],
         DBEvolução:[],
         TipoAcesso: Number},
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
      EvoluçãoAdicionar:[],
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
    //Lógica para Evolução
    ExibirModalEvolução(parametro){
      let par = parametro
      par.map((evoluçãoAtual) => {
        this.EvoluçãoAdicionar = []
        let armazena=this.DBEvolução.filter((dado) => dado.NrSeqEvolução = evoluçãoAtual)
        this.EvoluçãoAdicionar.push(armazena)
      })
      this.modalAtivoEvolução = true
    },
    AdicionarEvolução(){
      this.DBEvolução.push(this.EvoluçãoAdicionar)
      this.$emit('adicionarEvolução', this.EvoluçãoAdicionar)
      this.FecharModal()
    },    
    FecharModalEvolução(){
      this.modalAtivoEvolução = false
    },

    //Lógica para exebição e iterações de dados Pessoa
    AjustarDado(){
      let par = this.DadoAdicionar
      this.DadoFiltrado = this.DadoFiltrado.filter((dado) => dado.id != par.id)
      this.DadoFiltrado.push(par)
      //this.ListaPessoas.push(par)
      this.$emit('ajustarDado', par)
      this.FecharModal()
      //this.LimparModal()
    },
    EditarPessoa(parametro){
      this.EmEdição = true
      let par = parametro
      this.DadoAdicionar = par
    },
    carregaDado(parametro){
      let par = parametro
      this.dadoCarregado = par
    },
    AdicionarDado(parametro){
      let par = parametro
      par.status = 'Ativo'
      par.TipoPessoa = this.TipoAcesso
      this.ListaPessoas.push(par)
      this.$emit('adicionarDado', par)
      this.FecharModal()
    },
    ExibirModal(){
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
      this.DadoAdicionar=null
    },
    
    novaPessoa(id,TipoPessoa,CdPessoa,nome,idade,
      cpf,Cref,Rg,Whatsapp,telAlternativo,Nascimento,Rua,NRua,Bairro,
      Cidade,Cep,sexo,DtNascimento,HoraAula,Turmas,ProporcaoSalarial,IdLogin,
      SenhaLogin,TipoLogin,Turma,Pae,Mãe,valorMensalidade,NrSeqEvolução,status){
      this.id=id,
      this.TipoPessoa=TipoPessoa,
      this.CdPessoa=CdPessoa,
      this.nome=nome,
      this.idade=idade,
      this.cpf=cpf,
      this.Cref=Cref,
      this.Rg=Rg,
      this.Whatsapp=Whatsapp,
      this.telAlternativo=telAlternativo,
      this.Nascimento=Nascimento,
      this.Rua=Rua,
      this.NRua=NRua,
      this.Bairro=Bairro,
      this.Cidade=Cidade,
      this.Cep=Cep,
      this.sexo=sexo,
      this.DtNascimento=DtNascimento,
      this.HoraAula=HoraAula,
      this.Turmas=Turmas,
      this.ProporcaoSalarial=ProporcaoSalarial,
      this.IdLogin=IdLogin,
      this.SenhaLogin=SenhaLogin,
      this.TipoLogin=TipoLogin,
      this.Turma=Turma,
      this.Pae=Pae,
      this.Mãe=Mãe,
      this.valorMensalidade=valorMensalidade,
      this.NrSeqEvolução=NrSeqEvolução,
      this.status=status
    },
  },
  mounted() {
    this.DadoFiltrado = this.ListaPessoas
  }
};