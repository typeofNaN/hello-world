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
      {{title1}}
      <hr/>
      {{title2}}
      <hr/>
      {{title3}}
      <hr/>
      {{a}}
      <hr/>
      {{c}}
      <hr/>
      <v-text-field
        v-model="ipt"
        label="please input..."
      />
      <v-btn @click="fn">change</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, namespace} from 'vuex-class';

import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

const tt = namespace('titleModule')

@Component({
  components: {
    Logo,
    VuetifyLogo
  },
  head(): object {
    const title0: string = '首页'
    return {
      title0
    }
  },
  async asyncData(ctx) {
    let data = await ctx.app.$api.emojiApi.getEmojis()
    let title1 = (<any>data)['rose']
    return {
      title1
    }
  }
})
export default class extends Vue {
  public user: object = {
    firstName: 'aa',
    lastName: 'bc'
  }
  public ipt: string = ''
  public title2: string = ''
  public title3: string = ''

  @tt.State('title')
  public c: string | undefined

  @tt.Getter('tt')
  public a: string | undefined

  @tt.Mutation('updatePosts')
  public str!: (str:string) => void

  async mounted() {
    this.getData()
    this.getData2()
  }

  async getData() {
    let data = await this.$api.emojiApi.getEmojis()
    this.title2 = (<any>data)['rose']
  }

  async getData2() {
    let dt = await this.$axios.$get('/emojis')
    this.title3 = (<any>dt)['rose']
  }

  fn() {
    let msg = this.ipt
    this.str(msg)
  }
}
</script>