document.addEventListener('DOMContentLoaded', function() {
    // 获取图表容器元素
    const chartDom = document.querySelector('.middle-section-top .chart');
    
    // 初始化 ECharts 实例
    const myChart = echarts.init(chartDom);
  
    const fundData = [
      { name: '国家自然科学基金', value: 180 },
      { name: '省市基金项目', value: 113 },
      { name: '国家教育部基金', value: 56 },
      { name: '国家自然科学基金项目', value: 44 },
      { name: '科技部国家科技计划项目', value: 11 },
      { name: '其他基金项目', value: 5 }
    ];
  
    // 定义颜色数组
    const colors = ['#7e754c', '#93905b', '#aaa772', '#a9b88d', '#d5c9a1', '#5d1d1c'];
  
    // 图表配置项
    // 尖峰图配置项
    const option = {
      grid: {
        left: '10%',
        right: '10%',
        bottom: '0%',
        top: '5%',
        containLabel: false,
        color: 'rgba(255,255,255,0.9)'
      },
      tooltip: {
        trigger: 'axis',
        textStyle: { // 标题文字的样式
          color: '#5d1d1c',
          fontSize: 14,
          fontFamily: 'SourceHanSerifCN-Bold',
        },
        axisPointer: {
          type: 'none'
        },
        formatter: function (params) {
          return '基金项目数量 </br>' + params[0].name + ': ' + params[0].value;
        }
      },
      xAxis: {
        data: [ '国家自然科学基金', '省市基金项目', '国家教育部基金', '国家自然科学基金项目', '科技部国家科技计划项目', '其他基金项目'],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: '#ffffff'
        },
        show: null,
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }
      },
      series: [
        {
          name: 'hill',
          type: 'pictorialBar',
          barCategoryGap: '-100%',
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
          itemStyle: {
            opacity: 1,
            color: function(params) {
                // 根据数据索引返回对应的颜色
                return colors[params.dataIndex];
              }
          },
          emphasis: {
            itemStyle: {
              opacity: 1
            }
          },
          data: [ 180, 113, 56, 44, 11, 5],
          z: 10
        },
      ]
    };
  
    // 应用配置项
    myChart.setOption(option);
  
    // 响应式设计
    window.addEventListener('resize', function() {
      myChart.resize();
    });


////////////////////////////////////////////////////////////////////////
////////////////////////////以下为图表2//////////////////////////////////
////////////////////////////////////////////////////////////////////////

    // 获取middle-section-middle中的chart图表容器元素
    const chartDom2 = document.querySelector('.middle-section-middle .chart');
    // 初始化ECharts实例
    const myChart2 = echarts.init(chartDom2);
    const subjectData = [
        { name: '历史、地理', value: 1034 },
        { name: '文化、科学、教育、体育', value: 1021 },
        { name: '文学', value: 782 },
        { name: '经济', value: 425 },
        { name: '工业技术', value: 201 },
        { name: '语言、文字', value: 186 },
        { name: '艺术', value: 142 },
        { name: '社会科学总论', value: 139 },
        { name: '天文学、地球科学', value: 112 },
        { name: '哲学、宗教', value: 103 },
        { name: '政治、法律', value: 85 },
        { name: '农业科学', value: 69 },
        { name: '环境科学、安全科学', value: 44 },
        { name: '医药、卫生', value: 36 },
        { name: '自然科学总论', value: 26 },
        { name: '生物科学', value: 18 },
        { name: '综合性文献', value: 14 },
        { name: '理论', value: 11 },
        { name: '交通运输', value: 9 },
        { name: '军事', value: 7 },
        { name: '数理科学和化学', value: 5 }
    ];
    // 定义颜色数组
    const colors2 = ['#7e754c', '#93905b', '#aaa772', '#a9b88d', '#d5c9a1', '#5d1d1c'];
    // 计算总数量
    const totalSubject = subjectData.reduce((sum, item) => sum + item.value, 0);
    // 图表配置项
    const option2 = {
      grid: {
        left: '15%',
        right: '15%',
        bottom: '15%',
        top: '15%',
        containLabel: true,
        color: 'rgba(255,255,255,0.9)'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: { // 标题文字的样式
          color: '#5d1d1c',
          fontSize: 14,
          fontFamily: 'SourceHanSerifCN-Bold',
      },
      },
      series: [
        {
          name: '学科分类',
          type: 'pie',
          radius: ['0%', '90%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            show: true,
            position: 'inside',
            color: '#5d1d1c', // 设置标签文字颜色为白色，可根据需要修改
            fontFamily: 'SourceHanSerifCN-Bold',

          },
          emphasis: {
            label: {
              show: false,
              fontSize: 15,
              fontWeight: 'bold',

            }
          },
          labelLine: {
            show: false
          },
          data: subjectData.map(item => ({...item, value: item.value, percent: (item.value / totalSubject * 100).toFixed(2)})),
          color: colors2
        }
      ]
    };
    // 应用配置项
    myChart2.setOption(option2);
    // 响应式设计
    window.addEventListener('resize', function() {
      myChart2.resize();
    });


