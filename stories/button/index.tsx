import React, { ReactNode } from 'react';
import cssModule from './index.module.css';

interface IProps {
  children?: ReactNode;
  type?: 'default' | 'alert' | 'safe' | 'accent' | 'bg';
  onClick?: () => void;
}
export const Button: React.FC<IProps> = ({
  children,
  type = 'default',
  onClick,
}) => {
  const classWithModifier = `button_${type}`;
  const handleOnClick = () => {
    onClick && onClick();
  };
  if (!children) return null;
  return (
    <>
      <button
        data-testid="button"
        onClick={() => {
          handleOnClick();
        }}
        className={`${cssModule.button} ${cssModule[classWithModifier]}`}
      >
        {children}
      </button>
    </>
  );
};
