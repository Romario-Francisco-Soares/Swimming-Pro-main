<template>
    <img class="PadrãoRosa SetaVoltar" src="..\assets\SetaVoltar.svg" alt="Voltar" @click="$emit('AcessarMenuOpções')">
    <div class="Corpo" @TipoAcesso="TipoAcesso($event)"> 
      <h2 class="PadrãoLetraTomEscuro Titulo">{{ Titulo }}</h2>

      <div class="FormularioBusca">
          <input type="text" v-model="DadoPesquisa" class="PadrãoBranco DadosBusca" placeholder="Busque aqui..."/>
          <button class="PadrãoRosa BotãoBusca" @click="PesquisarDado(DadoPesquisa)">
            <img class="PadrãoRosa ImgLupa" src="..\assets\Lupa.svg">
          </button>
      </div>

      <section class="tabela"  v-if="TipoAcesso==1 || TipoAcesso==3">
        <tr v-for="(Pessoa, id) in DadoFiltrado" :key="Pessoa.id" class="PadrãoBranco" @click="carregaDado(Pessoa)">
          <p v-if="DebugaId">{{ id }}</p>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Nome</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.nome}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Idade</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.idade}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Cpf</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.cpf}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Cref</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Cref}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Whatsapp</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Whatsapp}}</td>
          </div>
          
          <img class="PadrãoLetraTomClaro PadrãoBranco MaisInfo" src="..\assets\MaisInfo.svg" alt="Mais" v-on:click="ExibirMaisInfo(Pessoa.id)" v-show="Exibir==false">
          <img class="PadrãoLetraTomClaro PadrãoBranco MenosInfo" src="..\assets\MenosInfo.svg" alt="Menos" v-on:click="ExibirMenosInfo(Pessoa.id)" v-show="Exibir==true">          
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Tel/Alternativo</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.telAlternativo}}</td>
          </div>
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco" >Nascimento</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio" >{{Pessoa.Nascimento}}</td>
          </div>
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Rua</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Rua}}</td>
          </div>
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Número</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.NRua}}</td>
          </div>
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Bairro</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Bairro}}</td>
          </div>
          <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Cidade</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Cidade}}</td>
          </div>
            <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Cep</p>
          <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Cep}}</td>
          </div>
            <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Hora/Aula</p>
          <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.HoraAula}}</td>
          </div>
            <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Turmas</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.Turmas}}</td>
          </div>
            <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Proporção Salarial</p>
          <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.ProporcaoSalarial}}</td>
          </div>
            <div class="Marcador PadrãoBranco" v-show="Exibir">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Sexo</p>
          <td class="PadrãoBranco PadrãoLetraTomMédio">{{Pessoa.sexo}}</td>
          </div>
        </tr>
      </section>

      <section class="tabela" v-if="TipoAcesso==2">
        <tr v-for="(Turma, NrSeqTurma) in ListagemTurmas" :key="Turma.NrSeqTurma" class="PadrãoBranco" @click="carregaDado(Turma)">
          <p v-if="DebugaId">{{ NrSeqTurma }}</p>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Limite de Alunos</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.LimiteAlunos}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Dia da Semana</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.DiaSemana}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Valor</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Valor}}</td>
          </div>
          <div class="Marcador PadrãoBranco">
            <p class="PadrãoLetraTomClaro PadrãoBranco">Data Cadastro</p>
            <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.DataCadastro}}</td>
          </div>
          <img class="PadrãoLetraTomClaro PadrãoBranco MaisInfo" src="..\assets\MaisInfo.svg" alt="Mais" v-on:click="ExibirMaisInfo(Pessoa.id)" v-show="Exibir==false">
          <img class="PadrãoLetraTomClaro PadrãoBranco MenosInfo" src="..\assets\MenosInfo.svg" alt="Menos" v-on:click="ExibirMenosInfo(Pessoa.id)" v-show="Exibir==true">
          
        </tr>
      </section>
    </div>

    <footer>
    <div class="botõesOpções PadrãoBranco" @click="ExibirModalEvolução(this.dadoCarregado.NrSeqEvolução)" v-if="TipoAcesso==3" >
      <div class="PadrãoRosa CirculoOpções2 ">
        <img class="PadrãoRosa EditarNovoEtc" src="..\assets\CadastrarParceiro.svg" alt="">
      </div>
      <h2 class="PadrãoLetraTomMédio Fonte16">Evoluir</h2>
    </div>

    <div class="botõesOpções PadrãoBranco"  @click="EditarPessoa(this.dadoCarregado), this.ExibirModal()">
      <div class="PadrãoRosa CirculoOpções2">
        <img class="PadrãoRosa EditarNovoEtc" src="..\assets\edit.svg" alt="">
      </div>
      <h2 class="PadrãoLetraTomEscuro Fonte16">Editar</h2>
    </div>

    <div class="botõesOpções PadrãoBranco" @click="ExibirModal()">
      <div class="PadrãoRosa CirculoOpções2 ">
        <img class="PadrãoRosa EditarNovoEtc" src="..\assets\CadastrarParceiro.svg" alt="">
      </div>
      <h2 class="PadrãoLetraTomMédio Fonte16">Novo</h2>
    </div>
    </footer>

    <div class="BackModal" v-if="modalAtivo">
      <div class="ModalEditarNovo PadrãoBranco">

        <div class="TituloModal">
          <h2 class="PadrãoLetraTomEscuro Fonte34">{{ Titulo }}</h2>
          <div class="LinhaAbaixoTitulo PadrãoTomClaro"></div>
        </div>

        <div class="ModalDados">
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Nome</p>
            <input type="text" class="PadrãoLetraTomMédio" v-model="DadoAdicionar.nome">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">CPF</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.cpf">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">RG</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.rg">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Whatsapp</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Whatsapp">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Tel/Alternativo</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.TelAlternativo">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Nascimento</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Nascimento">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Cep</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Cep">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Nascimento</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.DtNascimento">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Número Casa</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.NRua">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Cidade</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Cidade">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Bairro</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Bairro">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Rua/Av</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Rua">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Pai</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Pai">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Mãe</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.Mãe">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Valor Mensalidade</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="DadoAdicionar.valorMensalidade">
          </div>
          </div>
        <div class="BotõesSalvarCancelar">
          <button class="PadrãoVerdeAgua PadrãoLetraTomMédio Fonte16" v-if="EmEdição==false" @click="AdicionarDado(this.DadoAdicionar)">Salvar</button>
          <button class="PadrãoVerdeAgua PadrãoLetraTomMédio Fonte16" v-if="EmEdição==true" @click="AjustarDado()">Editar</button>
          <button class="PadrãoVerdeAgua PadrãoLetraTomMédio Fonte16" @click="FecharModal()">Cancelar</button>
        </div>
      </div>
    </div>


    
    <div  v-if="modalAtivoEvolução" class="BackModal">
      <div v-for="(Evolução) in EvoluçãoAdicionar" :key="Evolução.NrSeqEvolução" class="ModalEditarNovo PadrãoBranco">

        <div class="TituloModal">
          <h2 class="PadrãoLetraTomEscuro Fonte34">{{ Titulo }}</h2>
          <div class="LinhaAbaixoTitulo PadrãoTomClaro"></div>
        </div>

        <div class="ModalDados">
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Peso</p>
            <input type="text" class="PadrãoLetraTomMédio" v-model="Evolução.Peso">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">Altura</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.Altura">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">DCultanea</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.DCultanea">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">DenCorporal</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.DenCorporal">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">FcMaxima</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.FcMaxima">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">FcRepouso</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.FcRepouso">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">DistAtividade</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.DistAtividade">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">TempAtividade</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.TempAtividade">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">NvAprendizado</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.NvAprendizado">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">CondFisico</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.CondFisico">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">DtRegistro</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.DtRegistro">
          </div>
          <div class="dado">
            <p class="PadrãoLetraTomClaro">NrSeqEvolução</p>
            <input type="text" class="PadrãoLetraTomMédio"  v-model="Evolução.NrSeqEvolução">
          </div>
          </div>
        <div class="BotõesSalvarCancelar">
          <button class="PadrãoVerdeAgua PadrãoLetraTomMédio Fonte16" @click="AdicionarEvolução()">Salvar</button>
          <button class="PadrãoVerdeAgua PadrãoLetraTomMédio Fonte16" @click="FecharModalEvolução()">Cancelar</button>
        </div>
      </div>
    </div>
