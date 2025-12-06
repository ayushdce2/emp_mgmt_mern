import React from "react";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

const LeaveChart = ({ leaveSummary }) => {
  if (!leaveSummary) return "Loading";

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Initialize month-wise arrays
  const Leaves = Array(12).fill(0);
  const Approve = Array(12).fill(0);
  const Rejected = Array(12).fill(0);

  leaveSummary.forEach(item => {
    const start = new Date(item.date_from);
    const end = new Date(item.date_to);

    // Loop over each day of the leave
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const month = d.getMonth(); // 0–11

      Leaves[month] += 1;

      if (item.leave_status === "approve") Approve[month] += 1;
      if (item.leave_status === "reject") Rejected[month] += 1;

      // Deduction[month] = Approve[month] + Rejected[month];

      // console.log(Approve,"<=======Approve")
    }
  });

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BarChart
        series={[
          { data: Leaves, label: "Leaves Taken", id: "LeavesId", color: "#748eb8" },
          { data: Approve, label: "Approve", id: "ApproveId", color: "#7c7d94" },
          { data: Rejected, label: "Leaves Rejected", id: "RejectedId", color: "#364153" }
        ]}
        xAxis={[{ data: monthNames }]}
        yAxis={[{ width: 50 }]}
      />
    </Box>
  );
};

export default LeaveChart;
