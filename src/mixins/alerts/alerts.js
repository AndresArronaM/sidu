export default {
  data: () => ({
    respuesta: ''
  }),
  methods: {
    showInfo () {
      this.$toast.add({
        severity: 'info',
        summary: 'Mensaje',
        detail: this.respuesta,
        life: 3000
      })
    },
    showSuccess () {
      this.$toast.add({
        severity: 'success',
        summary: 'Mensaje',
        detail: this.respuesta,
        life: 3000
      })
    },
    showWarn () {
      this.$toast.add({
        severity: 'warn',
        summary: 'Mensaje',
        detail: this.respuesta,
        life: 3000
      })
    },
    showError () {
      this.$toast.add({
        severity: 'error',
        summary: 'Mensaje',
        detail: this.respuesta,
        life: 3000
      })
    },
    clear () {
      this.$toast.removeAllGroups()
    }
  }
}
