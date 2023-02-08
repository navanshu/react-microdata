import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'gameEdition',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const GameEdition: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'gameEdition',
   ...props
  },
  children
 );
};

GameEdition.Text = TextType;

export { GameEdition };
