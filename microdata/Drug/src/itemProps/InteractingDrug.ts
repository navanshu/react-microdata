import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interactingDrug',
   itemScope: true,
   itemType: 'https://schema.org/Drug',
   ...props
  },
  children
 );
};

const InteractingDrug: Type & { Drug: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'interactingDrug',
   ...props
  },
  children
 );
};

InteractingDrug.Drug = DrugType;

export { InteractingDrug };
