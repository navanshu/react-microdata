import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DrugType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'affectedBy',
   itemScope: true,
   itemType: 'https://schema.org/Drug',
   ...props
  },
  children
 );
};

const AffectedBy: Type & { Drug: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'affectedBy',
   ...props
  },
  children
 );
};

AffectedBy.Drug = DrugType;

export { AffectedBy };
