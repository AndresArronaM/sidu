<template>
  <div>
    <div class="field">
      <div class="du-label">
        <label
          for="nombre"
          :class="{'p-error':v$.createdBienes.nombre.$invalid && submitted}">Nombre</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="file-signature" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="nombre"
          v-model="v$.createdBienes.nombre.$model"
          :class="{'p-invalid': v$.createdBienes.nombre.$invalid && submitted}"
          aria-describedby="nombre-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese nombre del bien'"
        />
        <template v-if="v$.createdBienes.nombre.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.nombre.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.nombre.$invalid && submitted) || v$.createdBienes.nombre.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.nombre.$errors" :key="index">
            {{ v$.createdBienes.nombre.required.$message.replace('Value', 'bien') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="marca"
          :class="{'p-error':v$.createdBienes.marca.$invalid && submitted}">Marca</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="copyright" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="marca"
          v-model="v$.createdBienes.marca.$model"
          :class="{'p-invalid': v$.createdBienes.marca.$invalid && submitted}"
          aria-describedby="marca-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese la marca'"
        />
        <template v-if="v$.createdBienes.marca.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.marca.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.marca.$invalid && submitted) || v$.createdBienes.marca.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.marca.$errors" :key="index">
            {{ v$.createdBienes.marca.required.$message.replace('Value', 'Marca') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="fecha_adq"
          :class="{'p-error':v$.createdBienes.fecha_adq.$invalid && submitted}">Fecha de Adquisicion</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="calendar-day" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="fecha_adq"
          v-model="v$.createdBienes.fecha_adq.$model"
          :class="{'p-invalid': v$.createdBienes.fecha_adq.$invalid && submitted}"
          aria-describedby="fecha_adq-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese fecha de adquisicion'"
        />
        <template v-if="v$.createdBienes.fecha_adq.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.fecha_adq.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.fecha_adq.$invalid && submitted) || v$.createdBienes.fecha_adq.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.fecha_adq.$errors" :key="index">
            {{ v$.createdBienes.fecha_adq.required.$message.replace('Value', 'Fecha de Adquisicion') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="num_serie"
          :class="{'p-error':v$.createdBienes.num_serie.$invalid && submitted}">Numero de Serie</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="hashtag" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="num_serie"
          v-model="v$.createdBienes.num_serie.$model"
          :class="{'p-invalid': v$.createdBienes.num_serie.$invalid && submitted}"
          aria-describedby="num_serie-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese el numero de serie'"
        />
        <template v-if="v$.createdBienes.num_serie.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.num_serie.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.num_serie.$invalid && submitted) || v$.createdBienes.num_serie.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.num_serie.$errors" :key="index">
            {{ v$.createdBienes.num_serie.required.$message.replace('Value', 'Usuario') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="categoria"
          :class="{'p-error':v$.createdBienes.categoria.$invalid && submitted}">Categoria</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="tag" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="categoria"
          v-model="v$.createdBienes.categoria.$model"
          :class="{'p-invalid': v$.createdBienes.categoria.$invalid && submitted}"
          aria-describedby="categoria-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Seleccione una categoria'"
        />
        <template v-if="v$.createdBienes.categoria.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.categoria.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.categoria.$invalid && submitted) || v$.createdBienes.categoria.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.categoria.$errors" :key="index">
            {{ v$.createdBienes.categoria.required.$message.replace('Value', 'Usuario') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="usuario"
          :class="{'p-error':v$.createdBienes.usuario.$invalid && submitted}">Usuario</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="user" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="usuario"
          v-model="v$.createdBienes.usuario.$model"
          :class="{'p-invalid': v$.createdBienes.usuario.$invalid && submitted}"
          aria-describedby="usuario-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Seleccione un usuario'"
        />
        <template v-if="v$.createdBienes.usuario.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.usuario.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdBienes.usuario.$invalid && submitted) || v$.createdBienes.usuario.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdBienes.usuario.$errors" :key="index">
            {{ v$.createdBienes.usuario.required.$message.replace('Value', 'Usuario') }}
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
        :label="'Registrar bienes'"
        v-if="cmd !==4"
        icon="fa-solid fa-plus"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), crearBienes(!v$.$invalid, this.createdBienes)"
      />
      <pv-button
        :label="'Modificar Usuario'"
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
import createdBienes from '@/mixins/services/created/createdBienes'
import updatedBienes from '@/mixins/services/updated/updatedBienes'

export default {
  name: 'du-createdBienes',
  props: ['button', 'cmd', 'data'],
  emits: ['closeModal'],
  mixins: [template, alerts, createdBienes, updatedBienes],
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ loading: false }),
  validations: () => ({
    createdBienes: {
      nombre: {
        required:
          helpers.withMessage('El nombre es requerido', required)
      },
      marca: {
        required:
          helpers.withMessage('La marca es requerido', required)
      },
      fecha_adq: {
        required:
          helpers.withMessage('La fecha de adquision es requerido', required)
      },
      num_serie: {
        required:
          helpers.withMessage('El numero de serie es requerido', required)
      },
      categoria: {
        required:
          helpers.withMessage('La categoria es requerida', required)
      },
      usuario: {
        required:
          helpers.withMessage('El nombre de usuario es requerido', required)
      }
    }
  }),
  created () {
    this.cmd === 2 ? this.createdBienes = this.data : this.createdBienes = ''
  },
  methods: {
    enviarData (data) {
      this.modificarBienes(data)
    },
    resetData () {
      this.submitted = false
      this.createdBienes = {
        nombre: null,
        marca: null,
        fecha_adq: null,
        num_serie: null,
        categoria: null,
        usuario: null,
        status: '1'
      }
    }
  }
}
</script>

<style scoped>

</style>
