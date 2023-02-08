import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessibilityHazard',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessibilityHazard: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessibilityHazard',
   ...props
  },
  children
 );
};

AccessibilityHazard.Text = TextType;

export { AccessibilityHazard };
