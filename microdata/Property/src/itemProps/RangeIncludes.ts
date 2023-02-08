import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ClassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'rangeIncludes',
   itemScope: true,
   itemType: 'https://schema.org/Class',
   ...props
  },
  children
 );
};

const RangeIncludes: Type & { Class: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'rangeIncludes',
   ...props
  },
  children
 );
};

RangeIncludes.Class = ClassType;

export { RangeIncludes };
