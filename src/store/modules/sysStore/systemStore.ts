import type { IMenu, IProduct, IProject, systmeStore } from '@/store/types';
import { defineStore } from 'pinia';
import { nextTick } from 'vue';
// 系统
export const useSysStore = defineStore({
  id: 'useSysStore',
  state: (): systmeStore => ({
    isRouteAlive: true,
    globalLoading: false, //全局加载效果
    currentProduct: {
      enable: false,
      id: '',
      name: '',
      baseUrl: '',
      menus: [],
    },
    currentMenu: {
      label: '',
      url: '',
      id: '',
      pid: '',
    },
    currentProject: {
      enable: false,
      projectId: '',
      projectName: '',
      productIds: [],
    },
    projectList: [],
  }),
  getters: {
    getRouteAlive(): boolean {
      return this.isRouteAlive;
    },
    getLoading(): boolean {
      return this.globalLoading;
    },
    getProjectList(): IProject[] {
      return this.projectList;
    },
    getCurrentProject(): IProject {
      return this.currentProject;
    },
    getCurrentMenu(): IMenu {
      return this.currentMenu;
    },
    getCurrentProduct(): IProduct {
      return this.currentProduct;
    },
  },
  actions: {
    reload(): void {
      this.isRouteAlive = false;
      nextTick(() => {
        this.isRouteAlive = true;
      });
    },
    setGlobalLoading(toggle: boolean): void {
      nextTick(() => {
        this.globalLoading = toggle;
      });
    },
    setProjectList(data: IProject[]): void {
      this.projectList = data;
    },
    setCurrentProject(current: IProject): void {
      this.currentProject = current;
    },
    setCurrentMenu(current: IMenu): void {
      this.currentMenu = current;
    },
    setCurrentProduct(current: IProduct): void {
      this.currentProduct = current;
    },
  },
});
