import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'transcript',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Transcript: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'transcript',
   ...props
  },
  children
 );
};

Transcript.Text = TextType;

export { Transcript };
