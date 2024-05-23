import React from 'react';
import { DatePicker, Space } from 'antd';

const DateInput = ({text, setDate }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker placeholder={text} onChange={onChange} />
    </Space>
  );
};

export default DateInput;
