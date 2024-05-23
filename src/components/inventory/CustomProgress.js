import React from 'react';
import { Progress } from 'antd';

const CustomProgress = ({ percent }) => {
  return (
    <Progress
      type="circle"
      percent={percent}
      format={() => `${64}% `}
      strokeColor={{
        '0%': '#2b7805',
        '50%': '#2b7805',
        '51%': '#8eb6e7',
        '75%': '#8eb6e7',
        '76%': '#faad14',
        '90%': '#faad14',
        '91%': '#515355',
        '100%': '#515355',
      }}
      strokeWidth={15}
    />
  );
};

export default CustomProgress;
