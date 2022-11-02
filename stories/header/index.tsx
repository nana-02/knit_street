import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';
import { RiLoginCircleFill } from 'react-icons/ri';
import cssModule from './index.module.css';

interface IProps {
  links: {
    title: string;
    url: string | UrlObject;
  }[];
}
export const Header: React.FC<IProps> = ({ links }) => {
  return (
    <div className={cssModule.header}>
      <nav className={cssModule.header__nav}>
        <div>
          <Link href="/">
            <h1>Knit K street</h1>
          </Link>
        </div>
        {links && links.length > 0}
        <ul className={cssModule.header__linkList}>
          {links.map((item, i) => (
            <li role="links" key={item.title} aria-describedby={`link-id-${i}`}>
              <Link id={`link-id-${i}`} href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div title="login">
          <RiLoginCircleFill className={cssModule.header__icon} />
        </div>
      </nav>
    </div>
  );
};
