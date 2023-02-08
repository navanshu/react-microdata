import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EnergyType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'calories',
   itemScope: true,
   itemType: 'https://schema.org/Energy',
   ...props
  },
  children
 );
};

const Calories: Type & { Energy: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'calories',
   ...props
  },
  children
 );
};

Calories.Energy = EnergyType;

export { Calories };