////////////////////////////////////////////////////////////////////////
////////////////////////////以下为图表3//////////////////////////////////
////////////////////////////////////////////////////////////////////////
    const chartDom3 = document.querySelector('.middle-section-bottom .chart');
    const myChart3 = echarts.init(chartDom3);
    const colors3 = ['#7e754c', '#93905b', '#aaa772', '#a9b88d', '#d5c9a1', '#5d1d1c'];
    const funnelData = [
        { name: '中文核心期刊(北大)', value: 618 },
        { name: 'CSSCI中文社科引文索引(南大)', value: 296 },
        { name: '统计源期刊(中信所)', value: 152 },
        { name: '中文社会科学引文索引（CSSCI）来源期刊扩展版', value: 94 },
        { name: 'CA化学文摘(美)', value: 76 },
        { name: 'CSCD中国科学引文库(中科院)', value: 56 },
        { name: 'A类期刊', value: 56 },
        { name: 'EI工程索引(美)', value: 5 },
        { name: 'SCI科学引文索引(美)', value: 3 }
    ];
    const option3 = {
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '2%',
            containLabel: false,
            color: 'rgba(255,255,255,0.9)'
          },
          tooltip: {
            trigger: 'item',
            formatter: '期刊数量 <br/>{b}: {c} ({d}%)',
            textStyle: { // 标题文字的样式
              color: '#5d1d1c',
              fontSize: 14,
              fontFamily: 'SourceHanSerifCN-Bold',
          },
          },
        series: [
            {
                left: '2%',
                width: '80%',
                height: '90%',
                top: '2%',
                type: 'funnel',
                data: funnelData,
                funnelAlign: 'left',
                label: {
                    show: true,
                    position: 'right',
                    color: '#5d1d1c', // 设置标签文字颜色为白色，可根据需要修改,
                    fontFamily: 'SourceHanSerifCN-Bold',

                },
                itemStyle: {
                    borderColor: '#333',
                    borderWidth: 0.5,
                    color: function(params) {
                        return colors3[params.dataIndex];
                    }
                }
            }
        ]
    };
    myChart3.setOption(option3);
    window.addEventListener('resize', function() {
        myChart3.resize();
    });


