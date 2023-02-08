import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdministrativeAreaType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'validIn',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

const ValidIn: Type & { AdministrativeArea: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'validIn',
   ...props
  },
  children
 );
};

ValidIn.AdministrativeArea = AdministrativeAreaType;

export { ValidIn };
