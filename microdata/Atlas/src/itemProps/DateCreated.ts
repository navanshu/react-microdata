import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateCreated: Type & {
 Date: Type;
 DateTime: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dateCreated',
   ...props
  },
  children
 );
};

DateCreated.Date = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dateCreated',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

DateCreated.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dateCreated',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

export { DateCreated };
