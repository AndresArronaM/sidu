<template>
  <pv-confirmDialog />
  <div class="du-crud">
    <pv-toolbar>
      <template #start>
        <pv-button
          :label="btnAgregar"
          class="tw-mx-4 du-btn du-green-light"
          @click="$emit('abrirModal', {'visible': true, 'cmd': 1})"
        />
      </template>
      <template #end>
        <pv-button
          label="Actualizar"
          class="tw-mx-4 du-btn du-green-dark"
          @click="$emit('updated', true)"
        />
        <pv-button
          label="Exportar"
          class="du-btn du-green-dark"
          @click="exportCSV($event)"
        />
      </template>
    </pv-toolbar>
    <pv-dataTable
      ref="dt"
      :value="catalogo"
      :dataKey="idCatalogo"
      :paginator="true"
      :rows="10"
      :loading="loading"
      :filters="filters"
      :rowHover="true"
      paginatorTemplate="
        FirstPageLink
        PrevPageLink
        PageLinks
        NextPageLink
        LastPageLink
        CurrentPageReport
        RowsPerPageDropdown"
      :rowsPerPageOptions="[10, 20, 30, 40, 50]"
      currentPageReportTemplate="{first} a {last} de {totalRecords}"
      responsiveLayout="scroll"
      :exportFilename="titulo"
    >
      <template #header>
        <div class="tw-flex tw-w-full tw-justify-between">
          <h2>{{ titulo }}</h2>
          <span>
            <i></i>
            <pv-inputText v-model="filters['global'].value" placeholder="Buscar" />
          </span>
        </div>
      </template>
      <pv-column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
        :sortable="true"
      />
      <pv-column
        header="Acciones"
        :exportable="false">
        <template #body="slotProps">
          <pv-button
            class="tw-mx-4 tw-bg-cyan-600 tw-border-0"
            label="Modificar"
            @click="$emit('abrirModal', {'visible': true, 'cmd': 2, 'data': slotProps.data})"
          />
          <pv-button
            v-if="slotProps.data.status === '1'"
            class="tw-mx-4 tw-bg-red-600 tw-border-0"
            label="Desactivar"
            @click="$emit('modificarModal', {'selected': slotProps.data, 'cmd': 4, 'type': 'single' })"
          />
          <pv-button
            v-if="slotProps.data.status === '2'"
            class="tw-mx-4 tw-bg-lime-600 tw-border-0"
            label="Activar"
            @click="$emit('modificarModal', {'selected': slotProps.data, 'cmd': 3, 'type': 'single' })"
          />
        </template>
      </pv-column>
    </pv-dataTable>
    <slot name="modal"></slot>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api'
import template from '@/mixins/template'

export default {
  name: 'du-crud',
  props: ['btnAgregar', 'btnDesactivar', 'btnActivar', 'btnRechazar', 'catalogo', 'idCatalogo', 'columns', 'selected', 'titulo'],
  emits: ['abrirModal', 'ModificarModal', 'updated'],
  mixins: [template],
  data: () => ({
    url: null,
    filters: {}
  }),
  created () {
    this.initFilters()
  },
  methods: {
    initFilters () {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
      }
    },

    exportCSV () {
      this.$refs.dt.exportCSV()
    }
  }
}
</script>

<style scoped>

</style>
