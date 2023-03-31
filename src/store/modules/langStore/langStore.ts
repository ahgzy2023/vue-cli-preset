import { defineStore } from 'pinia'
import { LangStateType } from './langStore.d'
import { LangEnum } from '@/enums/sysEnums'
import { setLocalStorage, getLocalStorage } from '@/utils'
import { StorageEnum } from '@/enums/storageEnums'

const { GO_LANG_STORE } = StorageEnum
const storageLang: LangStateType = getLocalStorage(GO_LANG_STORE)

// 语言
export const useLangStore = defineStore({
  id: 'useLangStore',
  state: (): LangStateType =>
    storageLang || {
      
    },
  getters: {
    getLang(): LangEnum {
      return this.lang
    }
  },
  actions: {
    changeLang(lang: LangEnum): void {
      if (this.lang === lang) return
      this.lang = lang
      setLocalStorage(GO_LANG_STORE, this.$state)
    }
  }
})
