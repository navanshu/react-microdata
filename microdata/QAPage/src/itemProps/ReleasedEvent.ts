import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PublicationEventType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'releasedEvent',
   itemScope: true,
   itemType: 'https://schema.org/PublicationEvent',
   ...props
  },
  children
 );
};

const ReleasedEvent: Type & { PublicationEvent: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'releasedEvent',
   ...props
  },
  children
 );
};

ReleasedEvent.PublicationEvent = PublicationEventType;

export { ReleasedEvent };
