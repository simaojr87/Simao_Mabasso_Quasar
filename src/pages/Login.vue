<template>
    <q-page class="row justify-center items-center">

<q-card class="card-login" style="width: 90%; max-width: 450px; padding: 10px; border-radius: 50px;">
  <q-card-section style="">
   <q-form class="row justify-center" @submit.prevent="handleLogin">
    <q-img src="src/assets/222222.png" height="60px" width="60px" />
    <p class="col-12 text-h6 text-center"> LOGIN </p>

    <div class="col-md-9 col-sm-6 col-xs-10 q-gutter-y-md">
      <q-input
      filled v-model="form.email" label="Email" outlined rounded
      />
        <q-input
      filled v-model="form.password" label="Senha" outlined rounded
      />
      <div class="full-width">
          <q-btn
            label="AUTENTICAR"
            color="primary"
            class="full-width"
            rounded
            type="submit"
      />
      </div>
       <div class="full-width">
          <q-btn
            label="CRIAR CONTA"
            color="blue"
            class="full-width"
            outline
            rounded
            flat
            to="/register"

      />
      <div class="full-width ">
          <q-btn
            label="ESQUECEU SUA SENHA?"
            color="blue"
            class="full-width"
            outline
            rounded
            flat
            :to="{ name: 'forgot-password'}"
      />
      </div>
     </div>
    </div>
   </q-form>
   </q-card-section>
   </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageLogin',

  setup () {
    const router = useRouter()
    const { login, isLoggedIn } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()
    const form = ref({
      email: '',
      password: ''
    })
    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: 'me' })
      }
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login feito com sucesso!')
        router.push({ name: 'me' })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
