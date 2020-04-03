<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  layout: 'empty',
  head(): object {
    let { statusCode } = this.$props
    let { pageNotFound, otherError } = this.$data
    const title = statusCode === 404 ? pageNotFound : otherError
    return {
      title
    }
  }
})
export default class ErrorLaout extends Vue {
  @Prop({type: Object, default: null})
  readonly error: any

  public pageNotFound: string = '404 Not Found'
  public otherError: string = 'An error occurred'
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
