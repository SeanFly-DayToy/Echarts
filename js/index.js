// 格式： 当前时间：2020年3月17-0时54分14秒
let t = null;
t = setTimeout(time, 1000);//開始运行
function time() {
  clearTimeout(t);//清除定时器
  dt = new Date();
  let y = dt.getFullYear();
  let mt = dt.getMonth() + 1;
  let day = dt.getDate();
  let h = dt.getHours();//获取时
  let m = dt.getMinutes();//获取分
  let s = dt.getSeconds();//获取秒
  document.querySelector(".showTime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
  t = setTimeout(time, 1000); //设定定时器，循环运行     
}


//柱状图模型1
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));

  //2、指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        //坐标轴提示器，坐标轴触发有效
        type: 'shadow'//默认认为直线，可选为'line'/'shadow'
      }
    },
    //修改图表大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true,
          show: false,  //不显示x轴的样式
        },

        //修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255, 255, 255, .6)",
          fontSize: 8,
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        //修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255, 255, 255, .6)",
          fontSize: 12
        },
        // y轴线条改成了2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          //修改柱子圆角
          barBorderRadius: 4
        }
      }
    ]
  };

  //3、把配置项给实例对象
  myChart.setOption(option);

  //4、让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


//柱状图模型2
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  //声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

  //2、指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: "5%",
      bottom: "10%",
      containLabel: true
    },
    //不显示x轴信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        inverse: true,

        //不显示y轴线条
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        //把刻度里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        //不显示y轴线条
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        //把刻度里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        //柱子之间的距离
        itemStyle: {
          barBorderRadius: 20,
          //此时的color可以修改柱子的颜色
          color: function (params) {
            // params传进来的是柱子对象
            // dataIndex是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        //柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,

        //显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // { c }会自动解析为数据 data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        data: [100, 100, 100, 100, 100],
        yAxisIndex: 1,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
      }
    ]
  };

  //3、把配置项给实例对象
  myChart.setOption(option);

  //4、让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

//折线图模型1
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));

  //年份数据
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  //2、指定配置项和数据
  var option = {
    // 通过这个color修改两线条颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // 如果series对象有name值，则legend可以不用写data
      textStyle: {
        color: '#4c9bfd' // 修改图例文字颜色
      },
      right: '10%' // 距离右边10%，必须加引号
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      borderColor: '#012f4a',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        data: yearData[0].data[0],
        type: 'line',
        smooth: true
      },
      {
        name: '新增游客',
        data: yearData[0].data[1],
        type: 'line',
        smooth: true
      }
    ]
  };

  //3、把配置项给实例对象
  myChart.setOption(option);

  //4、让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  });

  //5、点击切换效果
  $('.line h2').on('click', 'a', function () {
    // alert(1);
    // console.log($(this).index());  //$(this).index()年份索引
    // 点击a之后 根据当前a的索引号 找到相对应的yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];

    //需要重新渲染
    myChart.setOption(option);
  })
})();

//折线图模型2
(function () {
  //1、实例化对象
  var myChart = echarts.init(document.querySelector(".line2 .chart"));

  //2、指定配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        //第一条 线是圆滑
        smooth: true,

        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },

        // 填充区域
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },

        name: 'Email',
        type: 'line',
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        smooth: true,
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
    ]
  };

  //3、把配置项给实例对象
  myChart.setOption(option);

  //4、让图表跟随屏幕自动的去适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

