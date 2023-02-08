import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BioChemEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bioChemSimilarity',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

const BioChemSimilarity: Type & { BioChemEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'bioChemSimilarity',
   ...props
  },
  children
 );
};

BioChemSimilarity.BioChemEntity = BioChemEntityType;

export { BioChemSimilarity };
