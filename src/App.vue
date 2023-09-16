<template>

  <!--Git Status
      git add .
      git commit -m 'PrimeiroEnvio'
      git push origin main
  -->
  
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
                  @ajustarDado="AjusdarTado($event)"
                  :Titulo="Titulo"
                  :ListaPessoas="Pessoas"
                  :TipoAcesso="TipoAcesso"
    />
    <Acesso v-if="Login==false"
            @acessar="ValidarAcesso($event)"
    />
  </div>
</template>

<script src="./ScriptsAPP.js" />
<style src="./EstilosPadrão.css" />