////////////////////////////////////////////////////////////////////////
////////////////////////////以下为图表4//////////////////////////////////
////////////////////////////////////////////////////////////////////////
    const chartDom4 = document.querySelector('.right-section-top .chart');
    const myChart4 = echarts.init(chartDom4);
    const colors4 = ['#7e754c', '#93905b', '#aaa772', '#a9b88d', '#d5c9a1', '#5d1d1c'];
    const areaData = [
      { name: '云南省', value: 159 },
      { name: '江苏省', value: 128 },
      { name: '北京市', value: 127 },
      { name: '广西壮族自治区', value: 86 },
      { name: '湖北省', value: 82 },
      { name: '上海市', value: 68 },
      { name: '浙江省', value: 68 },
      { name: '广东省', value: 68 },
      { name: '湖南省', value: 61 },
      { name: '福建省', value: 54 },
      { name: '贵州省', value: 53 },
      { name: '四川省', value: 52 },
      { name: '山东省', value: 43 },
      { name: '安徽省', value: 41 },
      { name: '河南省', value: 37 },
      { name: '陕西省', value: 36 },
      { name: '辽宁省', value: 28 },
      { name: '河北省', value: 26 },
      { name: '重庆市', value: 25 },
      { name: '山西省', value: 22 },
      { name: '江西省', value: 20 }
    ];
    const totalArea = areaData.reduce((sum, item) => sum + item.value, 0);
    const option4 = {
      grid: {
        left: '15%',
        right: '15%',
        bottom: '15%',
        top: '15%',
        containLabel: true,
        color: 'rgba(255,255,255,0.9)'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ',
        textStyle: { // 标题文字的样式
          color: '#5d1d1c',
          fontSize: 14,
          fontFamily: 'SourceHanSerifCN-Bold',
      },
      },
      visualMap: {
        type: 'continuous', // 连续型颜色映射
        show: false,
        min: 20, // 数据最小值
        max: 159, // 数据最大值
        calculable: true,
        inRange: {
          color: ['#7e754c', '#93905b', '#aaa772', '#a9b88d', '#d5c9a1']
        }
      },
      series: [
        {
          name: '地区分布',
          type: 'treemap',
          width: '100%',
          height: '100%',
          breadcrumb: {
            show: false // 是否显示下面的面包屑导航
          },
          roam: true, // 是否允许缩放和平移
          radius: ['0%', '90%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 0.3
          },
          label: {
            
            show: true,
            position: 'insideTopLeft',
            color: '#5d1d1c', // 设置标签文字颜色为白色，可根据需要修改
            fontFamily: 'SourceHanSerifCN-Bold',
            fontSize: 15, // 指定字体大小
          },
          labelLine: {
            show: false
          },
          data: areaData.map(item => ({...item, value: item.value, percent: (item.value / totalArea * 100).toFixed(2)})),
          color: colors4
        }
      ]
    };
    myChart4.setOption(option4);
    window.addEventListener('resize', function() {
        myChart4.resize();
    });
      


  
