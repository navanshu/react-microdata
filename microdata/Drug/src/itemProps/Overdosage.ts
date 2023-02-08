import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'overdosage',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Overdosage: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'overdosage',
   ...props
  },
  children
 );
};

Overdosage.Text = TextType;

export { Overdosage };
