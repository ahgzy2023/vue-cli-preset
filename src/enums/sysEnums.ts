export enum StorageEnum {
    // 全局设置
    IDATA_SYSTEM_SETTING_STORE = 'IDATA_SYSTEM_SETTING',
    // token 等信息
    IDATA_ACCESS_TOKEN_STORE = 'IDATA_ACCESS_TOKEN',
    // 登录信息
    IDATA_LOGIN_INFO_STORE = 'IDATA_LOGIN_INFO',
    // 语言
    IDATA_LANG_STORE = 'IDATA_LANG',
    // 当前选择的主题
    IDATA_DESIGN_STORE = 'IDATA_DESIGN',
    // 工作台布局配置
    IDATA_CHART_LAYOUT_STORE = 'IDATA_CHART_LAYOUT',
    // 工作台需要保存的数据
    IDATA_CHART_STORAGE_LIST = 'IDATA_CHART_STORAGE_LIST'
}

// 主题
export enum ThemeEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

// 语言
export enum LangEnum {
    ZH = 'ZH',
    EN = 'EN'
}

// 预览展示
export enum PreviewScaleEnum {
    FIT = 'fit',
    SCROLL_Y = 'scrollY',
    SCROLL_X = 'scrollX',
    FULL = 'full'
}

//功能垂域
export enum funcDomainEnum {
    GLOBAL = 'globalSearch',
    DETAIL = 'detailInfo',
    OUTPUT = 'outputInfo',
    OVER_VIEW = 'dataOverview',
    PARTITION = 'partitionInfo',
    CONSANGUINITY = 'consanguinityInfo',
    OVERVIEWS = 'dataOverviews',
    PRO_DETAIL = 'projectDetail',
    MY_CREATE = 'myCreateTables',
    MY_COLLECTION = 'myCollectionTables'
}

//分页设置
export enum pageEnum {
    PAGE = 1,
    SIZE = 10
}

//路由
export enum routeEnum {
    // 登录
    BASE_LOGIN = '/login',
    BASE_LOGIN_NAME = 'Login',
  
    //重定向
    REDIRECT = '/redirect',
    REDIRECT_NAME = 'Redirect',
    RELOAD = '/reload',
    RELOAD_NAME = 'Reload',

    // 错误
    ERROR_PAGE_NAME_401 = 'ErrorPage401',
    ERROR_PAGE_NAME_403 = 'ErrorPage403',
    ERROR_PAGE_NAME_404 = 'ErrorPage404',
    ERROR_PAGE_NAME_500 = 'ErrorPage500'
  }