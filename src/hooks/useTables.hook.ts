import { funcDomainEnum } from '@/enums/sysEnums';
import {
  globalSearchColumn,
} from './useColumns';

export const useColumns = (proxy: any, type?: string) => {
  if (!type) return globalSearchColumn(proxy);
  switch (type) {
    case funcDomainEnum.GLOBAL:
      return globalSearchColumn(proxy);
  }
};
