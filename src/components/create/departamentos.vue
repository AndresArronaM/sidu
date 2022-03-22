<template>
  <div>
    <div class="field">
      <div class="du-label">
        <label
          for="nombre"
          :class="{'p-error':v$.createdDepartamentos.nombre.$invalid && submitted}">Nombre</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="file-signature" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="nombre"
          v-model="v$.createdDepartamentos.nombre.$model"
          :class="{'p-invalid': v$.createdDepartamentos.nombre.$invalid && submitted}"
          aria-describedby="nombre-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese nombre del bien'"
        />
        <template v-if="v$.createdDepartamentos.nombre.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdDepartamentos.nombre.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdDepartamentos.nombre.$invalid && submitted) || v$.createdDepartamentos.nombre.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdDepartamentos.nombre.$errors" :key="index">
            {{ v$.createdDepartamentos.nombre.required.$message.replace('Value', 'bien') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <footer class="du-footer-btn">
      <pv-button
        :label="'Cancelar'"
        v-if="button"
        icon="fa-solid fa-xmark"
        class="du-btn du-green-dark"
        @click="$emit('cerrarModal', false)"
      />
      <pv-button
        :label="'Registrar Departamento'"
        v-if="cmd !==4"
        icon="fa-solid fa-plus"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), crearBienes(!v$.$invalid, this.createdBienes)"
      />
      <pv-button
        :label="'Modificar Departamento'"
        v-if="cmd ===4"
        icon="fa-solid fa-user-pen"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), ModificarBienes(!v$.$invalid, this.createdBienes)"
      />
    </footer>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import template from '@/mixins/template'
import alerts from '@/mixins/alerts/alerts'
import createdDepartamentos from '@/mixins/services/created/createdDepartamentos'
import updatedDepartamentos from '@/mixins/services/updated/updatedDepartamentos'

export default {
  name: 'du-createdDepartamentos',
  props: ['button', 'cmd', 'data'],
  emits: ['closeModal'],
  mixins: [template, alerts, createdDepartamentos, updatedDepartamentos],
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ loading: false }),
  validations: () => ({
    createdDepartamentos: {
      nombre: {
        required:
          helpers.withMessage('El nombre es requerido', required)
      }
    }
  }),
  created () {
    this.cmd === 2 ? this.createdDepartamentos = this.data : this.createdDepartamentos = ''
  },
  methods: {
    enviarData (data) {
      this.modificarDepartamentos(data)
    },
    resetData () {
      this.submitted = false
      this.createdDepartamentos = {
        nombre: null,
        status: '1'
      }
    }
  }
}
</script>
