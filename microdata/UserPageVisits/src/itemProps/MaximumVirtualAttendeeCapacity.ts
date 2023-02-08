import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'maximumVirtualAttendeeCapacity',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const MaximumVirtualAttendeeCapacity: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'maximumVirtualAttendeeCapacity',
   ...props
  },
  children
 );
};

MaximumVirtualAttendeeCapacity.Integer = IntegerType;

export { MaximumVirtualAttendeeCapacity };
