import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DatePosted: Type & {
 Date: Type;
 DateTime: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'datePosted',
   ...props
  },
  children
 );
};

DatePosted.Date = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'datePosted',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

DatePosted.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'datePosted',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

export { DatePosted };
