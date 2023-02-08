import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'fiberContent',
   itemScope: true,
   itemType: 'https://schema.org/Mass',
   ...props
  },
  children
 );
};

const FiberContent: Type & { Mass: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'fiberContent',
   ...props
  },
  children
 );
};

FiberContent.Mass = MassType;

export { FiberContent };
