import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'unsaturatedFatContent',
   itemScope: true,
   itemType: 'https://schema.org/Mass',
   ...props
  },
  children
 );
};

const UnsaturatedFatContent: Type & { Mass: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'unsaturatedFatContent',
   ...props
  },
  children
 );
};

UnsaturatedFatContent.Mass = MassType;

export { UnsaturatedFatContent };
