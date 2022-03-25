import Service from '@/plugins/axios'
import ls from 'local-storage'

export default {
  data: () => ({
    datos: {
      email: '',
      password: ''
    },
    respuesta: null
  }),
  Service: '',
  created () {
    this.Service = new Service()
  },
  methods: {
    async login (data, llave) {
      ls.clear()
      if (llave) {
        const user = new FormData()
        user.append('cmd', 1)
        user.append('data', this.toString(data))
        this.load()
        await this.Service.login(user).then(data => {
          if (data !== null) {
            if (data.data.success !== false) {
              if (data.data.data[0].status === '1') {
                ls.set('token', data.data.token)
                this.redirigir('/admin')
              } else {
                console.log('cuenta desactivada favor de comunicarse con el administrador')
              }
            } else {
              console.log(data.data.msg)
            }
          } else {
            console.log('No existe informacion en el servidor')
          }
        })
      } else {
        console.log('favor de revisar sus datos')
      }
    }
  }
}
