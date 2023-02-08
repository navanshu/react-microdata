import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FunctionalClass: Type & {
 MedicalEntity: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'functionalClass',
   ...props
  },
  children
 );
};

FunctionalClass.MedicalEntity = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'functionalClass',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

export { FunctionalClass };
