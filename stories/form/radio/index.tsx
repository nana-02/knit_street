import React, { useState } from 'react';
import cssModule from './index.module.css';

interface IProps {
  name?: string;
  selected?: string;
  data?: {
    id: string;
    value: string;
  }[];
  onClick?: (val: string) => void;
}
export const Radio: React.FC<IProps> = ({ name, selected, data, onClick }) => {
  const [val, setVal] = useState(selected);
  if (!data || data.length <= 0) return null;
  const handleClick = (val: string) => {
    onClick && onClick(val);
    setVal(val);
  };
  return (
    <div className={cssModule.radio}>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <input
              name={name}
              onChange={(e) => handleClick(e.currentTarget.id)}
              type="radio"
              id={item.id}
              checked={item.id === val}
            ></input>
            <label htmlFor={item.id} className={cssModule.radio__button}>
              {item.value}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};
