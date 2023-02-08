import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'broadcastTimezone',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BroadcastTimezone: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastTimezone',
   ...props
  },
  children
 );
};

BroadcastTimezone.Text = TextType;

export { BroadcastTimezone };
