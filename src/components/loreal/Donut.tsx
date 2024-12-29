"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = { value: number, backgroundClass: string, color: string };

export default function Donuts({ value, backgroundClass, color }: Props) {
  const data = [
    {
      label: "Main Value",
      value: value,
      color: color,
      cutout: "60%",
    },
    {
      label: "Remaining",
      value: 100 - value,
      color: "transparent",
      cutout: "50%",
    },
  ];

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "75%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  const finalData = {
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        hoverBackgroundColor: data.map((item) => item.color),
        hoverBorderColor: data.map((item) => item.color),
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <div className="relative w-full">
      <Doughnut className={`${backgroundClass}`} color={color} data={finalData} options={options} />
    </div>
  );
}