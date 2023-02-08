import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BioChemEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasBioChemEntityPart',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

const HasBioChemEntityPart: Type & { BioChemEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasBioChemEntityPart',
   ...props
  },
  children
 );
};

HasBioChemEntityPart.BioChemEntity = BioChemEntityType;

export { HasBioChemEntityPart };
