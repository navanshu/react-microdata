import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interactionType',
   itemScope: true,
   itemType: 'https://schema.org/Action',
   ...props
  },
  children
 );
};

const InteractionType: Type & { Action: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'interactionType',
   ...props
  },
  children
 );
};

InteractionType.Action = ActionType;

export { InteractionType };
