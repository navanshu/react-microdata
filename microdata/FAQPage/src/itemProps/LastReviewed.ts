import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'lastReviewed',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

const LastReviewed: Type & { Date: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'lastReviewed',
   ...props
  },
  children
 );
};

LastReviewed.Date = DateType;

export { LastReviewed };
