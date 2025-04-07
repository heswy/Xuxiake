document.addEventListener('DOMContentLoaded', function () {
    const chartDom = document.querySelector('.middle-section .map-chart');
    const myChart = echarts.init(chartDom);

    // 定义部分省份的数据，使用全称
    const provinceData = [
        { name: '浙江省', value: 22 },
        { name: '广西壮族自治区', value: 13 },
        { name: '云南省', value: 9 },
        { name: '安徽省', value: 8 },
        { name: '江西省', value: 6 },
        { name: '湖南省', value: 4 },
        { name: '贵州省', value: 4 },
        { name: '山西省', value: 2 },
        { name: '福建省', value: 1 },
        { name: '河南省', value: 1 },
        { name: '陕西省', value: 1 },
        { name: '湖北省', value: 1 }
    ];


    const option = {
        title: {
            text: '*地图数据来自E-charts官网，符合公开地图内容表示规范。',
            left: 'right',
            top: 'bottom',
            textStyle: {
                fontSize: 10,
                fontWeight: 'bold',
                color: '#5d1d1c',
                fontFamily: 'SourceHanSerifCN-Bold',
            }
        },
        tooltip: {
            trigger: 'item',
            textStyle: {
                color: '#5d1d1c', // 修改字体颜色为红色
                fontSize: 14, // 修改字体字号为16px
                fontFamily: 'SourceHanSerifCN-Bold',
            },
        },
        visualMap: {
            min: 1,  // 修改为1，排除0值
            max: 22,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'],
            calculable: true,
            inRange: {
                color: ['#87beb8', '#246b67']
            },
        },
        series: [
            {
                name: '游览该省山的数量',
                type: 'map',
                map: 'china',
                data: provinceData,
                itemStyle: {
                    normal: {
                        areaColor: "#DFCFB4"  // 保留原有默认颜色
                    },
                    emphasis: {
                        areaColor: '#b4e3cf'
                    }
                },
                select: {
                    itemStyle: {
                        areaColor: '#DFCFB4'
                    }
                },
                roam: true
            },
        ]
    };

    myChart.setOption(option);
});
    