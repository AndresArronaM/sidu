<template>
  <div>
    <div class="field">
      <div class="du-label">
        <label
          for="nombre"
          :class="{'p-error':v$.createdReportes.nombre.$invalid && submitted}">Nombre</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="file-signature" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="nombre"
          v-model="v$.createdReportes.nombre.$model"
          :class="{'p-invalid': v$.createdReportes.nombre.$invalid && submitted}"
          aria-describedby="nombre-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese nombre del bien'"
        />
        <template v-if="v$.createdReportes.nombre.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.nombre.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdReportes.nombre.$invalid && submitted) || v$.createdReportes.nombre.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.nombre.$errors" :key="index">
            {{ v$.createdReportes.nombre.required.$message.replace('Value', 'bien') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="tipo"
          :class="{'p-error':v$.createdReportes.tipo.$invalid && submitted}">Marca</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="copyright" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="tipo"
          v-model="v$.createdReportes.tipo.$model"
          :class="{'p-invalid': v$.createdReportes.tipo.$invalid && submitted}"
          aria-describedby="marca-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese la marca'"
        />
        <template v-if="v$.createdReportes.tipo.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.tipo.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdReportes.tipo.$invalid && submitted) || v$.createdReportes.tipo.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.tipo.$errors" :key="index">
            {{ v$.createdReportes.tipo.required.$message.replace('Value', 'Marca') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="fecha"
          :class="{'p-error':v$.createdReportes.fecha.$invalid && submitted}">Fecha</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="calendar-day" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="fecha"
          v-model="v$.createdReportes.fecha.$model"
          :class="{'p-invalid': v$.createdReportes.fecha.$invalid && submitted}"
          aria-describedby="fecha_adq-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese fecha de adquisicion'"
        />
        <template v-if="v$.createdReportes.fecha.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.fecha.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdReportes.fecha.$invalid && submitted) || v$.createdReportes.fecha.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.fecha.$errors" :key="index">
            {{ v$.createdReportes.fecha.required.$message.replace('Value', 'Fecha de Adquisicion') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="usuario"
          :class="{'p-error':v$.createdReportes.usuario.$invalid && submitted}">Usuario</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="user" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="usuario"
          v-model="v$.createdReportes.usuario.$model"
          :class="{'p-invalid': v$.createdReportes.usuario.$invalid && submitted}"
          aria-describedby="usuario-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Seleccione un usuario'"
        />
        <template v-if="v$.createdReportes.usuario.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.usuario.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdReportes.usuario.$invalid && submitted) || v$.createdReportes.usuario.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdReportes.usuario.$errors" :key="index">
            {{ v$.createdReportes.usuario.required.$message.replace('Value', 'Usuario') }}
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
        :label="'Crear Reporte'"
        v-if="cmd !==4"
        icon="fa-solid fa-plus"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), crearReporte(!v$.$invalid, this.createdReportes)"
      />
      <pv-button
        :label="'Modificar Reporte'"
        v-if="cmd ===4"
        icon="fa-solid fa-user-pen"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), ModificarReporte(!v$.$invalid, this.createdReportes)"
      />
    </footer>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import template from '@/mixins/template'
import alerts from '@/mixins/alerts/alerts'
import createdReporte from '@/mixins/services/created/createdReporte'
import updatedReporte from '@/mixins/services/updated/updatedReporte'

export default {
  name: 'du-createdDocumento',
  props: ['button', 'cmd', 'data'],
  emits: ['closeModal'],
  mixins: [template, alerts, createdReporte, updatedReporte],
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ loading: false }),
  validations: () => ({
    createdReportes: {
      nombre: {
        required:
          helpers.withMessage('El nombre es requerido', required)
      },
      tipo: {
        required:
          helpers.withMessage('El tipo es requerido', required)
      },
      fecha: {
        required:
          helpers.withMessage('La fecha de adquision es requerido', required)
      },
      usuario: {
        required:
          helpers.withMessage('El nombre de usuario es requerido', required)
      }
    }
  }),
  created () {
    this.cmd === 2 ? this.createdReportes = this.data : this.createdReportes = ''
  },
  methods: {
    enviarData (data) {
      this.modificarReportes(data)
    },
    resetData () {
      this.submitted = false
      this.createdReportes = {
        nombre: null,
        tipo: null,
        fecha: null,
        usuario: null,
        status: '1'
      }
    }
  }
}
</script>

<style scoped>

</style>
