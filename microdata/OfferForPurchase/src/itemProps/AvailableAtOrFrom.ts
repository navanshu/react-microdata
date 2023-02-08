import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PlaceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableAtOrFrom',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

const AvailableAtOrFrom: Type & { Place: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableAtOrFrom',
   ...props
  },
  children
 );
};

AvailableAtOrFrom.Place = PlaceType;

export { AvailableAtOrFrom };
