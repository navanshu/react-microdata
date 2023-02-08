import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OccupationalCategory: Type & {
 CategoryCode: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'occupationalCategory',
   ...props
  },
  children
 );
};

OccupationalCategory.CategoryCode = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'occupationalCategory',
   itemScope: true,
   itemType: 'https://schema.org/CategoryCode',
   ...props
  },
  children
 );
};

export { OccupationalCategory };
