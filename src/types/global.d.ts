/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App } from 'vue';
import type { IMenu, IProduct, IProject } from '@/store/types';
export default {}
declare global {
  interface Window {
    $t: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    eventCenterForAppNameVite: {
      setGlobalData: (param: { name: string }) => void;
      clearDataListener: () => void
    };
    microApp: {
      addDataListener: (fn: (data: Record<string, unknown>) => void) => void;
      getData: () => unknown;
      dispatch: (data: Record<string, unknown>) => void
    }
    __MICRO_APP_BASE_ROUTE__: string;
    __MICRO_APP_NAME__: string;
    __MICRO_APP_ENVIRONMENT__: string;
    __MICRO_APP_BASE_APPLICATION__: string;
    __CHILD_BASE_URL: string;
    __WUJIE: {
      id: string,
      degrade?: boolean
    },
    CustomElementRegistry: any
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用公共加载路径
    __WUJIE_PUBLIC_PATH__: string;
    // 原生的querySelector
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
    // 原生的querySelectorAll
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
    // 原生的window对象
    __WUJIE_RAW_WINDOW__: Window;
    // 子应用沙盒实例
    __WUJIE: WuJie;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void;
    // 注入对象
    $wujie: {
      location: Location
      bus: {
        $emit: (eventName: string, ...params: any) => void
        $on: (eventName: string, callBack: (args: unknown) => void) => void
      },
      props: {
        jump: (appName: string) => void,
        currentProject: IProject,
        currentProduct: IProduct,
        currentMenu: IMenu,
        projectList: IProject[]
      }
    }
  }
}