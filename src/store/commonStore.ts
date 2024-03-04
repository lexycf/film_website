import { defineStore } from "pinia"

export const useCommonStore = defineStore('common', {
  state: () => {
    return {
      aa: 1,
      playerInfo:{}
    }
  },
  getters: {
    changeAA: (state) => {
      return state.aa++
    }
  },
  // 想当于vuex的 mutations + actions
  actions: {
    Jia() {
      this.aa++
    },
    set_playerInfo(item:any){
      this.playerInfo=item;
    }
  },
  //数据持久化配置 所有变量都持久化
  // persist: true
  //按需配置数据持久化 这里指定变量aa保持持久化
  persist: {
    //默认名称为当前store唯一标识 这里即aa
    key: 'common',
    //默认localStorage 本地储存 
    //这里建议临时储存sessionStorage 也可写成window.sessionStorage
    storage: sessionStorage,
    //默认当前store里的所有变量都持久化
    paths: ['playerInfo',]
  }
})