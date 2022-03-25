<template>
  <div>
    <div class="field">
      <div class="du-label">
        <label
          for="user"
          :class="{'p-error':v$.createdUser.usuario.$invalid && submitted}">Usuario</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="user" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="user"
          v-model="v$.createdUser.usuario.$model"
          :class="{'p-invalid': v$.createdUser.usuario.$invalid && submitted}"
          aria-describedby="usuario-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese nombre de usuario'"
        />
        <template v-if="v$.createdUser.usuario.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.usuario.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdUser.usuario.$invalid && submitted) || v$.createdUser.usuario.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.usuario.$errors" :key="index">
            {{ v$.createdUser.usuario.required.$message.replace('Value', 'Usuario') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="email"
          :class="{'p-error':v$.createdUser.email.$invalid && submitted}">Email</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="at" class="du-input-icon"/>
        <pv-inputText
          type="email"
          id="email"
          v-model="v$.createdUser.email.$model"
          :class="{'p-invalid': v$.createdUser.email.$invalid && submitted}"
          aria-describedby="email-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese el correo'"
        />
        <template v-if="v$.createdUser.email.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.email.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdUser.email.$invalid && submitted) || v$.createdUser.email.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.email.$errors" :key="index">
            {{ v$.createdUser.email.required.$message.replace('Value', 'Email') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="departamento"
          :class="{'p-error':v$.createdUser.departamento.$invalid && submitted}">Departamento</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="landmark" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="departamento"
          v-model="v$.createdUser.departamento.$model"
          :class="{'p-invalid': v$.createdUser.departamento.$invalid && submitted}"
          aria-describedby="departamento-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese el departamento'"
        />
        <template v-if="v$.createdUser.departamento.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.departamento.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdUser.departamento.$invalid && submitted) || v$.createdUser.departamento.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.departamento.$errors" :key="index">
            {{ v$.createdUser.departamento.required.$message.replace('Value', 'Email') }}
          </pv-inlineMessage>
        </template>
      </div>
    </div>
    <div class="field">
      <div class="du-label">
        <label
          for="permisos"
          :class="{'p-error':v$.createdUser.permiso.$invalid && submitted}">Permiso</label>
      </div>
      <div class="du-input du-input-alt">
        <font-awesome-icon icon="lock" class="du-input-icon"/>
        <pv-inputText
          type="text"
          id="permisos"
          v-model="v$.createdUser.permiso.$model"
          :class="{'p-invalid': v$.createdUser.permiso.$invalid && submitted}"
          aria-describedby="permiso-error"
          @input="onchange(!v$.$invalid)"
          autocomplete="off"
          v-tooltip="'Ingrese el nivel de permisos'"
        />
        <template v-if="v$.createdUser.permiso.$error && submitted">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.permiso.$errors" :key="index">
            {{ error.$message}}
          </pv-inlineMessage>
        </template>
        <template v-else-if="(v$.createdUser.permiso.$invalid && submitted) || v$.createdUser.permiso.$pending.$response">
          <pv-inlineMessage v-for="(error, index) of v$.createdUser.permiso.$errors" :key="index">
            {{ v$.createdUser.permiso.required.$message.replace('Value', 'Email') }}
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
        :label="'Crear Usuario'"
        v-if="cmd !==2"
        icon="fa-solid fa-user-plus"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), crearUsuario(!v$.$invalid, this.createdUser)"
      />
      <pv-button
        :label="'Modificar Usuario'"
        v-if="cmd ===2"
        icon="fa-solid fa-user-pen"
        class="du-btn du-green-dark"
        :loading="loading"
        @click="$emit('cerrarModal', false), modificarUsuario(!v$.$invalid, this.createdUser)"
      />
    </footer>
  </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, required } from '@vuelidate/validators'
import template from '@/mixins/template'
import alerts from '@/mixins/alerts/alerts'
import createdUsers from '@/mixins/services/created/createdUsers'
import updatedUsers from '@/mixins/services/updated/updatedUsers'

export default {
  name: 'du-createdUser',
  props: ['button', 'cmd', 'data'],
  emits: ['closeModal'],
  mixins: [template, alerts, createdUsers, updatedUsers],
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ loading: false }),
  validations: () => ({
    createdUser: {
      usuario: {
        required:
          helpers.withMessage('El nombre de usuario es requerido', required)
      },
      email: {
        required:
          helpers.withMessage('El email es requerido', required),
        email:
          helpers.withMessage('El email no es valido', email)
      },
      departamento: {
        required:
          helpers.withMessage('Favor de seleccionar el departamento', required)
      },
      permiso: {
        required:
          helpers.withMessage('Favor de seleccionar el nivel de permisos', required)
      }
    }
  }),
  created () {
    if (this.cmd === 2) {
      this.createdUser = this.data
    }
  },
  methods: {
    enviarData (data) {
      this.modificarUsuario(data)
    },
    resetData () {
      this.submitted = false
      this.createdUser = {
        usuario: null,
        status: '1',
        email: null,
        departamento: null,
        permiso: null
      }
    }
  }
}
</script>
