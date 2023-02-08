import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'callSign',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const CallSign: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'callSign',
   ...props
  },
  children
 );
};

CallSign.Text = TextType;

export { CallSign };
