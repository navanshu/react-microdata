import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'departurePlatform',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const DeparturePlatform: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departurePlatform',
   ...props
  },
  children
 );
};

DeparturePlatform.Text = TextType;

export { DeparturePlatform };
