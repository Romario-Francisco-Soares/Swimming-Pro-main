<template>
  <div id="containerPrincipal">
    <div id="containerMenuOpcoes">
      <div class="BoxOpções PadrãoBranco" @click="$emit('AcessarParceiros')">
        <div class="PadrãoVerdeAgua CirculoOpções"><img src="..\assets\Parceiros.svg" alt=""></div>
        <h2 class="PadrãoLetraTomEscuro">{{ Parceiros }}</h2>
      </div>
      <div class="BoxOpções PadrãoBranco" @click="$emit('AcessarTurmas')">
        <div class="PadrãoRosa CirculoOpções"><img src="..\assets\Turmas.svg" alt=""></div>
        <h2 class="PadrãoLetraTomEscuro">{{ Turmas }}</h2>
      </div>
      <div class="BoxOpções PadrãoBranco" @click="$emit('AcessarAlunos')">
        <div class="PadrãoAmarelo CirculoOpções"><img src="..\assets\Alunos.svg" alt=""></div>
        <h2 class="PadrãoLetraTomEscuro">{{ Alunos }}</h2>
      </div>
      <div class="BoxOpções PadrãoBranco" @click="$emit('AcessarFinanceiro')">
        <div class="PadrãoRoxo CirculoOpções"><img src="..\assets\Cobrança.svg" alt=""></div>
        <h2 class="PadrãoLetraTomEscuro">{{ Financeiro }}</h2>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MenuOpcoes',
  props: {Parceiros: String,
         Turmas: String,
         Alunos: String,
         Financeiro: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#containerPrincipal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#containerMenuOpcoes{
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 5vw;
}
</style>
