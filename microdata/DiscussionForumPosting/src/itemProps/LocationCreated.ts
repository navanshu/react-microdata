import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PlaceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'locationCreated',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

const LocationCreated: Type & { Place: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'locationCreated',
   ...props
  },
  children
 );
};

LocationCreated.Place = PlaceType;

export { LocationCreated };
