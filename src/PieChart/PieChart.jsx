import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Mobiles' },
            { id: 1, value: 15, label: 'Groceries' },
            { id: 2, value: 20, label: 'Laptops' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}