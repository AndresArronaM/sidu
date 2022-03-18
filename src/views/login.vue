<template>
  <du-registro>
    <template #registro>
      <div class="p-fluid">
        <div class="field">
<<<<<<< HEAD
          <div>
            <label
              for="email"
              class="tw-text-xl tw-font-semibold tw-ml-2"
=======
          <div class="du-label">
            <label
              for="email"
>>>>>>> 95153a8a775e429ee6c76b8f2b60414ffb77404d
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
<<<<<<< HEAD
          <div>
            <div>
              <font-awesome-icon icon="lock" />
              <label
                for="password"
                class="tw-text-xl tw-font-semibold tw-ml-2"
                :class="{'p-error': v$.datos.password.$invalid && submitted}">Contraseña</label>
            </div>
=======
          <div class="du-label">
            <label
                for="password"
                :class="{'p-error': v$.datos.password.$invalid && submitted}">Contraseña</label>
          </div>
          <div class="du-input">
            <font-awesome-icon icon="lock"  class="du-input-icon"/>
>>>>>>> 95153a8a775e429ee6c76b8f2b60414ffb77404d
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
<<<<<<< HEAD
            <template v-if="(v$.datos.password.$invalid && submitted) || v$.datos.password.$pending.$response">
              <pv-inlineMessage>
                {{ v$.datos.password.required.$message.replace("Value", "Contraseña") }}
              </pv-inlineMessage>
            </template>
          </div>
=======
          </div>
          <template v-if="(v$.datos.password.$invalid && submitted) || v$.datos.password.$pending.$response">
            <pv-inlineMessage>
              {{ v$.datos.password.required.$message.replace("Value", "Contraseña") }}
            </pv-inlineMessage>
          </template>
>>>>>>> 95153a8a775e429ee6c76b8f2b60414ffb77404d
        </div>
      </div>
    </template>
    <template #botones>
      <div class="tw-flex tw-justify-between">
        <du-link
<<<<<<< HEAD
          class="p-button tw-bg-white tw-text-sky-900 tw-border-0"
=======
          class="p-button du-green-light"
>>>>>>> 95153a8a775e429ee6c76b8f2b60414ffb77404d
          to="/recuperar"
        >
          <p>Olvide mi contraseña</p>
        </du-link>
        <pv-button
<<<<<<< HEAD
          class="tw-bg-sky-900 tw-border-0"
=======
          class="du-green-light"
>>>>>>> 95153a8a775e429ee6c76b8f2b60414ffb77404d
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

export default {
  name: 'du-login',
  mixins: [template, dialog],
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
