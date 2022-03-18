import router from '@/router/index.js'

export default {
  data: () => ({
    string: null,
    submitted: false,
    loading: false
  }),
  methods: {
    onchange (data) {
      this.submitted = true
      return !data
    },
    toString (e) {
      // eslint-disable-next-line no-return-assign
      return this.string = JSON.stringify(e)
    },
    load () {
      this.loading = true
      setTimeout(() => { this.loading = false }, 1000)
    },
    redirigir (url) {
      router.push(url)
    }
  }
}
