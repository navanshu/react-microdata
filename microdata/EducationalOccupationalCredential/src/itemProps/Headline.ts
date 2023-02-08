import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'headline',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Headline: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'headline',
   ...props
  },
  children
 );
};

Headline.Text = TextType;

export { Headline };
