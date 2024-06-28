import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
];

const StockChart = () => {
  const [activeLable, setActiveLable] = useState("1 Day");

  const series = [
    {
      data: [
        [1716991362944, 67822.4684775114],
        [1716995000694, 67568.4948639766],
        [1716998771914, 67215.4160403953],
        [1717002546466, 67388.6394772985],
        [1717005842190, 67591.7037476445],
        [1717009307197, 67307.6101200267],
        [1717013174093, 67285.3970306508],
        [1717016868976, 67425.3410343289],
        [1717020453718, 67598.3114873852],
        [1717024102881, 67620.482205205],
        [1717027468334, 67567.0119848816],
        [1717030922639, 67490.754917059],
        [1717034864133, 67752.5299837806],
        [1717038111829, 67866.1648094451],
        [1717041837940, 68026.0106636811],
        [1717045245047, 68080.8423773839],
        [1717048960739, 68064.3400908207],
        [1717052885353, 67757.8268706878],
        [1717056023153, 67585.213837228],
        [1717059806172, 67766.0635776382],
        [1717063614184, 67673.710766284],
        [1717067285498, 67904.3851164184],
        [1717070858999, 67758.5382341366],
        [1717074124103, 68077.634778436],
        [1717077790520, 68725.0645257881],
        [1717081285387, 68348.1376924471],
        [1717085129440, 68518.711561572],
        [1717088601501, 68679.7528369264],
        [1717092059414, 69438.0355685932],
        [1717095992785, 69363.7261078195],
        [1717099587964, 68375.9990908135],
        [1717103335264, 68485.1708188859],
        [1717106687273, 68386.5058467766],
        [1717110199221, 68281.3042587344],
        [1717113914540, 68363.4593447867],
        [1717117234168, 68392.9374351516],
        [1717121234034, 68444.2981962148],
        [1717124793330, 68507.3752434982],
        [1717128362154, 68577.9607099005],
        [1717131827395, 68495.2967936185],
        [1717135427482, 68442.1431186174],
        [1717138925210, 68222.0470639806],
        [1717142659108, 68170.5531432328],
        [1717146040950, 68134.6386699326],
        [1717149713643, 67896.3209571091],
        [1717153743967, 68230.2367633729],
        [1717156906972, 68325.8096357673],
        [1717160449474, 68685.0996010641],
        [1717164333864, 67961.8475580069],
        [1717167605278, 67384.2746405852],
        [1717171510751, 67120.9363231481],
        [1717174949434, 67145.5252206695],
        [1717178773737, 67242.5438693529],
        [1717182396011, 67316.3104154782],
        [1717185803699, 67625.7265223082],
        [1717189266318, 67633.3192941154],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLable = (value) => {
    setActiveLable(value);
  };

  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.lable ? "" : "outline"}
            onClick={() => handleActiveLable(item.lable)}
            key={item.lable}
          >
            {item.lable}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series}
          height={350}
          type="area"
        />
      </div>
    </div>
  );
};

export default StockChart;
