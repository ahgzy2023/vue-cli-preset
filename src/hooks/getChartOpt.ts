const t = window['$t'];
//各项目表数量Opt
const iProjectTableChart = (params: any) => {
  return {
    title: {
      text: t('datamap.tables_each_project') + t('datamap.top_15'),
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: '#E6F7FF',
          opacity: 0.5,
        },
      },
      className: 'tooltip-custom-datamap',
      borderWidth: 0,
      formatter: (param: any) => {
        const data = param[0];
        return `<div>
            <div class="tooltip-name">${data.name}</div>
            <div class="tooltip-value">
                <span>${data.seriesName}</span>
                <span>${data.value}</span>
            </div>
            </div>`;
      },
      valueFormatter: (value: number | string) => {
        return value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#BFBFBF',
        },
      },
      axisLabel: {
        color: '#8C8C8C',
      },
    },
    yAxis: {
      type: 'category',
      data: [
        '卫生',
        '心理',
        '图计算',
        '心理',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
      ],
      axisLine: {
        lineStyle: {
          color: '#BFBFBF',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#8C8C8C',
      },
    },
    series: [
      {
        name: t('datamap.table_nums'),
        type: 'bar',
        data: [
          18203, 23489, 29034, 104970, 131744, 30230, 63030, 30230, 30230,
          63230, 630230, 6330, 6330, 63030, 111230,
        ],
        itemStyle: {
          color: '#40A9FF',
        },
      },
    ],
  };
};
//各项目数据量Opt
const iProjectDatasChart = (params: any) => {
  return {
    title: {
      text: t('datamap.datas_each_project') + t('datamap.top_15'),
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: '#E6F7FF',
          opacity: 0.5,
        },
      },
      className: 'tooltip-custom-datamap',
      borderWidth: 0,
      formatter: (param: any) => {
        const data = param[0];
        return `<div>
              <div class="tooltip-name">${data.name}</div>
              <div class="tooltip-value">
                  <span>${data.seriesName}</span>
                  <span>${data.value}</span>
              </div>
              </div>`;
      },
      valueFormatter: (value: number | string) => {
        return value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#BFBFBF',
        },
      },
      axisLabel: {
        color: '#8C8C8C',
      },
    },
    yAxis: {
      type: 'category',
      data: [
        '卫生',
        '心理',
        '图计算',
        '心理',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
        '卫生',
      ],
      axisLine: {
        lineStyle: {
          color: '#BFBFBF',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#8C8C8C',
      },
    },
    series: [
      {
        name: t('datamap.table_nums'),
        type: 'bar',
        data: [
          18203, 23489, 29034, 104970, 131744, 30230, 63030, 30230, 30230,
          63230, 630230, 6330, 6330, 63030, 111230,
        ],
        itemStyle: {
          color: '#36CFC9',
        },
      },
    ],
  };
};

//新增数据表Opt
const iDataSheetChart = (params: any) => {
  return {
    title: {
      text: t('datamap.recently_year_new_data_sheet'),
    },
    backgroundColor: '#fff0',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(230, 247, 255, 0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(64, 169, 255, 1)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          opacity: 0.5,
        },
      },
      className: 'tooltip-custom-datamap',
      borderWidth: 0,
      formatter: (param: any) => {
        const data = param[0];
        return `<div>
              <div class="tooltip-name">${data.name}</div>
              <div class="tooltip-value">
                  <span>${data.seriesName}</span>
                  <span>${data.value}</span>
              </div>
              </div>`;
      },
      valueFormatter: (value: number | string) => {
        return value;
      },
    },
    color: '#8C8C8C',
    grid: {
      top: '50',
      right: '40',
      bottom: '30',
      left: '40',
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          color: '#8C8C8C',
        },
        axisLine: {
          lineStyle: {
            color: '#BFBFBF',
          },
        },
        axisTick: {
          show: true,
          inside: true,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#0FA078',
          },
        },
        splitArea: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8F8F8F',
          },
        },
        axisLabel: {
          color: '#8C8C8C',
          fontSize: 14,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(217, 217, 217, 0.6)',
          },
        },
      },
    ],
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        name: t('datamap.new_data_sheet'),
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(24, 144, 255, 1)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(24, 144, 255, 0)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        itemStyle: {
          color: 'rgba(24, 144, 255, 1)',
        },
        lineStyle: {
          color: 'rgba(24, 144, 255, 1)',
        },
      },
    ],
  };
};
export const getChartOpt = (type: string, params: any) => {
  switch (type) {
    case 'table':
      return iProjectTableChart(params);
    case 'datas':
      return iProjectDatasChart(params);
    case 'datasheet':
      return iDataSheetChart(params);
  }
};
