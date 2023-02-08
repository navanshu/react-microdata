import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'potentialAction',
   itemScope: true,
   itemType: 'https://schema.org/Action',
   ...props
  },
  children
 );
};

const PotentialAction: Type & { Action: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'potentialAction',
   ...props
  },
  children
 );
};

PotentialAction.Action = ActionType;

export { PotentialAction };
