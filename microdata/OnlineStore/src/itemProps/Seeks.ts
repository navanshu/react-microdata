import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DemandType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seeks',
   itemScope: true,
   itemType: 'https://schema.org/Demand',
   ...props
  },
  children
 );
};

const Seeks: Type & { Demand: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seeks',
   ...props
  },
  children
 );
};

Seeks.Demand = DemandType;

export { Seeks };
