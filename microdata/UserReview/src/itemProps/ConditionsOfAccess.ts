import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'conditionsOfAccess',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ConditionsOfAccess: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'conditionsOfAccess',
   ...props
  },
  children
 );
};

ConditionsOfAccess.Text = TextType;

export { ConditionsOfAccess };
