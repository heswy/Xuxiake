document.addEventListener('DOMContentLoaded', function () {

    ////////////////////////////////////////////////// 
    //////////////////////图表1////////////////////////
    ////////////////////////////////////////////////// 

    // 获取图表容器元素
    const chartDom = document.querySelector('.middle-top .chart-area');
    // 初始化 ECharts 实例
    const myChart = echarts.init(chartDom);
    // 模拟数据
    const data = [
        { name: '峰', value: 2560 },
        { name: '峦', value: 62 },
        { name: '岳', value: 85 },
        { name: '嶂', value: 68 },
        { name: '丘', value: 18 },
        { name: '陵', value: 88 },
        { name: '岘', value: 3 },
        { name: '峭', value: 236 },
        { name: '岑', value: 29 },
        { name: '岵', value: 1 },
        { name: '屹', value: 4 },
        { name: '崖', value: 2456 },
        { name: '崮', value: 0 },
        { name: '麓', value: 787 },
        { name: '巇', value: 2 },
        { name: '岨', value: 4 },
        { name: '陇', value: 148 },
        { name: '冈', value: 702 },
        { name: '峡', value: 2316 },
        { name: '谷', value: 250 },
        { name: '岭', value: 2040 },
        { name: '脉', value: 249 }
    ];

    // 找到数据中的最大值
    const maxValue = Math.max.apply(null, data.map(function (item) { return item.value; }));
    // 计算总数量
    const totalValue = data.reduce((sum, item) => sum + item.value, 0);
    // 气泡颜色数组
    const color = [ '#87beb8', '#7db5b2', '#66a49f', '#518986', '#007074','#246b67'];
    // 气泡数据数组
    const bubbleData = [];
    // 气泡基础大小
    const basicSize = 50;
    // 节点之间的斥力因子，值越大，气泡间距越大
    const repulsion = 900;
    // 填充气泡数据数组bubbleData

    for (let item of data) {
        // 计算占比
        const percent = (item.value / totalValue * 100).toFixed(2);
        // 根据数量来赋予气泡颜色
        var curColor = '';
        if (item.value < 10) {
            curColor = color[0];
        } else if (item.value < 100) {
            curColor = color[1];
        } else if (item.value < 500) {
            curColor = color[2];
        } else if (item.value < 1000) {
            curColor = color[3];
        } else if (item.value < 2000) {
            curColor = color[4];
        } else if (item.value < 2500) {
            curColor = color[5];
        } else {
            curColor = color[5];
        }
        // 气泡大小设置，根据数据值和最大值的比例，用线性函数计算气泡大小
        // 使用对数函数来计算气泡大小，增强大数据和小数据之间的差距
        let size = basicSize + Math.log(item.value + 1) / Math.log(maxValue + 1) * (200 - basicSize);
        if (size < basicSize) size = basicSize;
        bubbleData.push({
            "name": item.name,
            "value": item.value,
            'percent': percent,
            "symbolSize": size,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "color": curColor,
                    "borderWidth": 0.5, // 外边缘宽度
                    "borderColor": '#5d1d1c' // 外边缘颜色
                }
            }
        });
    }
    const option = {
        animationEasingUpdate: 'bounceIn',
        grid: {
            left: '10%',
            containLabel: true // 这个属性可以确保图表内容不会溢出画布
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return params.name + '</br>个数: ' + params.value + '个</br>占比：' + params.data.percent + '%';
            },
            textStyle: { // 提示文字的样式
                color: '#5d1d1c', // 修改字体颜色为红色
                fontSize: 14, // 修改字体字号为16px
                fontFamily: 'SourceHanSerifCN-Bold',
            }
        },
        title: {
            text: '数据来源:(明)徐弘祖著;朱惠荣校注,徐霞客游记校注[M].昆明:云南人民出版社， 1985.06.',
            left: 'center',
            top: 'bottom',
            textStyle: { // 标题文字的样式
                color: '#5d1d1c',
                fontSize: 14,
                fontFamily: 'SourceHanSerifCN-Bold',
            }

        },
        series: [{
            type: 'graph',
            layout: 'force',
            label: {
                show: true,
                color: '#5d1d1c', // 设置气泡上文字的颜色
                fontFamily: 'SourceHanSerifCN-Bold',
                fontSize: 20, // 设置气泡上文字的大小
                position: 'inside' // 设置气泡上文字的位置
            },
            // 是否使用张力
            force: {
                repulsion: repulsion,
                edgeLength: 100
            },
            // 是否开启鼠标缩放和平移漫游
            roam: true,
            data: bubbleData,
            emphasis: {
                symbolSize: 15 // 设置节点高亮时的大小为20
            }
        }]
    };
    // 应用配置项
    myChart.setOption(option);
    // 响应式设计
    window.addEventListener('resize', function() {
        myChart.resize();
      });


