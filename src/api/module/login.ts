import service from '@/api/http';
import { ContentTypeEnum } from '@/enums/httpEnums';

const loginApi = {
  // 验证登录实例
  postVerification: (params = { userName: 'test', password: '123456' }) =>
    service.post('/sysUser/login', false, params, ContentTypeEnum.JSON),
  // 测试接口
  interfaceConnectionTest: (params: object) =>
    service.post('/sysWorkOrder/commit', false, params, ContentTypeEnum.JSON),
};

export default loginApi;
