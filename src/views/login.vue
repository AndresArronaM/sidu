<template>
  <du-registro>
    <template #registro>
      <div class="p-fluid">
        <div class="field">
          <div class="du-label">
            <label
              for="email"
              :class="{'p-error':v$.datos.email.$invalid && submitted}">Email</label>
          </div>
          <div class="du-input">
            <font-awesome-icon icon="user" class="du-input-icon"/>
            <pv-inputText
              type="text"
              id="email"
              v-model="v$.datos.email.$model"
              :class="{'p-invalid': v$.datos.email.$invalid && submitted }"
              aria-describedby="email-error"
              @input="onchange(!v$.$invalid)"
              autoComplete="off"
              v-tooltip="'Ingrese Su correo'"
            />
            <template v-if="v$.datos.email.$error && submitted">
              <pv-inlineMessage v-for="(error, index) of v$.datos.email.$errors" :key="index">
                {{ error.$message }}
              </pv-inlineMessage>
            </template>
            <template v-else-if="(v$.datos.email.$invalid && submitted) || v$.datos.email.$pending.$response">
              <pv-inlineMessage v-for="(error, index) of v$.datos.email.$errors" :key="index">
                {{ v$.datos.email.required.$message.replace("Value", "Email") }}
              </pv-inlineMessage>
            </template>
          </div>
        </div>
        <div class="field">
          <div class="du-label">
            <label
                for="password"
                :class="{'p-error': v$.datos.password.$invalid && submitted}">Contraseña</label>
          </div>
          <div class="du-input">
            <font-awesome-icon icon="key"  class="du-input-icon"/>
            <pv-password
              id="password"
              v-model="v$.datos.password.$model"
              :class="{ 'p-invalid': v$.datos.password.$invalid && submitted}"
              aria-describedby="password-error"
              aria-autocomplete="off"
              @input="onchange(!v$.$invalid)"
              autoComplete="off"
              v-tooltip="'Ingrese su contraseña'"
              hideIcon="fas fa-eye-slash"
              showIcon="fas fa-eye"
              :feedback="false"
              :toggleMask="true"
            />
          </div>
          <template v-if="(v$.datos.password.$invalid && submitted) || v$.datos.password.$pending.$response">
            <pv-inlineMessage>
              {{ v$.datos.password.required.$message.replace("Value", "Contraseña") }}
            </pv-inlineMessage>
          </template>
        </div>
      </div>
    </template>
    <template #botones>
      <div class="tw-flex tw-justify-between">
        <du-link
          class="p-button du-btn du-green-dark"
          to="/recuperar"
        >
          <p>Olvide mi contraseña</p>
        </du-link>
        <pv-button
          class="du-btn du-green-dark"
          type="submit"
          label="Iniciar Secion"
          :loading="loading"
          @click="this.login(this.datos, !v$.$invalid)"
        />
      </div>
    </template>
  </du-registro>
</template>

<script>
import { email, helpers, minLength, maxLength, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import template from '@/mixins/template'
import dialog from '@/mixins/alerts/dialog'
import login from '@/mixins/services/auth/login'

export default {
  name: 'du-login',
  mixins: [template, dialog, login],
  setup: () => ({ v$: useVuelidate() }),
  validations: () => ({
    datos: {
      email: {
        required:
          helpers.withMessage('El email es requerido', required),
        email:
          helpers.withMessage('El email no es valido', email)
      },
      password: {
        minLength:
          helpers.withMessage(
            () => 'La contraseña no es correcta',
            minLength(8)
          ),
        maxLength:
          helpers.withMessage(
            () => 'La contraseña no es correcta',
            maxLength(12)
          ),
        required:
          helpers.withMessage('La contrasaeña es requerida', required)
      }
    }
  })
}
</script>
