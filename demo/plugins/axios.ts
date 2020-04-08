import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

export default function({ $axios }: any, inject: any) {
  $axios.onRequest((req: any) => {
    // console.log(1, req)
  })
  $axios.onError((error: any) => {
    // console.log(2, error)
  })
}
