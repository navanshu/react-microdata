import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalEntityType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seriousAdverseOutcome',
   itemScope: true,
   itemType: 'https://schema.org/MedicalEntity',
   ...props
  },
  children
 );
};

const SeriousAdverseOutcome: Type & { MedicalEntity: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'seriousAdverseOutcome',
   ...props
  },
  children
 );
};

SeriousAdverseOutcome.MedicalEntity = MedicalEntityType;

export { SeriousAdverseOutcome };
