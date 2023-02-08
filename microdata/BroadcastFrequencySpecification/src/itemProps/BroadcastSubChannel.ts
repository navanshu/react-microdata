import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'broadcastSubChannel',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BroadcastSubChannel: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastSubChannel',
   ...props
  },
  children
 );
};

BroadcastSubChannel.Text = TextType;

export { BroadcastSubChannel };
