import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'structuralClass',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const StructuralClass: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'structuralClass',
   ...props
  },
  children
 );
};

StructuralClass.Text = TextType;

export { StructuralClass };
