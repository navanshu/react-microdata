import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EndDate: Type & {
 Date: Type;
 DateTime: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endDate',
   ...props
  },
  children
 );
};

EndDate.Date = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endDate',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

EndDate.DateTime = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'endDate',
   itemScope: true,
   itemType: 'https://schema.org/DateTime',
   ...props
  },
  children
 );
};

export { EndDate };
