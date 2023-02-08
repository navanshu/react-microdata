import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessibilityFeature',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessibilityFeature: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessibilityFeature',
   ...props
  },
  children
 );
};

AccessibilityFeature.Text = TextType;

export { AccessibilityFeature };
