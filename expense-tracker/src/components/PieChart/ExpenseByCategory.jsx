import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function ExpenseByCategory({ data }) {
  const colors = ["#FF9304", "#A000FF", "#ffff00"];

  const total = data.reduce((acc, current) => acc + current.value, 0);

  const percentData = data.map((item) => {
    return { ...item, value: Math.round((item.value / total) * 100) };
  });

  console.log(data, percentData);

  return (
    <>
      <PieChart width={400} height={225}>
        <Pie
          data={percentData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={0}
        >
          {percentData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip label />
        <Legend />
      </PieChart>
    </>
  );
}

export default ExpenseByCategory;
