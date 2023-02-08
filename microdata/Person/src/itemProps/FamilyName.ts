import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'familyName',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const FamilyName: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'familyName',
   ...props
  },
  children
 );
};

FamilyName.Text = TextType;

export { FamilyName };
