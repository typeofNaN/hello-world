<template>
  <div>
    {{message}}
    {{fullName}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { str } from '@/utils'

interface User {
  firstName: string,
  lastName: string
}

@Component
export default class Logo extends Vue {
  @Prop({type: Object, required: false, default: {firstName: 'a', lastName: 'c'}})
  readonly user!: User

  public message: string = 'hello Typescript'
  public k: string = ''

  mounted() {
    this.message = str(this.message)
  }

  get fullName(): string {
    return this.user.firstName + this.user.lastName
  }


}
</script>

