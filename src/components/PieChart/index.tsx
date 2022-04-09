import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Container } from "./styles";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
}

export function PieChart({ data }: PieChartProps) {
  return (
    <Container>
      <Pie data={data} />
    </Container>
  );
}
