import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BroadcastServiceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'parentService',
   itemScope: true,
   itemType: 'https://schema.org/BroadcastService',
   ...props
  },
  children
 );
};

const ParentService: Type & { BroadcastService: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'parentService',
   ...props
  },
  children
 );
};

ParentService.BroadcastService = BroadcastServiceType;

export { ParentService };
