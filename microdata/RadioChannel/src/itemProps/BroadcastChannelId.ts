import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'broadcastChannelId',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BroadcastChannelId: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastChannelId',
   ...props
  },
  children
 );
};

BroadcastChannelId.Text = TextType;

export { BroadcastChannelId };
