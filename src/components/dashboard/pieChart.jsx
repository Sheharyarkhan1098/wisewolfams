import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Customers", "Organizations", "Entities", "Users"],
  datasets: [
    {
      data: [300, 50, 100, 126],
      backgroundColor: ["#de6718", "#1c3991", "#15853a", "#ec002e"],
      hoverBackgroundColor: ["#de6718", "#1c3991", "#15853a", "#ff1744"],
    },
  ],
};

const PieChart = () => {
  return <Pie dataKey="value" data={data} />;
};

export default PieChart;
