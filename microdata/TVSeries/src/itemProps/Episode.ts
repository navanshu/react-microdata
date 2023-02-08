import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Episode: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'episode',
   itemScope: true,
   itemType: 'https://schema.org/Episode',
   ...props
  },
  children
 );
};

export { Episode };
