import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GameServerStatusType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'serverStatus',
   itemScope: true,
   itemType: 'https://schema.org/GameServerStatus',
   ...props
  },
  children
 );
};

const ServerStatus: Type & { GameServerStatus: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'serverStatus',
   ...props
  },
  children
 );
};

ServerStatus.GameServerStatus = GameServerStatusType;

export { ServerStatus };
