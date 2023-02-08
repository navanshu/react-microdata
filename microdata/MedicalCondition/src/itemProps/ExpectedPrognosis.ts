import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'expectedPrognosis',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ExpectedPrognosis: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'expectedPrognosis',
   ...props
  },
  children
 );
};

ExpectedPrognosis.Text = TextType;

export { ExpectedPrognosis };
