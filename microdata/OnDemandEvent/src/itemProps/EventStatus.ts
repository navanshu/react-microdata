import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventStatusTypeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eventStatus',
   itemScope: true,
   itemType: 'https://schema.org/EventStatusType',
   ...props
  },
  children
 );
};

const EventStatus: Type & { EventStatusType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eventStatus',
   ...props
  },
  children
 );
};

EventStatus.EventStatusType = EventStatusTypeType;

export { EventStatus };
