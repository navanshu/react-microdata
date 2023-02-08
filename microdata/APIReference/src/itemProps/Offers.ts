import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Offers: Type & {
 Offer: Type;
 Demand: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'offers',
   ...props
  },
  children
 );
};

Offers.Offer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'offers',
   itemScope: true,
   itemType: 'https://schema.org/Offer',
   ...props
  },
  children
 );
};

Offers.Demand = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'offers',
   itemScope: true,
   itemType: 'https://schema.org/Demand',
   ...props
  },
  children
 );
};

export { Offers };
