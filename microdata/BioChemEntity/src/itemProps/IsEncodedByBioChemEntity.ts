import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeneType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isEncodedByBioChemEntity',
   itemScope: true,
   itemType: 'https://schema.org/Gene',
   ...props
  },
  children
 );
};

const IsEncodedByBioChemEntity: Type & { Gene: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isEncodedByBioChemEntity',
   ...props
  },
  children
 );
};

IsEncodedByBioChemEntity.Gene = GeneType;

export { IsEncodedByBioChemEntity };
