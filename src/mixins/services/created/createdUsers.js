import Service from '@/plugins/axios.js'
export default {
  data: () => ({
    createdUser: {
      usuario: null,
      status: 1,
      email: null,
      departamento: null,
      permiso: null
    },
    respuesta: ''
  }),
  Service: '',
  created () {
    this.Service = new Service()
  },
  methods: {
    async crearUsuario (llave, data) {
      this.load()
      if (llave) {
        const user = new FormData()
        user.append('cmd', '3')
        user.append('data', this.toString(data))
        await this.Service.crearUsuario(user)
          .then(data => {
            if (data !== null) {
              this.respuesta = data.data.msg
              if (data.data.success !== false) {
                this.catalogoUsuarios()
                this.showSuccess()
                this.resetData()
              } else {
                this.showWarn()
                this.resetData()
              }
            } else {
              this.respuesta = 'Favor de revisar sus datos'
              this.showError()
              this.resetData()
            }
          })
      } else {
        this.respuesta = 'Favor de revisar sus datos'
        this.showError()
        this.resetData()
      }
    }
  }
}
