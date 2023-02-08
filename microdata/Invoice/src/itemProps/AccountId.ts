import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'accountId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AccountId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accountId',
   ...props
  },
  children
 );
};

AccountId.Text = TextType;

export { AccountId };
