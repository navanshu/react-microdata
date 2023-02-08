import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SeasonNumber: Type & {
 Integer: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seasonNumber',
   ...props
  },
  children
 );
};

SeasonNumber.Integer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seasonNumber',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

export { SeasonNumber };
