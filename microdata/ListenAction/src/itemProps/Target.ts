import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EntryPointType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'target',
   itemScope: true,
   itemType: 'https://schema.org/EntryPoint',
   ...props
  },
  children
 );
};

const Target: Type & { EntryPoint: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'target',
   ...props
  },
  children
 );
};

Target.EntryPoint = EntryPointType;

export { Target };
