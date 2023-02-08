import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'openingHours',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const OpeningHours: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'openingHours',
   ...props
  },
  children
 );
};

OpeningHours.Text = TextType;

export { OpeningHours };
