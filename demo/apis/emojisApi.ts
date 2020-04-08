export default class EmojisServer {
  public axios: any

  constructor($axios: any) {
    this.axios = $axios
  }

  getEmojis() {
    return new Promise((resolve: Function, reject: Function) => {
      resolve(this.axios.$get('/emojis'))
    })
  }
}