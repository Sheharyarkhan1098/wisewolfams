import React from "react";
import { Chart } from "react-google-charts";

const data = {
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
    tooltip: {
      x: {
        format: "",
      },
    },
  },

  series: [
    {
      name: "Phones",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Laptops",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Shoes",
      data: [9, 15, 54, 22, 39, 61, 59],
    },
  ],
};

const BarChart = () => {
  return (
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={[
        ["Month", "Organizations", "Entities", "Users"],
        ["Jan", 1000, 200, 250],
        ["Fab", 1170, 460, 1325],
        ["Mar", 660, 300, 222],
        ["Apr", 1030, 540, 654],
      ]}
      options={{
        // Material design options
        chart: {
          title: "AMS Summary",
          subtitle: "Customers, Organizations, Entities and Users",
        },
      }}
      // For tests
      rootProps={{ "data-testid": "5" }}
    />
  );
};

export default BarChart;
