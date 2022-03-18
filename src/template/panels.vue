<template>
  <p-toast />
  <p-menubar class="tw-w-full" :model="permiso === '2' ? agenda : admin ">
    <template #start>
      <img src="/icon.png" alt="logo" class="tw-mr-2 tw-max-w-[20%]">
    </template>
    <template #end>
      <div class="tw-flex tw-justify-center tw-items-center">
        <p>{{ usuario }}</p>
        <p-avatar class="tw-m-4" icon="pi pi-user" shape="circle"/>
      </div>
    </template>
  </p-menubar>
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
