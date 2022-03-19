<template>
  <du-panels>
    <template #body>
      <du-crud
        @abrirModal="openAddUser"
        @modificarModal="changeUser"
        @updated="updatedUser"
        :catalogo="usuarios"
        idCatalogo="id"
        :columns="columns"
        titulo='Listado de Usuarios'
        btnAgregar='Agregar Usuario'
      >
        <template #modal>
          <pv-dialog
            :visible="addUser.visible"
            :style="{width: '450px'}"
            header="Agregar Usuario"
            :modal="true"
            :closable="false"
          >
            <du-addUser
              :header="false"
              :button="true"
              @cerrarModal="closeAddUser"
              :data="addUser.data"
              :cmd="addUser.cmd"
            />
          </pv-dialog>
        </template>
      </du-crud>
    </template>
  </du-panels>
</template>

<script>
import alerts from '@/mixins/alerts/alerts'

export default {
  name: 'du-user',
  mixins: [alerts],
  data: () => ({
    addUser: {
      visible: null,
      cmd: null,
      data: null
    },
    desactivarUsuarios: null,
    msg: {
      desactivar: '¿Está seguro de desactivar esta(s) usuario(s)?',
      activar: '¿Está seguro de activar esta(s) usuario(s)?'
    }
  }),
  created () {
    this.columns = [
      { field: 'usuario', header: 'Usuario' },
      { field: 'status', header: 'Estatus' },
      { field: 'email', header: 'Email' },
      { field: 'dependencia', header: 'Dependencia' },
      { field: 'permiso', header: 'Permisos' }
    ]
  },
  methods: {
    openAddUser (newValue) { this.addUser = newValue },
    closeAddUser (newValue) { this.addUser = newValue },
    changeUser (newValue) { newValue === 3 ? this.warning(newValue, this.msg.activar) : this.warning(newValue, this.msg.desactivar) },
    updatedUser (newValue) {
      this.catalogoUsuarios()
      this.respuesta = 'Datos Actualizados'
      this.showSuccess()
    },
    warning (data, msg) {
      this.$confirm.require({
        message: msg,
        header: 'Advertencia',
        icon: '',
        acceptLabel: 'Ok',
        acceptIcon: '',
        acceptClass: 'tw-bg-lime-600 tw-border-0',
        rejectLabel: 'Cancelar',
        rejectIcon: '',
        rejectClass: 'tw-text-red-600 tw-border-0',
        accept: () => {
          data.cmd === 3 ? this.activarUser(data) : this.desactivarUser(data)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
