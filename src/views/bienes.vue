<template>
  <du-panels>
    <template #body>
      <du-crud
        @abrirModal="openAddBienes"
        @modificarModal='changeBienes'
        @updated='updatedBienes'
        :catalogo='bienes'
        idCatalogo='id'
        :columns='columns'
        titulo='Listado de Bienes'
        btnAgregar='Registrar bienes'
      >
        <template #modal>
          <pv-dialog
            :visible="addBienes.visible"
            :style="{width: '450px'}"
            header="Agregar Bienes"
            :modal="true"
            :closable="false"
          >
            <du-createdBienes
              :header="false"
              :button="true"
              @cerrarModal="closeAddBienes"
              :data="addBienes.data"
              :cmd="addBienes.cmd"
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
  name: 'du-bienes',
  mixins: [alerts],
  data: () => ({
    addBienes: {
      visible: null,
      cmd: null,
      data: null
    },
    desactivarBienes: null,
    msg: {
      desactivar: '¿Está seguro de dar de baja este(os) bien(es)?',
      activar: '¿Está seguro de dar de alata este(os) bien(es)?'
    }
  }),
  created () {
    this.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'marca', header: 'Marca' },
      { field: 'fecha_adq', header: 'Fecha de adquisicion' },
      { field: 'num_serie', header: 'Numero de serie' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'usuario', header: 'Usuario' },
      { field: 'observaciones', header: 'Observaciones' },
      { field: 'status', header: 'Estatus' }
    ]
  },
  methods: {
    openAddBienes (newValue) { this.addBienes = newValue },
    closeAddBienes (newValue) { this.addBienes = newValue },
    changeBienes (newValue) { newValue === 3 ? this.warning(newValue, this.msg.activar) : this.warning(newValue, this.msg.desactivar) },
    updatedBienes (newValue) {
      this.catalogoBienes()
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
          data.cmd === 3 ? this.activarBienes(data) : this.desactivarBienes(data)
        }
      })
    }
  }
}
</script>
