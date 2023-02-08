import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'utterances',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Utterances: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'utterances',
   ...props
  },
  children
 );
};

Utterances.Text = TextType;

export { Utterances };
