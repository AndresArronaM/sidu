import Service from '@/plugins/axios'

export default {
  data: () => ({ usuarios: null }),
  Service: '',
  created () {
    this.service = new Service()
  },
  async mounted () {
    this.catalogoUsuarios()
  },
  methods: {
    async catalogoUsuarios () {
      const user = new FormData()
      user.append('cmd', 5)
      await this.service.catalogoUsuarios(user)
        .then(data => {
          if (data !== null) {
            if (data.data.success !== null) {
              this.usuarios = data.data.data
            } else {
              this.usuarios = null
              this.showWarn()
              this.resetData()
            }
          } else {
            this.respuesta = 'No existe informacion en el servidor'
            this.showError()
            this.resetData()
          }
        })
    }
  }
}
