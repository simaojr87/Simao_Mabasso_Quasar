import { useQuasar } from 'quasar'
export default function useNotify () {
  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'Feito com sucesso!'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Algo deu errado!'
    })
  }

  return {
    notifySuccess,
    notifyError
  }
}
