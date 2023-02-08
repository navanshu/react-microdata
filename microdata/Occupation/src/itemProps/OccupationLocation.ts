import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AdministrativeAreaType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'occupationLocation',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

const OccupationLocation: Type & { AdministrativeArea: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'occupationLocation',
   ...props
  },
  children
 );
};

OccupationLocation.AdministrativeArea = AdministrativeAreaType;

export { OccupationLocation };
