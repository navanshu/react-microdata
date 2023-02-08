import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegalValueLevelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationLegalValue',
   itemScope: true,
   itemType: 'https://schema.org/LegalValueLevel',
   ...props
  },
  children
 );
};

const LegislationLegalValue: Type & { LegalValueLevel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationLegalValue',
   ...props
  },
  children
 );
};

LegislationLegalValue.LegalValueLevel = LegalValueLevelType;

export { LegislationLegalValue };
