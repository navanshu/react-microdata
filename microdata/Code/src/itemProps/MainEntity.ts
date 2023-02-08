import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ThingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'mainEntity',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

const MainEntity: Type & { Thing: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'mainEntity',
   ...props
  },
  children
 );
};

MainEntity.Thing = ThingType;

export { MainEntity };
