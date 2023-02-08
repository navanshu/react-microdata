import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalConditionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'relatedCondition',
   itemScope: true,
   itemType: 'https://schema.org/MedicalCondition',
   ...props
  },
  children
 );
};

const RelatedCondition: Type & { MedicalCondition: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'relatedCondition',
   ...props
  },
  children
 );
};

RelatedCondition.MedicalCondition = MedicalConditionType;

export { RelatedCondition };