////////////////////////////////////////////////////////////////////////
////////////////////////////以下为图表5//////////////////////////////////
////////////////////////////////////////////////////////////////////////

    // 获取.right-section-middle中的chart图表容器元素
    const chartDom5 = document.querySelector('.right-section-bottom .chart');
    // 初始化ECharts实例
    const myChart5 = echarts.init(chartDom5);
    // 模拟曲线图数据
    const lineData = [
      { name: '1926', value: 1 },
      { name: '1927', value: 0 },
      { name: '1928', value: 0 },
      { name: '1929', value: 0 },
      { name: '1930', value: 1 },
      { name: '1931', value: 0 },
      { name: '1932', value: 0 },
      { name: '1933', value: 0 },
      { name: '1934', value: 0 },
      { name: '1935', value: 0 },
      { name: '1936', value: 1 },
      { name: '1937', value: 0 },
      { name: '1938', value: 0 },
      { name: '1939', value: 0 },
      { name: '1940', value: 2 },
      { name: '1941', value: 0 },
      { name: '1942', value: 0 },
      { name: '1943', value: 0 },
      { name: '1944', value: 0 },
      { name: '1945', value: 0 },
      { name: '1946', value: 0 },
      { name: '1947', value: 1 },
      { name: '1948', value: 0 },
      { name: '1949', value: 0 },
      { name: '1950', value: 0 },
      { name: '1951', value: 0 },
      { name: '1952', value: 0 },
      { name: '1953', value: 0 },
      { name: '1954', value: 0 },
      { name: '1955', value: 0 },
      { name: '1956', value: 0 },
      { name: '1957', value: 0 },
      { name: '1958', value: 0 },
      { name: '1959', value: 0 },
      { name: '1960', value: 1 },
      { name: '1961', value: 0 },
      { name: '1962', value: 2 },
      { name: '1963', value: 0 },
      { name: '1964', value: 1 },
      { name: '1965', value: 0 },
      { name: '1966', value: 0 },
      { name: '1967', value: 0 },
      { name: '1968', value: 0 },
      { name: '1969', value: 0 },
      { name: '1970', value: 0 },
      { name: '1971', value: 0 },
      { name: '1972', value: 0 },
      { name: '1973', value: 0 },
      { name: '1974', value: 0 },
      { name: '1975', value: 2 },
      { name: '1976', value: 1 },
      { name: '1977', value: 1 },
      { name: '1978', value: 8 },
      { name: '1979', value: 13 },
      { name: '1980', value: 15 },
      { name: '1981', value: 18 },
      { name: '1982', value: 29 },
      { name: '1983', value: 21 },
      { name: '1984', value: 31 },
      { name: '1985', value: 39 },
      { name: '1986', value: 34 },
      { name: '1987', value: 38 },
      { name: '1988', value: 26 },
      { name: '1989', value: 23 },
      { name: '1990', value: 41 },
      { name: '1991', value: 38 },
      { name: '1992', value: 33 },
      { name: '1993', value: 44 },
      { name: '1994', value: 53 },
      { name: '1995', value: 80 },
      { name: '1996', value: 43 },
      { name: '1997', value: 55 },
      { name: '1998', value: 54 },
      { name: '1999', value: 39 },
      { name: '2000', value: 41 },
      { name: '2001', value: 49 },
      { name: '2002', value: 59 },
      { name: '2003', value: 77 },
      { name: '2004', value: 44 },
      { name: '2005', value: 56 },
      { name: '2006', value: 77 },
      { name: '2007', value: 74 },
      { name: '2008', value: 69 },
      { name: '2009', value: 109 },
      { name: '2010', value: 159 },
      { name: '2011', value: 200 },
      { name: '2012', value: 210 },
      { name: '2013', value: 158 },
      { name: '2014', value: 180 },
      { name: '2015', value: 242 },
      { name: '2016', value: 224 },
      { name: '2017', value: 302 },
      { name: '2018', value: 294 },
      { name: '2019', value: 273 },
      { name: '2020', value: 263 },
      { name: '2021', value: 238 },
      { name: '2022', value: 162 },
      { name: '2023', value: 194 },
      { name: '2024', value: 44 },
      { name: '2025', value: 37 }
    ];     
    // 定义颜色
    const color = '#7e754c';
    // 曲线图配置项
    const option5 = {
        grid: {
            left: '2%',
            right: '2%',
            bottom: '5%',
            top: '10%',
            containLabel: true,
            color: 'rgba(255,255,255,0.9)'
        },
        tooltip: {
            trigger: 'axis',
            textStyle: { // 标题文字的样式
              color: '#5d1d1c',
              fontSize: 14,
              fontFamily: 'SourceHanSerifCN-Bold',
          },
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: 'white'
                }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: lineData.map(item => item.name),
            axisTick: { show: true },
            axisLine: { show: true },
            axisLabel: {
              show: true,
              fontFamily: 'SourceHanSerifCN-Bold', // 设置字体
                fontSize: 12 // 设置字体大小
            }
        },
        yAxis: {
            type: 'value',
            splitLine: { show: true },
            axisLine: { show: false },
            axisLabel: { 
                show: true,
                fontFamily: 'SourceHanSerifCN-Bold', // 设置字体
                fontSize: 11 // 设置字体大小
            }
        },
        series: [
            { 
                name: '曲线',
                type: 'line',
                data: lineData.map(item => item.value),
                itemStyle: {
                    color: color
                },
                lineStyle: {
                    color: color
                }
            }
        ]
    };
    // 应用配置项
    myChart5.setOption(option5);
    // 响应式设计
    window.addEventListener('resize', function() {
        myChart5.resize();
    });

