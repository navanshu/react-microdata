import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'valueName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ValueName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'valueName',
   ...props
  },
  children
 );
};

ValueName.Text = TextType;

export { ValueName };
