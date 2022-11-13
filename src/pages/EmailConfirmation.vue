<template>
  <q-page padding>
    <p class="text-body1">
  Obrigado por se registar
</p>
<p class="text-body1">
  Por favor, confirme o Email para terminar o registro
</p>
<div class="row justify-center">
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
<q-btn
            label="VOLTAR A PAGINA LOGIN"
            color="blue"
            class="full-width"
            outline
            rounded
            :to="{ name: 'login'}"
      />
      </div>
   </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation'
})
</script>