////////////////////////////////////////////////// 
//////////////////////阶梯柱状图////////////////////
////////////////////////////////////////////////// 
      const chartDom2 = document.querySelector('.middle-bottom .chart-area');
      const myChart2 = echarts.init(chartDom2);
      
      const ageRanges = ['21 - 30岁', '31 - 40岁', '41 - 50岁', '51 - 60岁'];
      const data2 = [25, 5, 28, 12];
      
      const option2 = {
          grid: {
              left: '10%',
              right: '10%',
              bottom: '10%',
              top: '5%',
              containLabel: false,
              color: 'rgba(255,255,255,0.9)'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: { type: 'shadow' },
              textStyle: { 
                fontFamily: 'SourceHanSerifCN-Bold',
                color: '#5d1d1c', // 修改字体颜色为红色
                fontSize: 14, // 修改字体字号为16px
               },
              formatter: function (params) {
                  const index = params[0].dataIndex;
                  return `${ageRanges[index]}<br>登山数量 : ${data2[index]}`;
              }
          },
          xAxis: {
              type: 'category',
              data: ageRanges,
              axisLabel: {
                  fontFamily: 'SourceHanSerifCN-Bold', 
                  color: '#5d1d1c',
                  fontSize:14
              }
          },
          yAxis: {
              type: 'value',
              axisLabel: { 
                  show: false,
                  fontFamily: 'SourceHanSerifCN-Bold',
                  color: '#5d1d1c' 
              },
              axisLine: { show: false }
          },
          series: [
              {
                  name: 'Placeholder',
                  type: 'bar',
                  stack: 'total',
                  silent: true,
                  itemStyle: {
                      borderColor: 'transparent',
                      color: 'transparent'
                  },
                  emphasis: {
                      itemStyle: {
                          borderColor: 'transparent',
                          color: 'transparent'
                      }
                  },
                  data: [0, 25, 30, 58] // 占位数据（根据 data2 累加）
              },
              {
                  name: '登山数量',
                  type: 'bar',
                  stack: 'total',
                  label: {
                      show: true,
                      position: 'inside',
                      fontFamily: 'SourceHanSerifCN-Bold'
                  },
                  data: data2.map((_, index) => index === 0 ? data2[index] : '-'),
                  itemStyle: {
                      normal: {
                          color: (params) => {
                              const colors = ['#7e754c', '#a9b88d', '#93905b', '#aaa772'];
                              return colors[params.dataIndex];
                          }
                      }
                  }
              },
              {
                  name: '阶梯辅助',
                  type: 'bar',
                  stack: 'total',
                  label: {
                      show: true,
                      position: 'inside',
                      fontFamily: 'SourceHanSerifCN-Bold'
                  },
                  data: data2.map((_, index) => index === 0 ? '-' : data2[index]),
                  itemStyle: {
                      normal: {
                          color: (params) => {
                              const colors = ['#7e754c', '#a9b88d', '#93905b', '#aaa772'];
                              return colors[params.dataIndex];
                          }
                      }
                  }
              }
          ]
      };
      
      myChart2.setOption(option2);
      window.addEventListener('resize', () => myChart2.resize());