////////////////////////////////////////////////////////////////////////
////////////////////////////以下为图表5//////////////////////////////////
////////////////////////////////////////////////////////////////////////
// 获取.right-section-middle中的chart图表容器元素
    const chartDom6 = document.querySelector('.right-section-middle .chart');
    // 初始化ECharts实例
    const myChart6 = echarts.init(chartDom6);
    // 定义关系图数据
    const nodes = [
      { name: '徐霞客' },
      { name: '游记' },
      { name: '旅游' },
      { name: '研究' },
      { name: '文化' },
      { name: '日记' },
      { name: '考察' },
      { name: '价值' },
      { name: '纪念' },
      { name: '贡献' },
      { name: '周年' },
      { name: '地理' },
      { name: '精神' },
      { name: '云南' },
      { name: '生态' },
      { name: '思想' },
      { name: '中国' },
      { name: '资源' },
      { name: '明代' },
      { name: '旅行' },
      { name: '文学' },
      { name: '为例' },
      { name: '地理学' },
      { name: '开发' },
      { name: '地名' },
      { name: '山水' },
      { name: '西南' },
      { name: '民族' }
  ];
  
  // 这里简单假设一些连接关系，你可以根据实际情况修改
  const links = [
      { source: '徐霞客', target: '游记' },
      { source: '徐霞客', target: '旅游' },
      { source: '游记', target: '研究' },
      { source: '游记', target: '文化' },
      { source: '游记', target: '日记' },
      { source: '旅游', target: '考察' },
      { source: '考察', target: '价值' },
      { source: '徐霞客', target: '贡献' },
      { source: '贡献', target: '纪念' },
      { source: '纪念', target: '周年' },
      { source: '游记', target: '地理' },
      { source: '徐霞客', target: '精神' },
      { source: '旅游', target: '云南' },
      { source: '旅游', target: '生态' },
      { source: '徐霞客', target: '思想' },
      { source: '游记', target: '中国' },
      { source: '考察', target: '资源' },
      { source: '徐霞客', target: '明代' },
      { source: '旅游', target: '旅行' },
      { source: '游记', target: '文学' },
      { source: '研究', target: '为例' },
      { source: '地理', target: '地理学' },
      { source: '资源', target: '开发' },
      { source: '游记', target: '地名' },
      { source: '旅游', target: '山水' },
      { source: '旅游', target: '西南' },
      { source: '文化', target: '民族' }
  ];

    // 定义颜色
    const color6 = '#7e754c';

    // 关系图配置项
    const option6 = {

        series: [
            {
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                label: {
                    show: true,
                    fontFamily: 'SourceHanSerifCN-Bold',
                    fontSize: 20,
                    color: color6
                },
                lineStyle: {
                    normal: {
                        color: color6,
                        lineStyle: 'dashed',
                        width: 1.5,
                        opacity: 1,
                        cap: 'butt',
                        join: 'bevel',
                        miterLimit: 5,
                        shadowBlur: 1,
                        shadowColor: '#fff',
                        shadowOffsetX: 0.5,
                        shadowOffsetY: 0.5
                    }
                },
                emphasis: {
                    focus: 'adjacency',
                    label: {
                        show: true
                    }
                },
                force: {
                    repulsion: 100
                },
                roam: true, // 允许图表拖动
                itemStyle: {
                    normal: {
                        color: 'none', // 取消节点颜色
                        borderColor: 'none' // 取消节点边框颜色
                    }
                }
            }
        ]
    };

    // 应用配置项
    myChart6.setOption(option6);

    // 响应式设计
    window.addEventListener('resize', function () {
        myChart6.resize();
    });
  });
