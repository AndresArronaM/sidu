<template>
  <du-panels>
    <template #body>
      <du-crud
        @abrirModal="openAddDepartamentos"
        @modificarModal='changeDepartamentos'
        @updated='updatedDepartamentos'
        :catalogo='departamentos'
        idCatalogo='id'
        :columns='columns'
        titulo='Listado de departamentos'
        btnAgregar='Registrar departamento'
      >
        <template #modal>
          <pv-dialog
            :visible="addDepartamentos.visible"
            :style="{width: '450px'}"
            header="Agregar Departamento"
            :modal="true"
            :closable="false"
          >
            <du-createdDepartamentos
              :header="false"
              :button="true"
              @cerrarModal="closeAddDepartamentos"
              :data="addDepartamentos.data"
              :cmd="addDepartamentos.cmd"
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
  name: 'du-departamentos',
  mixins: [alerts],
  data: () => ({
    addDepartamentos: {
      visible: null,
      cmd: null,
      data: null
    },
    desactivarDepartamentos: null,
    msg: {
      desactivar: '¿Está seguro de desactivar este(os) departamento(s)?',
      activar: '¿Está seguro de desactivar este(os) departamento(s)?'
    }
  }),
  created () {
    this.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'status', header: 'Estatus' }
    ]
  },
  methods: {
    openAddDepartamentos (newValue) { this.addDepartamentos = newValue },
    closeAddDepartamentos (newValue) { this.addDepartamentos = newValue },
    changeDepartamentos (newValue) { newValue === 3 ? this.warning(newValue, this.msg.activar) : this.warning(newValue, this.msg.desactivar) },
    updatedDepartamentos (newValue) {
      this.catalogoDepartamentos()
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
          data.cmd === 3 ? this.activarDepartamentos(data) : this.desactivarDepartamentos(data)
        }
      })
    }
  }
}
</script>
