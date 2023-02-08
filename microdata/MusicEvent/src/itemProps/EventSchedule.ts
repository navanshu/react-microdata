import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ScheduleType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'eventSchedule',
   itemScope: true,
   itemType: 'https://schema.org/Schedule',
   ...props
  },
  children
 );
};

const EventSchedule: Type & { Schedule: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eventSchedule',
   ...props
  },
  children
 );
};

EventSchedule.Schedule = ScheduleType;

export { EventSchedule };
