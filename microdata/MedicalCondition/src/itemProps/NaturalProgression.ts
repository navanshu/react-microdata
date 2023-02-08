import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'naturalProgression',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const NaturalProgression: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'naturalProgression',
   ...props
  },
  children
 );
};

NaturalProgression.Text = TextType;

export { NaturalProgression };
