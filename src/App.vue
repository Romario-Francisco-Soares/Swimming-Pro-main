<template>
  <!--Git Status
      git add .
      git commit -m 'PrimeiroEnvio'
      git push origin main
  -->
  <div class="tituloPrincipal">
    <h1 class="PadrãoLetraTomEscuro Fonte34" v-if="TipoAcesso==null && Login">Swimming - Pro</h1>
  </div>
  <div class="CorpoPrincipal">
    <MenuOpcoes v-if="TipoAcesso==null && Login"
                @AcessarParceiros="acessarParceiros()"
                @AcessarTurmas="acessarTurmas()"
                @AcessarAlunos="acessarAlunos()"
                @AcessarFinanceiro="acessarFinanceiro()"

                :Parceiros="Parceiros"
                :Turmas="Turmas"
                :Alunos="Alunos"
                :Financeiro="Financeiro"
    />

    <LayoutAcessos
                  v-if="TipoAcesso!=null && Login"
                  @AcessarMenuOpções="acessarMenuOpções()"
                  @adicionarDado="AdicionaDado($event)"
                  @ajustarDado="AjustarDado($event)"
                  @evolução="evoluirPessoa($event)"
                  :Titulo="Titulo"
                  :ListaPessoas="Pessoas"
                  :TipoAcesso="TipoAcesso"
                  :DBEvolução="DBEvolução"
                  :ListagemTurmas="ListaTurmas"
    />
    <Acesso v-if="Login==false"
            @acessar="ValidarAcesso($event)"
            @adicionarEvolução="adicionarEvolução($event)"
    />
  </div>
</template>

<script src="./ScriptsAPP.js" />
<style src="./EstilosPadrão.css" />