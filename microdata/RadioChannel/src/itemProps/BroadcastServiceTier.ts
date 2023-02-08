import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'broadcastServiceTier',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const BroadcastServiceTier: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'broadcastServiceTier',
   ...props
  },
  children
 );
};

BroadcastServiceTier.Text = TextType;

export { BroadcastServiceTier };
