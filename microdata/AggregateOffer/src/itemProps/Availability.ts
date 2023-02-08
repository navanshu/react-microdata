import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemAvailabilityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availability',
   itemScope: true,
   itemType: 'https://schema.org/ItemAvailability',
   ...props
  },
  children
 );
};

const Availability: Type & { ItemAvailability: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availability',
   ...props
  },
  children
 );
};

Availability.ItemAvailability = ItemAvailabilityType;

export { Availability };
