import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const XPathTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'xpath',
   itemScope: true,
   itemType: 'https://schema.org/XPathType',
   ...props
  },
  children
 );
};

const Xpath: Type & { XPathType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'xpath',
   ...props
  },
  children
 );
};

Xpath.XPathType = XPathTypeType;

export { Xpath };
