import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const IntegerType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'remainingAttendeeCapacity',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

const RemainingAttendeeCapacity: Type & { Integer: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'remainingAttendeeCapacity',
   ...props
  },
  children
 );
};

RemainingAttendeeCapacity.Integer = IntegerType;

export { RemainingAttendeeCapacity };
