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
        <tr v-for="(Turma) in ListagemTurmas" :key="Turma.NrSeqTurma" @click="carregaDado(Turma)">
          <h2 class="Fonte24 PadrãoLetraTomMédio NúmeroTurma">{{ Turma.NrSeqTurma }}</h2>
          <div class="PadrãoBranco EmLinha BordaArredondada" >
            <div class="PadrãoBranco">
              <div class="EmColuna">
              <p class="PadrãoBranco PadrãoLetraTomMédio">Dias</p>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.DiaSemana[0]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.DiaSemana[1]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.DiaSemana[2]}}</td>
              </div>
            </div>
            
            <div class="PadrãoBranco">
              <div class="EmColuna">
              <p class="PadrãoBranco PadrãoLetraTomMédio">Horário</p>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Horário[0]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Horário[1]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Horário[2]}}</td>
              </div>
            </div>
                        
            <div class="PadrãoBranco">
              <p class="PadrãoBranco PadrãoLetraTomMédio">Duração</p>
              <div class="EmColuna">
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Duração[0]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Duração[1]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Duração[2]}}</td>
              </div>
            </div>

            <div class="PadrãoBranco">
              <p class="PadrãoBranco PadrãoLetraTomMédio">Professores</p>
              <div class="EmColuna">
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Professores[0]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Professores[1]}}</td>
              <td class="PadrãoBranco PadrãoLetraTomMédio">{{Turma.Professores[2]}}</td>
              </div>
            </div>

          </div>
          
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
<style src="./LayoutAcessos.css" scoped/>
