import { Plugin } from '@nuxt/types'

import emojiService from '@/apis/emojisApi'

declare module 'vue/types/vue' {
  interface Vue {
    $api: any
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: any
  }
}

const apiPlugin: Plugin = ({ $axios }, inject) => {
  const Api = {
    emojiApi: new emojiService($axios)
  }

  inject('api', Api)
}

export default apiPlugin