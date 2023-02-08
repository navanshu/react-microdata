import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'maximumPhysicalAttendeeCapacity',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const MaximumPhysicalAttendeeCapacity: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'maximumPhysicalAttendeeCapacity',
   ...props
  },
  children
 );
};

MaximumPhysicalAttendeeCapacity.Integer = IntegerType;

export { MaximumPhysicalAttendeeCapacity };
