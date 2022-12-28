import { View } from "@tarojs/components";

import Echarts, { EChartOption } from "taro-react-echarts";
import echarts from "../../assets/js/echarts";

const Index = () => {
  const option: EChartOption = {
    legend: {
      top: 50,
      left: "center",
      z: 100
    },
    tooltip: {
      trigger: "axis",
      show: true,
      confine: true
    },
    xAxis: {
      type: "category",
      data: ["4-12", "5-23", "5-4", "5-5", "6-15", "7-7", "9-11"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [250, 130, 324, 318, 135, 147, 260],
        type: "line"
      }
    ]
  };
  return (
    <View>
      首页
      <Echarts echarts={echarts} option={option} />
    </View>
  );
};

export default Index;
