document.addEventListener('DOMContentLoaded', function() {
    // 获取图表容器元素
    const chartDom = document.querySelector('.right-section-bottom .chart');
    
    // 初始化 ECharts 实例
    const myChart = echarts.init(chartDom);
  
    // 从知识库提取数据并排序
    // 从知识库中提取数据
    const chapterData = [
        { 篇章: '浙游日记', 情感浓度: 0.4858 },
        { 篇章: '粤西游日记', 情感浓度: 0.4405 },
        { 篇章: '游雁宕山日记', 情感浓度: 0.4117 },
        { 篇章: '游颜洞记', 情感浓度: 0.4189 },
        { 篇章: '游武彝山日记', 情感浓度: 0.4689 },
        { 篇章: '游五台山日记', 情感浓度: 0.4623 },
        { 篇章: '游天台山日记', 情感浓度: 0.4213 },
        { 篇章: '游太华山日记', 情感浓度: 0.3908 },
        { 篇章: '游太和山日记', 情感浓度: 0.4333 },
        { 篇章: '游嵩山日记', 情感浓度: 0.4424 },
        { 篇章: '游庐山日记', 情感浓度: 0.4850 },
        { 篇章: '游九鲤湖日记', 情感浓度: 0.4689 },
        { 篇章: '游黄山日记后', 情感浓度: 0.3875 },
        { 篇章: '游恒山日记', 情感浓度: 0.3810 },
        { 篇章: '游白岳山日记', 情感浓度: 0.4239 },
        { 篇章: '永昌志略', 情感浓度: 0.6768 },
        { 篇章: '随笔二则', 情感浓度: 0.2706 },
        { 篇章: '溯江纪源  江源考', 情感浓度: 0.5798 },
        { 篇章: '黔游日记', 情感浓度: 0.4193 },
        { 篇章: '盘江考', 情感浓度: 0.4854 },
        { 篇章: '闽游日记', 情感浓度: 0.4411 },
        { 篇章: '江右游日记', 情感浓度: 0.4705 },
        { 篇章: '鸡山志目', 情感浓度: 0.5200 },
        { 篇章: '鸡山志略', 情感浓度: 0.4821 },
        { 篇章: '法王缘起', 情感浓度: 0.3333 },
        { 篇章: '滇中花木记', 情感浓度: 0.4186 },
        { 篇章: '滇游日记', 情感浓度: 0.4361 },
        { 篇章: '楚游日记', 情感浓度: 0.4532 }
      ];

      // 准备数据
      const xData = chapterData.map(item => item.篇章);
      const yData = ['情感浓度']; // 单维度Y轴
      const data = chapterData.map((item, index) => [index, 0, item.情感浓度]);

      // 计算极值
      const minValue = Math.min(...chapterData.map(item => item.情感浓度));
      const maxValue = Math.max(...chapterData.map(item => item.情感浓度));

      option = {
        title: {
          text: '* 情感浓度由各个篇章中情感词数量占总词数的比例计算得出，情感词数量越多，情感浓度越高。',
          left: 'right', // 标题居中
          top: 'top', // 距离底部10px
          textStyle: {
            color: '#5d1d1c', // 修改字体颜色为红色
            fontSize: 14, // 修改字体字号为16px
            fontFamily: 'SourceHanSerifCNBold' 
          }
        },
        tooltip: {
          textStyle: {
            color: '#5d1d1c', // 修改字体颜色为红色
            fontSize: 14, // 修改字体字号为16px
            fontFamily: 'SourceHanSerifCNBold'
          }
        },
        xAxis: {
          type: 'category',
          data: xData,
          axisLabel: {
            rotate: 45,
            margin: 20,
            fontSize: 14,
            fontFamily: 'SourceHanSerifCNBold',
            color: '#5d1d1c' // 设置字体颜色为白色，或者其他你想要的颜色
          }
        },
        yAxis: {
          type: 'category',
          data: yData,
          axisLabel: {
            fontSize: 14,
            fontFamily: 'SourceHanSerifCNBold',
            color: '#5d1d1c' // 设置字体颜色为白色，或者其他你想要的颜色
          }
        },
        visualMap: {
          min: minValue,
          max: maxValue,
          calculable: true,
          realtime: false,
          inRange: {
            color: [
              '#a37f71',
              '#a65a29',
            ]
          }
        },
        series: [
          {
            name: '情感浓度',
            type: 'heatmap',
            data: data,
            emphasis: {
              itemStyle: {
                borderColor: '#333',
                borderWidth: 1
              }
            },
            progressive: 1000,
            animation: false
          }
        ],
        grid: {
          bottom: 120 // 为旋转的标签留出空间
        }
      };
  
    // 应用配置项
    myChart.setOption(option);
  
    // 响应式设计
    window.addEventListener('resize', function() {
      myChart.resize();
    });
});