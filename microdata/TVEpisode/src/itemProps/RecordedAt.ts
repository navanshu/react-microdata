import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recordedAt',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

const RecordedAt: Type & { Event: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recordedAt',
   ...props
  },
  children
 );
};

RecordedAt.Event = EventType;

export { RecordedAt };
