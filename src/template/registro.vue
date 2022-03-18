<template>
  <pv-card>
    <template #header>
      <img alt="logo de la administracion 2021-24" src=/img/veda/logo_alt.png/>
    </template>
    <template #title>
      <h1 class="du-title">{{ titulo }}</h1>
      <h2 class="du-subtitle">{{ subtitulo }}</h2>
    </template>
    <template #content>
      <slot name="registro" />
    </template>
    <template #footer>
      <slot name="botones" />
    </template>
  </pv-card>
</template>

<script>
import router from '@/router'
export default {
  name: 'du-registro',
  data: () => ({
    titulo: process.env.VUE_APP_TITLE,
    subtitulo: router.currentRoute.value.name
  })
}
</script>

<style scoped>

</style>
