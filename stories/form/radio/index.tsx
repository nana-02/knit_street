import React, { useState } from 'react';
import { IoRadioButtonOff, IoRadioButtonOnOutline } from 'react-icons/io5';
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
export const Radio: React.FC<IProps> = ({ selected, data, onClick }) => {
  const [val, setVal] = useState(selected);
  if (!data || data.length <= 0) return null;
  const handleClick = (val: string) => {
    onClick && onClick(val);
    setVal(val);
  };
  return (
    <div>
      {data.map((item) => {
        const checked = item.id === val;
        return (
          <React.Fragment key={item.id}>
            <span
              className={cssModule.radio}
              id={item.id}
              onClick={(e) => handleClick(e.currentTarget.id)}
              role="radio"
              aria-checked={checked}
            >
              {checked ? (
                <IoRadioButtonOnOutline
                  className={cssModule.radio__icon}
                  onClick={(e) => handleClick(e.currentTarget.id)}
                />
              ) : (
                <IoRadioButtonOff
                  className={cssModule.radio__icon}
                  onClick={(e) => handleClick(e.currentTarget.id)}
                />
              )}
              {item.value}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};
