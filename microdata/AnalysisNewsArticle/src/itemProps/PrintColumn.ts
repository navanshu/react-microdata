import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'printColumn',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PrintColumn: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'printColumn',
   ...props
  },
  children
 );
};

PrintColumn.Text = TextType;

export { PrintColumn };
