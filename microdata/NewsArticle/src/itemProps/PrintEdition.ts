import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'printEdition',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PrintEdition: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'printEdition',
   ...props
  },
  children
 );
};

PrintEdition.Text = TextType;

export { PrintEdition };
