import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'relatedDrug',
   itemScope: true,
   itemType: 'https://schema.org/Drug',
   ...props
  },
  children
 );
};

const RelatedDrug: Type & { Drug: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'relatedDrug',
   ...props
  },
  children
 );
};

RelatedDrug.Drug = DrugType;

export { RelatedDrug };
