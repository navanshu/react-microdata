import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'additionalVariable',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AdditionalVariable: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'additionalVariable',
   ...props
  },
  children
 );
};

AdditionalVariable.Text = TextType;

export { AdditionalVariable };
