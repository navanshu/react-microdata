import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'safetyConsideration',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SafetyConsideration: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'safetyConsideration',
   ...props
  },
  children
 );
};

SafetyConsideration.Text = TextType;

export { SafetyConsideration };
