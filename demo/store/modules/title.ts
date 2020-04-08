
import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'

@Module({ name: 'titleModule', namespaced: true, stateFactory: true })
export default class extends VuexModule {
  title: string = 'ctest'

  get tt(): string {
    return this.title
  }

  @Mutation
  updatePosts(str: string) {
    this.title = str
  }
}