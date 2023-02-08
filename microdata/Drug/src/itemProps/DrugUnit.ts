import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'drugUnit',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DrugUnit: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'drugUnit',
   ...props
  },
  children
 );
};

DrugUnit.Text = TextType;

export { DrugUnit };
