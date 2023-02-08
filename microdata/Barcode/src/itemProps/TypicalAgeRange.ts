import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'typicalAgeRange',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TypicalAgeRange: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'typicalAgeRange',
   ...props
  },
  children
 );
};

TypicalAgeRange.Text = TextType;

export { TypicalAgeRange };
