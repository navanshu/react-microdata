import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'playerType',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const PlayerType: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'playerType',
   ...props
  },
  children
 );
};

PlayerType.Text = TextType;

export { PlayerType };
