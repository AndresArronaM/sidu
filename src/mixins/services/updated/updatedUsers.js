import Service from '@/plugins/axios'
import readUsers from '@/mixins/services/read/readUsers'
import template from '@/mixins/template'

export default {
  mixins: [readUsers, template],
  data: () => ({
    updatedUser: {
      usuario: '',
      status: 1,
      email: '',
      departamento: '',
      permiso: ''
    },
    respuesta: ''
  }),
  Service: '',
  created () {
    this.Service = new Service()
  },
  methods: {
    activarUser (data) {
      if (data.type === 'all') {
        this.user = data.selected.filter((val) => {
          if (val.status === '2') {
            console.log(data)
            this.changeData(val, '1')
          } else {
            this.catalogoUsuarios()
          }
          return val
        })
      } else if (data.type === 'single') {
        console.log(data)
        this.changeData(data.selected, '1')
      } else {
        this.catalogoUsuarios()
      }
    },
    desactivarUser (data) {
      if (data.type === 'all') {
        this.user = data.selected.filter((val) => {
          if (val.status === '1') {
            console.log(data)
            this.changeData(val, '2')
          } else {
            this.catalogoUsuarios()
          }
          return val
        })
      } else if (data.type === 'single') {
        console.log(data)
        this.changeData(data.selected, '2')
      } else {
        this.catalogoUsuarios()
      }
    },
    changeData (data, status) {
      console.log(data)
      this.updatedUser = data
      this.updatedUser.status = status
      this.modificarUsuario('', this.updatedUser)
    },
    resetData () {
      this.updatedUser = {
        usuario: '',
        status: 1,
        email: '',
        departamento: '',
        permiso: '',
        id: ''
      }
    },
    async modificarUsuario (llave, data) {
      console.log(data)
      this.load()
      if (llave !== null) {
        const user = new FormData()
        user.append('cmd', '4')
        user.append('data', this.toString(data))
        await this.Service.modificarUsuario(user)
          .then(data => {
            this.respuesta = data.data.msg
            if (data !== null) {
              this.showSuccess()
            } else {
              this.respuesta = 'No existe informacion en el servidor'
              this.showError()
            }
          })
      } else {
        this.respuesta = 'Favor de revisar sus datos'
        this.showError()
      }
      this.resetData()
      this.catalogoUsuarios()
    }
  }
}
