import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'membershipNumber',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MembershipNumber: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'membershipNumber',
   ...props
  },
  children
 );
};

MembershipNumber.Text = TextType;

export { MembershipNumber };
