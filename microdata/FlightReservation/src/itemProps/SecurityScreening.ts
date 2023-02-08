import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'securityScreening',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const SecurityScreening: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'securityScreening',
   ...props
  },
  children
 );
};

SecurityScreening.Text = TextType;

export { SecurityScreening };
