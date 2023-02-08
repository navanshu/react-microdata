import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'carbohydrateContent',
   itemScope: true,
   itemType: 'https://schema.org/Mass',
   ...props
  },
  children
 );
};

const CarbohydrateContent: Type & { Mass: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'carbohydrateContent',
   ...props
  },
  children
 );
};

CarbohydrateContent.Mass = MassType;

export { CarbohydrateContent };
