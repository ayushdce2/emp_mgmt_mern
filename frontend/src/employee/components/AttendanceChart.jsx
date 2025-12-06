import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const AttendanceChart = ({totalWorkingHours}) => {
  
const HourseWorked = totalWorkingHours.split("hr")[0];
  const settings = {
  width: 200,
  height: 200,
  value: (HourseWorked/8)*100,
  
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
      text={"Worked for \n "+totalWorkingHours}
    />
  )
}

export default AttendanceChart