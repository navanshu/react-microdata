import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ThingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'instrument',
   itemScope: true,
   itemType: 'https://schema.org/Thing',
   ...props
  },
  children
 );
};

const Instrument: Type & { Thing: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'instrument',
   ...props
  },
  children
 );
};

Instrument.Thing = ThingType;

export { Instrument };
