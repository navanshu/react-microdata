import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BoatTerminalType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'departureBoatTerminal',
   itemScope: true,
   itemType: 'https://schema.org/BoatTerminal',
   ...props
  },
  children
 );
};

const DepartureBoatTerminal: Type & { BoatTerminal: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'departureBoatTerminal',
   ...props
  },
  children
 );
};

DepartureBoatTerminal.BoatTerminal = BoatTerminalType;

export { DepartureBoatTerminal };
