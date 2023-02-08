import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionStatusTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionStatus',
   itemScope: true,
   itemType: 'https://schema.org/ActionStatusType',
   ...props
  },
  children
 );
};

const ActionStatus: Type & { ActionStatusType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actionStatus',
   ...props
  },
  children
 );
};

ActionStatus.ActionStatusType = ActionStatusTypeType;

export { ActionStatus };
