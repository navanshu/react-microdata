import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicineSystem: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'medicineSystem',
   itemScope: true,
   itemType: 'https://schema.org/MedicineSystem',
   ...props
  },
  children
 );
};

export { MedicineSystem };
