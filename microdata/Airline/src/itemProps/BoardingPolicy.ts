import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BoardingPolicyTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'boardingPolicy',
   itemScope: true,
   itemType: 'https://schema.org/BoardingPolicyType',
   ...props
  },
  children
 );
};

const BoardingPolicy: Type & { BoardingPolicyType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'boardingPolicy',
   ...props
  },
  children
 );
};

BoardingPolicy.BoardingPolicyType = BoardingPolicyTypeType;

export { BoardingPolicy };
