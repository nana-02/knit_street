import React, { useState } from 'react';
import {
  MdOutlineCheckBoxOutlineBlank as Outline,
  MdOutlineCheckBox as Checked,
} from 'react-icons/md';
import cssModule from './index.module.css';

interface IProps {
  selected?: string[];
  data?: {
    id: string;
    value: string;
  }[];
  onClick?: (items: string[]) => void;
}

export const Checkbox: React.FC<IProps> = ({ selected, data, onClick }) => {
  const [items, setItems] = useState<string[]>(selected ? selected : []);
  /**
   * 含まれていたら取り除いたリスト
   * 含まれていなかったらリストに追加
   * @param val
   */
  const handleSetItems = (val: string) => {
    let copy: IProps['selected'];
    if (items.includes(val)) {
      copy = items.filter((id) => id !== val);
    } else {
      copy = items.slice();
      copy.push(val);
    }
    setItems(copy);
    onClick && onClick(copy);
  };
  if (!data || data.length <= 0) return null;
  return (
    <>
      {data.map((item) => {
        const checked = items.includes(item.id);
        return (
          <div
            id={item.id}
            key={item.id}
            role="checkbox"
            aria-checked={checked}
            onClick={(e) => handleSetItems(e.currentTarget.id)}
            className={cssModule.checkbox}
          >
            {checked ? (
              <Checked className={cssModule.checkbox__icon} />
            ) : (
              <Outline className={cssModule.checkbox__icon} />
            )}
            {item.value}
          </div>
        );
      })}
    </>
  );
};
