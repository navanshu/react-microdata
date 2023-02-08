import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'printSection',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PrintSection: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'printSection',
   ...props
  },
  children
 );
};

PrintSection.Text = TextType;

export { PrintSection };
