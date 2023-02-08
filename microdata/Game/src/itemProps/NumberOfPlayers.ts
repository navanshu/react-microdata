import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const QuantitativeValueType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfPlayers',
   itemScope: true,
   itemType: 'https://schema.org/QuantitativeValue',
   ...props
  },
  children
 );
};

const NumberOfPlayers: Type & { QuantitativeValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'numberOfPlayers',
   ...props
  },
  children
 );
};

NumberOfPlayers.QuantitativeValue = QuantitativeValueType;

export { NumberOfPlayers };
