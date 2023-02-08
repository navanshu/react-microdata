import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LegalForceStatusType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'legislationLegalForce',
   itemScope: true,
   itemType: 'https://schema.org/LegalForceStatus',
   ...props
  },
  children
 );
};

const LegislationLegalForce: Type & { LegalForceStatus: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'legislationLegalForce',
   ...props
  },
  children
 );
};

LegislationLegalForce.LegalForceStatus = LegalForceStatusType;

export { LegislationLegalForce };
