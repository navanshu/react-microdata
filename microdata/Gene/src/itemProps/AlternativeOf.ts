import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GeneType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'alternativeOf',
   itemScope: true,
   itemType: 'https://schema.org/Gene',
   ...props
  },
  children
 );
};

const AlternativeOf: Type & { Gene: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'alternativeOf',
   ...props
  },
  children
 );
};

AlternativeOf.Gene = GeneType;

export { AlternativeOf };
