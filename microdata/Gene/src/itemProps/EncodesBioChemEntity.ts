import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BioChemEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'encodesBioChemEntity',
   itemScope: true,
   itemType: 'https://schema.org/BioChemEntity',
   ...props
  },
  children
 );
};

const EncodesBioChemEntity: Type & { BioChemEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'encodesBioChemEntity',
   ...props
  },
  children
 );
};

EncodesBioChemEntity.BioChemEntity = BioChemEntityType;

export { EncodesBioChemEntity };
