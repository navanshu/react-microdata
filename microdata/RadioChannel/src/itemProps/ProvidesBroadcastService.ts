import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BroadcastServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'providesBroadcastService',
   itemScope: true,
   itemType: 'https://schema.org/BroadcastService',
   ...props
  },
  children
 );
};

const ProvidesBroadcastService: Type & { BroadcastService: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'providesBroadcastService',
   ...props
  },
  children
 );
};

ProvidesBroadcastService.BroadcastService = BroadcastServiceType;

export { ProvidesBroadcastService };
