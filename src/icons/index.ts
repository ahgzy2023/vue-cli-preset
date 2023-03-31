
import SvgIcon from "@/components/svgIcon/index.vue";
import type { App } from "vue";
const componentPlugin: any = {
  install: function(app: App, options: any) {
    if (
      options &&
      options.imports &&
      Array.isArray(options.imports) &&
      options.imports.length > 0
    ) {
      // 按需引入图标
      const { imports } = options;
      imports.forEach((name: any) => {
        require(`@/icons/svg/${name}.svg`);
      });
    } else {
      // 全量引入图标
      const ctx = require.context("@/icons/svg/", false, /\.svg$/);
      ctx.keys().forEach(path => {
        const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/);
        if (!temp) return;
        const name = temp[1];
        require(`@/icons/svg/${name}.svg`);
      });
    }
    app.component('svg-icon', SvgIcon);
  }
};
export default componentPlugin;