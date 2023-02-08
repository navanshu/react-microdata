import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'transFatContent',
   itemScope: true,
   itemType: 'https://schema.org/Mass',
   ...props
  },
  children
 );
};

const TransFatContent: Type & { Mass: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'transFatContent',
   ...props
  },
  children
 );
};

TransFatContent.Mass = MassType;

export { TransFatContent };
