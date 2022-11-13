<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12 text-center">
        <p class="text-h6">
          Formulario de Categorias
        </p>
      </div>
      <q-form class="col-md-7 col-xs-12 col-sm-12 q-gutter-y-md" @submit.prevent="handleSubmit">
        <q-input
          label="Nome"
          v-model="form.name"
          :rules="[val => (val && val.length > 0) || 'Campo nome obrigatorio']"
        />
        <q-btn
          :label="isUpdate ? 'Actualizar' : 'Salvar'"
          color="blue"
          class="full-width"
          rounded
          outline
          type="submit"
        />
        <q-btn
          label="Cancelar"
          color="red"
          class="full-width"
          rounded
          flat
          :to="{ name: 'category'}"
        />
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useApi from 'src/composables/UseApi'
import useNotify from 'src/composables/UseNotify'

export default defineComponent({
  name: 'PageFormCategory',
  setup () {
    const table = 'category'
    const router = useRouter()
    const route = useRoute()
    const { post, getById, update } = useApi()
    const { notifyError, notifySuccess } = useNotify()
    const isUpdate = computed(() => route.params.id)
    let category = {}
    const form = ref({
      name: ''
    })
    onMounted(() => {
      if (isUpdate.value) {
        handleGetCategory(isUpdate.value)
      }
    })
    const handleSubmit = async () => {
      try {
        if (isUpdate.value) {
          await update(table, form.value)
          notifySuccess('Actualizado com sucesso')
        } else {
          await post(table, form.value)
          notifySuccess('Salvo com sucesso!')
        }
        router.push({ name: 'category' })
      } catch (error) {
        notifyError(error.message)
      }
    }
    const handleGetCategory = async (id) => {
      try {
        category = await getById(table, id)
        form.value = category
      } catch (error) {
        notifyError(error.message)
      }
    }
    return {
      handleSubmit,
      form,
      isUpdate
    }
  }
})
