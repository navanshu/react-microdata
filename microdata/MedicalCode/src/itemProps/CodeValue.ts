import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'codeValue',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CodeValue: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'codeValue',
   ...props
  },
  children
 );
};

CodeValue.Text = TextType;

export { CodeValue };
