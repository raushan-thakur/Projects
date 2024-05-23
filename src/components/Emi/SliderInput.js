import React from "react";

export function numberWithCommas(x) {
    if (x) return `₹ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  }

function SliderInput({
  title,
  state,
  min,
  max,
  onChange,
  labelMin,
  labelMax,
  underlineTitle
}) {
  return (
    <React.Fragment>
      <span className="font-bold w-full">{title}</span>
      {state > 0 && (
        <span className="font-bold underline" >
          {underlineTitle}
        </span>
      )}
      <div>
        <input 
          type="range"
          min={min}
          max={max}
          className="w-[100%]"
          value={state}
          onChange={onChange}
        />
        <div className="flex justify-between">
          <label>{labelMin ?? numberWithCommas(min)}</label>
          <b>{numberWithCommas(state)}</b>
          <label>{labelMax ?? numberWithCommas(max)}</label>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SliderInput;