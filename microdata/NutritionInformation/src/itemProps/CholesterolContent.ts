import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'cholesterolContent',
   itemScope: true,
   itemType: 'https://schema.org/Mass',
   ...props
  },
  children
 );
};

const CholesterolContent: Type & { Mass: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'cholesterolContent',
   ...props
  },
  children
 );
};

CholesterolContent.Mass = MassType;

export { CholesterolContent };
