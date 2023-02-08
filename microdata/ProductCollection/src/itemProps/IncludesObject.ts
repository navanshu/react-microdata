import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TypeAndQuantityNodeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'includesObject',
   itemScope: true,
   itemType: 'https://schema.org/TypeAndQuantityNode',
   ...props
  },
  children
 );
};

const IncludesObject: Type & { TypeAndQuantityNode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'includesObject',
   ...props
  },
  children
 );
};

IncludesObject.TypeAndQuantityNode = TypeAndQuantityNodeType;

export { IncludesObject };
