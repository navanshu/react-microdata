import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BroadcastChannelType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasBroadcastChannel',
   itemScope: true,
   itemType: 'https://schema.org/BroadcastChannel',
   ...props
  },
  children
 );
};

const HasBroadcastChannel: Type & { BroadcastChannel: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasBroadcastChannel',
   ...props
  },
  children
 );
};

HasBroadcastChannel.BroadcastChannel = BroadcastChannelType;

export { HasBroadcastChannel };
