import React, { useState } from 'react';
import cssModule from './index.module.css';

interface IProps {
  value?: string;
  id?: string;
  labelText?: string;
  placeholder?: string;
  alert?: string[];
  onChange?: (val: string) => void;
}
export const Input: React.FC<IProps> = ({
  value = '',
  id,
  labelText,
  placeholder,
  alert,
  onChange,
}) => {
  const [val, setVal] = useState<string | undefined>(value);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
    onChange && onChange(e.currentTarget.value);
  };
  return (
    <>
      {labelText && (
        <>
          <label htmlFor={id} className={cssModule.input__label}>
            {labelText}
          </label>
          <br />
          {alert && alert?.length > 0 && (
            <ul className={cssModule.input__list}>
              {alert.map((item, i) => {
                return (
                  <li
                    role="alertdialog"
                    aria-describedby={`notification-id-${i}`}
                    className={cssModule.input__alert}
                    key={i}
                  >
                    <span id={`notification-id-${i}`}>※ {item}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
      <input
        className={cssModule.input}
        type="text"
        id={id}
        value={val}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
      />
    </>
  );
};
