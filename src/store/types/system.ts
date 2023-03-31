
export interface IProject {
  enable: boolean;
  projectId: string;
  projectName: string;
  productIds: string[];
}

export interface IProduct {
  enable: boolean;
  id: string;
  name: string;
  baseUrl: string;
  menus: IMenu[];
}

export interface IMenu {
  label: string;
  url: string;
  id: string;
  pid: string;
  children?: IMenu[];
}

export interface systmeStore {
  isRouteAlive: boolean;
  globalLoading: boolean;
  currentProject: IProject;
  currentProduct: IProduct;
  projectList: IProject[];
  currentMenu: IMenu;
}
