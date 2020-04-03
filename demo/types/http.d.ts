import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module 'vue/types/vue' {
    interface Vue {
        $axios: NuxtAxiosInstance;
        // $api: object;
    }
}

