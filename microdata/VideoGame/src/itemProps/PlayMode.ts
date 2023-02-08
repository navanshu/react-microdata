import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GamePlayModeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'playMode',
   itemScope: true,
   itemType: 'https://schema.org/GamePlayMode',
   ...props
  },
  children
 );
};

const PlayMode: Type & { GamePlayMode: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'playMode',
   ...props
  },
  children
 );
};

PlayMode.GamePlayMode = GamePlayModeType;

export { PlayMode };
