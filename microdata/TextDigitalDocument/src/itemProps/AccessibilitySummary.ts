import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accessibilitySummary',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccessibilitySummary: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accessibilitySummary',
   ...props
  },
  children
 );
};

AccessibilitySummary.Text = TextType;

export { AccessibilitySummary };
