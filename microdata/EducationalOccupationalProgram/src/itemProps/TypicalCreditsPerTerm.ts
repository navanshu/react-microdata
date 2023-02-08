import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TypicalCreditsPerTerm: Type & {
 Integer: Type;
 StructuredValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typicalCreditsPerTerm',
   ...props
  },
  children
 );
};

TypicalCreditsPerTerm.Integer = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'typicalCreditsPerTerm',
   itemScope: true,
   itemType: 'https://schema.org/Integer',
   ...props
  },
  children
 );
};

TypicalCreditsPerTerm.StructuredValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'typicalCreditsPerTerm',
   itemScope: true,
   itemType: 'https://schema.org/StructuredValue',
   ...props
  },
  children
 );
};

export { TypicalCreditsPerTerm };
