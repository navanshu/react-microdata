import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BoatTerminalType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalBoatTerminal',
   itemScope: true,
   itemType: 'https://schema.org/BoatTerminal',
   ...props
  },
  children
 );
};

const ArrivalBoatTerminal: Type & { BoatTerminal: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'arrivalBoatTerminal',
   ...props
  },
  children
 );
};

ArrivalBoatTerminal.BoatTerminal = BoatTerminalType;

export { ArrivalBoatTerminal };
