import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'codingSystem',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CodingSystem: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'codingSystem',
   ...props
  },
  children
 );
};

CodingSystem.Text = TextType;

export { CodingSystem };
