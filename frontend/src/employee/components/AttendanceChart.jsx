import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const AttendanceChart = () => {
    const settings = {
  width: 200,
  height: 200,
  value: 60,
};
  return (
    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 15,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#364153',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
      text={"Working Hours"}
    />
  )
}

export default AttendanceChart