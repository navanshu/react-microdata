import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'unitText',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const UnitText: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'unitText',
   ...props
  },
  children
 );
};

UnitText.Text = TextType;

export { UnitText };
