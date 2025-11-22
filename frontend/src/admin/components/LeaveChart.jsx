import React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

const LeaveChart = () => {
const Leaves = [5, 1, 2, 0, 7, 0, 0, 0, 0, 0, 2, 0];
const Absent = [2, 0, 0, 0, 2, 1, 1, 2, 0, 0, 0, 2];
const WorkFromHome = [4, 3, 4, 1, 5, 0, 3, 2, 0, 0, 0, 2];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mar',
  'Apr',
  'May',
  'jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  "Nov",
  "Dec"
];
  return (
    <Box sx={{ width: '100%', height: "100%" }}>
      <BarChart
        series={[
          { data: Leaves, label: 'Leaves', id: 'LeavesId',color:"#748eb8" },
          { data: Absent, label: 'Absent', id: 'AbsentId',color:"#7c7d94" },
          { data: WorkFromHome, label: 'WorkFromHome', id: 'WorkFromHomeId',color:"#364153" },
        ]}
        xAxis={[{ data: xLabels }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  )
}

export default LeaveChart