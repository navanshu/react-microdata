import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BioChemEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'isPartOfBioChemEntity',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

const IsPartOfBioChemEntity: Type & { BioChemEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'isPartOfBioChemEntity',
   ...props
  },
  children
 );
};

IsPartOfBioChemEntity.BioChemEntity = BioChemEntityType;

export { IsPartOfBioChemEntity };
