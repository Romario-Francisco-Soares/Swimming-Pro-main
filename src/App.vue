<template>
  <div class="CorpoPrincipal">
    <MenuOpcoes v-if="TipoAcesso==null"
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
                  v-if="TipoAcesso!=null"
                  @AcessarMenuOpções="acessarMenuOpções()"
                  @adicionarDado="AdicionaDado($event)"
                  @ajustarDado="AjusdarTado($event)"
                  :Titulo="Titulo"
                  :ListaPessoas="Pessoas"
                  :TipoAcesso="TipoAcesso"
    />
    <Acesso/>
  </div>
</template>

<script src="./ScriptsAPP.js" />
<style src="./EstilosPadrão.css" />