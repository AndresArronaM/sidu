<template>
  <div>
    <div class="field">
      <div class="du-label">
        <label
          for="nombre"
          :class="{'p-error':v$.createdCategorias.nombre.$invalid && submitted}">Nombre</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="file-signature" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="nombre"
          v-model="v$.createdCategorias.nombre.$model"
          :class="{'p-invalid': v$.createdCategorias.nombre.$invalid && submitted}"
          aria-describedby="nombre-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese nombre del bien'"
        />
        <template v-if="v$.createdCategorias.nombre.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdCategorias.nombre.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdCategorias.nombre.$invalid && submitted) || v$.createdCategorias.nombre.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdCategorias.nombre.$errors" :key="index">
            {{ v$.createdCategorias.nombre.required.$message.replace('Value', 'bien') }}
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
        :label="'Registrar Categorias'"
        v-if="cmd !==4"
        icon="fa-solid fa-plus"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), crearCategorias(!v$.$invalid, this.createdCategorias)"
      />
      <pv-button
        :label="'Modificar Categorias'"
        v-if="cmd ===4"
        icon="fa-solid fa-user-pen"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), ModificarCategorias(!v$.$invalid, this.createdCategorias)"
      />
    </footer>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import template from '@/mixins/template'
import alerts from '@/mixins/alerts/alerts'
import createdCategorias from '@/mixins/services/created/createdDepartamentos'
import updatedCategorias from '@/mixins/services/updated/updatedDepartamentos'

export default {
  name: 'du-createdDepartamentos',
  props: ['button', 'cmd', 'data'],
  emits: ['closeModal'],
  mixins: [template, alerts, createdCategorias, updatedCategorias],
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ loading: false }),
  validations: () => ({
    createdCategorias: {
      nombre: {
        required:
          helpers.withMessage('El nombre es requerido', required)
      }
    }
  }),
  created () {
    this.cmd === 2 ? this.createdCategorias = this.data : this.createdCategorias = ''
  },
  methods: {
    enviarData (data) {
      this.modificarCategorias(data)
    },
    resetData () {
      this.submitted = false
      this.createdCategorias = {
        nombre: null,
        status: '1'
      }
    }
  }
}
</script>
