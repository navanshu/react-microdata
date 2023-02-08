import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'jobBenefits',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const JobBenefits: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'jobBenefits',
   ...props
  },
  children
 );
};

JobBenefits.Text = TextType;

export { JobBenefits };
