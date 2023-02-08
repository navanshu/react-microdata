import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'increasesRiskOf',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

const IncreasesRiskOf: Type & { MedicalEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'increasesRiskOf',
   ...props
  },
  children
 );
};

IncreasesRiskOf.MedicalEntity = MedicalEntityType;

export { IncreasesRiskOf };
