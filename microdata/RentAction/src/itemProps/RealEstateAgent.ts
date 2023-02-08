import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RealEstateAgent: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'realEstateAgent',
   itemScope: true,
   itemType: 'https://schema.org/RealEstateAgent',
   ...props
  },
  children
 );
};

export { RealEstateAgent };
