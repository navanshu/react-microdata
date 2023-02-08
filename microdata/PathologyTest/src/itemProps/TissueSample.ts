import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'tissueSample',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TissueSample: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'tissueSample',
   ...props
  },
  children
 );
};

TissueSample.Text = TextType;

export { TissueSample };
