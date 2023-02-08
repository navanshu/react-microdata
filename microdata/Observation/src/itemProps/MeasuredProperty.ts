import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PropertyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'measuredProperty',
   itemScope: true,
   itemType: 'https://schema.org/Property',
   ...props
  },
  children
 );
};

const MeasuredProperty: Type & { Property: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'measuredProperty',
   ...props
  },
  children
 );
};

MeasuredProperty.Property = PropertyType;

export { MeasuredProperty };
