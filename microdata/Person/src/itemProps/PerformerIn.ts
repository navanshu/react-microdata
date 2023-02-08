import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'performerIn',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

const PerformerIn: Type & { Event: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'performerIn',
   ...props
  },
  children
 );
};

PerformerIn.Event = EventType;

export { PerformerIn };
