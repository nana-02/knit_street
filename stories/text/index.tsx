import React, { ReactNode } from 'react';
import cssModule from './index.module.css';

export interface IProps {
  children?: ReactNode;
  type?: 'default' | 'alert' | 'safe' | 'accent' | 'bg';
}
export const Text: React.FC<IProps> = ({ children, type = 'default' }) => {
  const classWithModifier = `text_${type}`;
  if (!children) return null;
  return (
    <>
      <span
        data-testid={"text"}
        className={`${cssModule.text} ${cssModule[classWithModifier]}`}
      >
        {children}
      </span>
    </>
  );
};
