import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'estimatesRiskOf',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

const EstimatesRiskOf: Type & { MedicalEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'estimatesRiskOf',
   ...props
  },
  children
 );
};

EstimatesRiskOf.MedicalEntity = MedicalEntityType;

export { EstimatesRiskOf };
