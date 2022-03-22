<template>
  <pv-toast />
  <pv-menubar :model="permiso === '2' ? agenda : admin ">
    <template #start>
      <img src="/img/veda/logo_alt.png" alt="logo" class="du-logo">
    </template>
    <template #end>
      <div class="tw-flex tw-justify-center tw-items-center">
        <p>{{ usuario }}</p>
        <pv-avatar class="tw-m-4" icon="pi pi-user" shape="circle"/>
      </div>
    </template>
  </pv-menubar>
  <slot name="body"/>
</template>

<script>
import ls from 'local-storage'
import { ref } from 'vue'

export default {
  name: 'du-panels',
  mixins: [],
  setup: () => {
    const admin = ref([
      {
        label: 'Cerrar Secion',
        url: '/#/',
        icon: '',
        command: () => {
          ls.clear()
        }
      }
    ])
    return { admin }
  }
}
</script>

<style scoped>

</style>
