import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Preparation: Type & {
 MedicalEntity: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'preparation',
   ...props
  },
  children
 );
};

Preparation.MedicalEntity = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'preparation',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

export { Preparation };
