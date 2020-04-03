<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo :user="user" />
      </div>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'
import api from '@/apis'

@Component({
  components: {
    Logo,
    VuetifyLogo
  },
  head(): object {
    const title = '首页'
    return {
      title
    }
  },
  // async asyncData(ctx) {
  //   let data = await api.emojisApi.getEmojis(ctx)
  //   let title1 = (data as any).data
  //   return {
  //     title1
  //   }
  // }
})
export default class index extends Vue {
  public user: object = {
    firstName: 'aa',
    lastName: 'bc'
  }
  public title1: string = ''

  mounted() {
    // this.getData()
  }

  async getData() {
    let data = await api.emojisApi.getEmojis(this)
  }
}
</script>