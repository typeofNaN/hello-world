class emojis {
  getEmojis({ $axios }: any) {
    return new Promise((resolve: Function, reject: Function) => {
      resolve($axios.get('emojis'))
    })
  }
}

export default new emojis