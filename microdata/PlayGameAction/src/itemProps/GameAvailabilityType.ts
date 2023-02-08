import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const GameAvailabilityType: Type & {
 GameAvailabilityEnumeration: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'gameAvailabilityType',
   ...props
  },
  children
 );
};

GameAvailabilityType.GameAvailabilityEnumeration = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'gameAvailabilityType',
   itemScope: true,
   itemType: 'https://schema.org/GameAvailabilityEnumeration',
   ...props
  },
  children
 );
};

export { GameAvailabilityType };
