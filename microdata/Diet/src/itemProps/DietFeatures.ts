import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'dietFeatures',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DietFeatures: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dietFeatures',
   ...props
  },
  children
 );
};

DietFeatures.Text = TextType;

export { DietFeatures };
