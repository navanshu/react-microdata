import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'browserRequirements',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BrowserRequirements: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'browserRequirements',
   ...props
  },
  children
 );
};

BrowserRequirements.Text = TextType;

export { BrowserRequirements };
