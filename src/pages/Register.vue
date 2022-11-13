<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
    <p class="col-12 text-h5 text-center">CRIAR CONTA </p>
    <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
      <q-input
          label="Nome"
          v-model="form.name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Campo nome obrigatorio']"
        />

        <q-input
          label="Email"
          v-model="form.email"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Campo email obrigatorio']"
          type="email"
        />
        <q-input
          label="Senha"
          v-model="form.password"
          lazy-rules
          :rules="[val => (val && val.length >= 4) || 'Campo senha obrigatorio (no minimo 6 caracteres)']"
        />

          <q-btn
            label="CRIAR CONTA"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
      />
          <q-btn
            label="RETROCEDER"
            color="blue"
            class="full-width"
            outline
            rounded
            :to="{ name: 'login'}"
      />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'RegisterPage',

  setup () {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister
    }
  }
})
</script>
