<template>
  <du-panels>
    <template #body>
      <du-crud
        @abrirModal="openAddCategorias"
        @modificarModal='changeCategorias'
        @updated='updatedCategorias'
        :catalogo='categorias'
        idCatalogo='id'
        :columns='columns'
        titulo='Listado de categorias'
        btnAgregar='Registrar categoria'
      >
        <template #modal>
          <pv-dialog
            :visible="addCategorias.visible"
            :style="{width: '450px'}"
            header="Agregar categoria"
            :modal="true"
            :closable="false"
          >
            <du-createdCategorias
              :header="false"
              :button="true"
              @cerrarModal="closeAddCategorias"
              :data="addCategorias.data"
              :cmd="addCategorias.cmd"
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
  name: 'du-categorias',
  mixins: [alerts],
  data: () => ({
    addCategorias: {
      visible: null,
      cmd: null,
      data: null
    },
    desactivarCategorias: null,
    msg: {
      desactivar: '¿Está seguro de desactivar este(as) categoria(s)?',
      activar: '¿Está seguro de desactivar este(as) categoria(s)?'
    }
  }),
  created () {
    this.columns = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'status', header: 'Estatus' }
    ]
  },
  methods: {
    openAddCategorias (newValue) { this.addCategorias = newValue },
    closeAddCategorias (newValue) { this.addCategorias = newValue },
    changeCategorias (newValue) { newValue === 3 ? this.warning(newValue, this.msg.activar) : this.warning(newValue, this.msg.desactivar) },
    updatedCategorias (newValue) {
      this.catalogoCategorias()
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
          data.cmd === 3 ? this.activarCategorias(data) : this.desactivarCategorias(data)
        }
      })
    }
  }
}
</script>
