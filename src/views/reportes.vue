<template>
  <du-panels>
    <template #body>
      <du-crud
        @abrirModal="openAddDocumentos"
        @modificarModal='changeDocumentos'
        @updated='updatedDocumentos'
        :catalogo='documentos'
        idCatalogo='id'
        :columns='columns'
        titulo='Listado de categorias'
        btnAgregar='Registrar categoria'
      >
        <template #modal>
          <pv-dialog
            :visible="addDocumentos.visible"
            :style="{width: '450px'}"
            header="Agregar Reportes"
            :modal="true"
            :closable="false"
          >
            <du-createdDocumento
              :header="false"
              :button="true"
              @cerrarModal="closeAddDocumentos"
              :data="addDocumentos.data"
              :cmd="addDocumentos.cmd"
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
  name: 'du-Documentos',
  mixins: [alerts],
  data: () => ({
    addDocumentos: {
      visible: null,
      cmd: null,
      data: null
    },
    desactivarDocumentos: null,
    msg: {
      desactivar: '¿Está seguro de desactivar este(as) categoria(s)?',
      activar: '¿Está seguro de desactivar este(as) categoria(s)?'
    }
  }),
  created () {
    this.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'usuario', header: 'Usuario' }
    ]
  },
  methods: {
    openAddDocumentos (newValue) { this.addDocumentos = newValue },
    closeAddDocumentos (newValue) { this.addDocumentos = newValue },
    changeDocumentos (newValue) { newValue === 3 ? this.warning(newValue, this.msg.activar) : this.warning(newValue, this.msg.desactivar) },
    updatedDocumentos (newValue) {
      this.catalogoDocumentos()
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
          data.cmd === 3 ? this.activarDocumentos(data) : this.desactivarDocumentos(data)
        }
      })
    }
  }
}
</script>
