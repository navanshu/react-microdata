import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Contraindication: Type & {
 MedicalContraindication: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'contraindication',
   ...props
  },
  children
 );
};

Contraindication.MedicalContraindication = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'contraindication',
   itemScope: true,
   itemType: 'https://schema.org/MedicalContraindication',
   ...props
  },
  children
 );
};

export { Contraindication };
