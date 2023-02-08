import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdministrativeAreaType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'availableIn',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

const AvailableIn: Type & { AdministrativeArea: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'availableIn',
   ...props
  },
  children
 );
};

AvailableIn.AdministrativeArea = AdministrativeAreaType;

export { AvailableIn };
