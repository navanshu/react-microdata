import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessibilityAPI',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessibilityAPI: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessibilityAPI',
   ...props
  },
  children
 );
};

AccessibilityAPI.Text = TextType;

export { AccessibilityAPI };
