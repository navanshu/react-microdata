import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'administrationRoute',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const AdministrationRoute: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'administrationRoute',
   ...props
  },
  children
 );
};

AdministrationRoute.Text = TextType;

export { AdministrationRoute };