</template>

<script src="./ScriptsLayoutAcessos.js" />

<!-- Add "scoped" attributecomponent only to limit CSS to this  -->
<style scoped>
.BotõesSalvarCancelar > button{
  width: 25%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: -8% 5% 0 0;
}
.BotõesSalvarCancelar{
  display:flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}.dado > p{
  margin-left: 5px;
  font-size: 12px;
}
.dado > input{
  width: 80%;
  margin: 8px 0 0 15px;
  background: transparent;
  border: 2px;
    font-size: 12px;
  box-shadow: rgba(165, 174, 183, 0.50) 0px 1px 0px;
}
.dado{
  width: 30%;
  height: 6%;
}
.ModalDados{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  height: 70%;

}.LinhaAbaixoTitulo{
  width: 100px;
  height: 3px;
  margin: -3% 0 0 0;
}
.TituloModal > h2{
  margin: 10% 0 0 0;
}
.TituloModal{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30%;
  height: 10%;
}
.ModalEditarNovo{
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  height: 80%;
  border-radius: 30px;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
.BackModal{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 105%;
  width: 100%;
  position:absolute;
  margin-top: -48vw;
  background-color: rgba(129, 93, 129, 0.1)
}.tabela{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 77%;
  margin-top: 3.5vw;
  overflow: hidden;
  overflow-y: scroll;
}
.tabela::-webkit-scrollbar{
  width: 0.5vw;
  background-color: rgba(245, 248, 255, 100);
  border-radius: 2%;
}
.tabela::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: rgba(99, 235, 219, 100);
}
p{
  height: 5px;
  width: 7vw;
  margin: 0px;
  font-size: 10px;
}
tr{
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex: 0 1 auto;
  margin: 0.5vw;
  border-radius: 20px;
}
td{
  margin: 01vw 0.5vw;
  font-size: 12px;
}
.MaisInfo{
  margin: 0vw 1vw 0vw 0vw;
}
.MenosInfo{
  margin: 0vw 1vw 0vw 0vw;
}
.Marcador{
  display: flex;
  flex-direction: column;
  margin: 0 2vw;
  height: 3vw;
  width: 10vw;
}
.Corpo{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
}
footer{
  display: flex;
  width: 90%;
  justify-content: flex-end;
  margin-top: 20px;
  padding:0% 1.5%;
}
.botõesOpções{
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-wrap: wrap;
  padding:1.5% 1.5% 3% 1.5%;
  width: 5.5vw;
  height: 5.5vw;
  margin: 0 3vw 0 0vw;
  border-radius: 10%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.CirculoOpções2{
  display: flex;
  flex-direction: center;
  justify-content: center;
  width: 4.5vw;
  height: 4.5vw;
  border-radius: 50%;
}
.EditarNovoEtc{
  display: flex;
  align-self: center;
  width: 50%;
  height: 50%;
}
.SetaVoltar{
  height: 2.5vw;
  width: 7vw;
  margin: 1vw 0vw 0 5vw;
  border-radius: 20px;
}
.FormularioBusca{
  display: flex;
  flex-direction: center;
  justify-content: center;

}
.DadosBusca{
  height: 2.8vw;
  width: 35vw;
  padding: 0 1.5vw;
  border-radius: 20px 0px 0px 20px;
  border: none;
}
.DadosBusca::placeholder {
  font-size: 1.2vw;
  color: rgba(165, 174, 183, 100);
}
.BotãoBusca{
  height: 2.8vw;
  width: 5vw;
  border-radius: 0px 20px 20px 0px;
  border: none;
  align-self: center;
}
.ImgLupa{
  height: 1.8vw;
}

</style>
