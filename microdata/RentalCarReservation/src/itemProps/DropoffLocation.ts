import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PlaceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dropoffLocation',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

const DropoffLocation: Type & { Place: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dropoffLocation',
   ...props
  },
  children
 );
};

DropoffLocation.Place = PlaceType;

export { DropoffLocation };
