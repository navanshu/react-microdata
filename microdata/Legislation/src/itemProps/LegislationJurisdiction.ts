import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegislationJurisdiction: Type & {
 AdministrativeArea: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationJurisdiction',
   ...props
  },
  children
 );
};

LegislationJurisdiction.AdministrativeArea = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationJurisdiction',
   itemScope: true,
   itemType: 'https://schema.org/AdministrativeArea',
   ...props
  },
  children
 );
};

export { LegislationJurisdiction };
