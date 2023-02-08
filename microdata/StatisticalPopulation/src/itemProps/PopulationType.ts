import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ClassType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'populationType',
   itemScope: true,
   itemType: 'https://schema.org/Class',
   ...props
  },
  children
 );
};

const PopulationType: Type & { Class: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'populationType',
   ...props
  },
  children
 );
};

PopulationType.Class = ClassType;

export { PopulationType };
