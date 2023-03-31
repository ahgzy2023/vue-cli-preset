import type { ColumnProps } from "ant-design-vue/lib/table"; 

export const globalSearchColumn = (proxy: any): ColumnProps[] => {
    return [
        {
          title: '序号',
          dataIndex: 'id',
          key: 'id',
          align: 'center',
          customRender: ({text, record, index}: any) => `${index + 1}`,
        },
        {
          title: proxy.$t('datamap.table_name'),
          dataIndex: 'tableName',
          key: 'tableName',
          ellipsis: true,
        },
        {
          title: proxy.$t('datamap.project_id'),
          dataIndex: 'projectId',
          key: 'projectId',
          ellipsis: true
        },
        {
          title: proxy.$t('datamap.project_name'),
          dataIndex: 'projectName',
          key: 'projectName',
          ellipsis: true,
        },
        {
          title: proxy.$t('datamap.responsible_person'),
          dataIndex: 'organizePerson',
          key: 'organizePerson',
        },
        {
          title: proxy.$t('datamap.memory_engine'),
          dataIndex: 'memoryEngine',
          key: 'memoryEngine',
          ellipsis: true
        },
        {
          title: proxy.$t('datamap.database'),
          dataIndex: 'database',
          key: 'database',
          ellipsis: true
        },
        {
          title: proxy.$t('datamap.create_date'),
          dataIndex: 'createDate',
          key: 'createDate',
        },
        {
          title: proxy.$t('datamap.life_cycle'),
          dataIndex: 'lifeCycle',
          key: 'lifeCycle',
        },
      ];
}