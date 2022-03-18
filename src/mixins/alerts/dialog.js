export default {
  methods: {
    error (msg) {
      this.$confirm.require({
        message: msg,
        header: 'Error',
        icon: 'fas fa-ban',
        acceptLabel: 'OK',
        acceptIcon: 'fas fa-check',
        rejectClass: 'hidden',
        accept: () => {
          this.resetInfo()
        }
      })
    },
    info (msg) {
      this.$confirm.require({
        message: msg,
        header: 'Info',
        icon: 'fas fa-info-circle',
        acceptClass: 'hidden',
        rejectClass: 'hidden'
      })
    },
    success (msg) {
      this.$confirm.require({
        message: msg,
        header: 'Correcto',
        icon: 'fas fa-check-circle',
        acceptLabel: 'OK',
        acceptIcon: 'fas fa-check',
        rejectClass: 'hidden',
        accept: () => {
          this.resetInfo()
        }
      })
    }
  }
}
