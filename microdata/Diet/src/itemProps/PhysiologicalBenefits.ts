import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'physiologicalBenefits',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PhysiologicalBenefits: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'physiologicalBenefits',
   ...props
  },
  children
 );
};

PhysiologicalBenefits.Text = TextType;

export { PhysiologicalBenefits };