////////////////////////////////////////////////// 
//////////////////////桑基图-左////////////////////
////////////////////////////////////////////////// 
    // 选择词云图的容器元素
    const chartDom3 = document.querySelector('.right-bottom .chart-area .left');
    // 初始化 ECharts 实例
    const myChart3 = echarts.init(chartDom3)
    // 词云图的数据，每个对象包含词和对应的词频

    // 词云图的配置项
    const option3 = {
        title: {
            text: '上下求索“误入”词频图',
            left: 'left',
            top: 'top', // 添加这一行将标题放在底部
            textStyle: {
                color: '#5d1d1c',
                fontSize: 16,
                fontFamily: 'SourceHanSerifCN-Bold'
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '0%',
            top: '5%',
            containLabel: false,
            color: 'rgba(255,255,255,0.9)'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function (params) {
                if (params.dataType === 'node') {
                    return `节点: ${params.name}`;
                } else if (params.dataType === 'edge') {
                    return `出现频次: ${params.value}`;
                }
            },
            textStyle: {
                fontFamily: 'SourceHanSerifCN-Bold',

                color: '#5d1d1c', // 修改字体颜色为红色
                fontSize: 14, // 修改字体字号为16px
            }
        },
        series: {
            type: 'sankey',
            layout: 'none',
            emphasis: {
                focus: 'adjacency'
            },
            label: {
                show: true,
                fontFamily: 'SourceHanSerifCN-Bold',
                fontSize: 14,
                color: '#5d1d1c'
            },
            data: [
                { name: '误入', itemStyle: { color: '#472523' } }, // 左侧第一个色号
                { name: '错', itemStyle: { color: '#99716e' } },    // 左侧第二个色号
                { name: '迷', itemStyle: { color: '#926953' } },    // 左侧第三个色号
                { name: '惑', itemStyle: { color: '#a55741' } },    // 左侧第四个色号
                { name: '差', itemStyle: { color: '#8e523a' } },    // 左侧第五个色号
                { name: '循旧路', itemStyle: { color: '#a65a29' } },// 左侧第六个色号
                { name: '盘桓', itemStyle: { color: '#764b3a' } },  // 右侧第一个色号
                { name: '险', itemStyle: { color: '#753d30' } },    // 右侧第二个色号
                { name: '崎岖', itemStyle: { color: '#86391b' } },  // 右侧第三个色号
                { name: '绝', itemStyle: { color: '#5a1d1a' } },    // 右侧第四个色号
                { name: '犹攀', itemStyle: { color: '#562521' } }   // 右侧第五个色号
                // 右侧第六个色号#472523 因节点数量不足未使用，可根据实际需求调整
            ],
            links: [
                { source: '误入', target: '错', value: 131},
                { source: '误入', target: '迷', value: 58 },
                { source: '误入', target: '惑', value: 11 },
                { source: '误入', target: '差', value: 53 },
                { source: '误入', target: '循旧路', value: 67 },
                { source: '误入', target: '盘桓', value: 24 },
                { source: '误入', target: '险', value: 140 },
                { source: '误入', target: '崎岖', value: 40 },
                { source: '误入', target: '绝', value: 477 },
                { source: '误入', target: '犹攀', value: 35 }
            ]
        }
    };
        

    // 应用配置项到 ECharts 实例
    myChart3.setOption(option3);
    // 监听窗口大小变化事件，当窗口大小改变时，重新调整词云图的大小
    window.addEventListener('resize', function () {
        myChart3.resize();
    });
////////////////////////////////////////////////// 
//////////////////////桑基图-右////////////////////
////////////////////////////////////////////////// 
    const chartDom4 = document.querySelector('.right-bottom .chart-area .right');
    const myChart4 = echarts.init(chartDom4);
    const option4 = {
        title: {
            text: '艰辛跋涉“病难”',
            left: 'left',
            top: 'top',
            textStyle: {
                color: '#5d1d1c',
                fontSize: 16,
                fontFamily: 'SourceHanSerifCN-Bold'
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '0%',
            top: '5%',
            containLabel: false,
            color: 'rgba(255,255,255,0.9)'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function (params) {
                if (params.dataType === 'node') {
                    return `节点: ${params.name}`;
                } else if (params.dataType === 'edge') {
                    return `出现频次: ${params.value}`;
                }
            },
            textStyle: {
                fontFamily: 'SourceHanSerifCN-Bold',
                color: '#5d1d1c', // 修改字体颜色为红色
                fontSize: 14, // 修改字体字号为16px
            }
        },
        series: {
            type: 'sankey',
            layout: 'none',
            emphasis: {
                focus: 'adjacency'
            },
            label: {
                show: true,
                fontFamily: 'SourceHanSerifCN-Bold',
                fontSize: 14,
                color: '#5d1d1c'
            },
            data: [
                // 第一组色号
                { name: '病难', itemStyle: { color: '#e1d6b8' } },
                { name: '病', itemStyle: { color: '#d5c9a1' } },
                { name: '疾', itemStyle: { color: '#a9b88d' } },
                { name: '恙', itemStyle: { color: '#aaa772' } },
                { name: '疟', itemStyle: { color: '#93905b' } },
                { name: '疮', itemStyle: { color: '#7e754c' } },
                // 第二组色号
                { name: '发热', itemStyle: { color: '#c7a98f' } },
                { name: '寒热', itemStyle: { color: '#cab272' } },
                { name: '腹痛', itemStyle: { color: '#c0a771' } },
                { name: '足疾', itemStyle: { color: '#c89b64' } },
                { name: '痢', itemStyle: { color: '#a98e59' } },
                { name: '咳', itemStyle: { color: '#a58a5d' } },
                { name: '喘', itemStyle: { color: '#e1d6b8' } }, // 超出色号时可循环或补充
                { name: '肿', itemStyle: { color: '#d5c9a1' } },
                { name: '虚', itemStyle: { color: '#a9b88d' } },
                { name: '惫', itemStyle: { color: '#aaa772' } },
                { name: '困', itemStyle: { color: '#93905b' } },
                { name: '剧', itemStyle: { color: '#7e754c' } },
                { name: '药', itemStyle: { color: '#c7a98f' } },
                { name: '瘥', itemStyle: { color: '#cab272' } },
                { name: '愈', itemStyle: { color: '#c0a771' } },
                { name: '瘳', itemStyle: { color: '#c89b64' } }
            ],
            links: [
                { source: '病难', target: '病', value: 72 },
                { source: '病难', target: '疾', value: 25 },
                { source: '病难', target: '恙', value: 33 },
                { source: '病难', target: '疟', value: 10 },
                { source: '病难', target: '疮', value: 11 },
                { source: '病难', target: '发热', value: 14 },
                { source: '病难', target: '寒热', value: 15 },
                { source: '病难', target: '腹痛', value: 44 },
                { source: '病难', target: '足疾', value: 54 },
                { source: '病难', target: '痢', value: 65 },
                { source: '病难', target: '咳', value: 76 },
                { source: '病难', target: '喘', value: 81 },
                { source: '病难', target: '肿', value: 92 },
                { source: '病难', target: '虚', value: 10 },
                { source: '病难', target: '惫', value: 11 },
                { source: '病难', target: '困', value: 12 },
                { source: '病难', target: '剧', value: 13 },
                { source: '病难', target: '药', value: 14 },
                { source: '病难', target: '瘥', value: 15 },
                { source: '病难', target: '愈', value: 16 },
                { source: '病难', target: '瘳', value: 17 }
            ]
        }
    };
    
    myChart4.setOption(option4);
    window.addEventListener('resize', function () {
        myChart4.resize();
    });
////////////////////////////////////////////////// 
//////////////////////山高图////////////////////
////////////////////////////////////////////////// 
const chartDom5 = document.querySelector('.right-top .chart-area');
const myChart5 = echarts.init(chartDom5);
const option5 = {
    tooltip: {
      trigger: 'axis',
      textStyle: {
        fontFamily: 'SourceHanSerifCN-Bold', // 设置字体
        color: '#5d1d1c', // 设置字体颜色
        fontSize: 14 // 设置字体大小
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['五台山', '鸡足山', '天台山', '雁宕山', '衡山', '五老峰', '庐山', '嵩山', '黄山', '武功山', '恒山', '太华山', '武夷山'],
        axisLabel: {
          fontFamily: 'SourceHanSerifCN-Bold', // 设置字体
          color: '#5d1d1c', // 设置字体颜色
          fontSize: 14, // 设置字体大小
          rotate: 45, // 旋转标签以避免重叠
          interval: 0 // 强制显示所有标签
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          fontFamily: 'SourceHanSerifCN-Bold', // 设置字体
          color: '#5d1d1c', // 设置字体颜色
          fontSize: 14 // 设置字体大小
        }
      }
    ],
    series: [
      {
        name: '海拔高度(m)',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: { width: 0 },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#87beb8' },
            { offset: 1, color: '#518986' }
          ])
        },
        emphasis: { focus: 'series' },
        data: [3061, 3240, 1098, 1108, 1300, 1358, 1474, 1492, 1864, 1918, 2016, 2154.9, 2158]
      }
    ]
  };

myChart5.setOption(option5);
window.addEventListener('resize', function () {
    myChart5.resize();
});
});
