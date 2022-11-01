import React, { ReactNode } from 'react';
import { useWindowResize } from 'functions/useWindowResize';
import cssModule from './index.module.css';

interface IProps {
  children?: ReactNode;
  type?: 'default' | 'alert' | 'safe' | 'accent';
}
export const Card: React.FC<IProps> = ({ children, type = 'default' }) => {
  const [open] = useWindowResize();
  if (!children) return null;
  return (
    <div
      data-testid={open ? 'large' : 'small'}
      className={`${cssModule.card} ${
        open ? cssModule.card_large : cssModule.card_small
      } ${cssModule[`card_${type}`]}`}
    >
      <div className={cssModule.card__contents}>{children}</div>
    </div>
  );
};
