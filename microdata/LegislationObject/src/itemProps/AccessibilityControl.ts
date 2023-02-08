import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessibilityControl',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessibilityControl: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessibilityControl',
   ...props
  },
  children
 );
};

AccessibilityControl.Text = TextType;

export { AccessibilityControl };
