import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BroadcastServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'publishedOn',
   itemScope: true,
   itemType: 'https://schema.org/BroadcastService',
   ...props
  },
  children
 );
};

const PublishedOn: Type & { BroadcastService: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'publishedOn',
   ...props
  },
  children
 );
};

PublishedOn.BroadcastService = BroadcastServiceType;

export { PublishedOn };
