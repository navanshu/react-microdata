import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'scheduleTimezone',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ScheduleTimezone: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'scheduleTimezone',
   ...props
  },
  children
 );
};

ScheduleTimezone.Text = TextType;

export { ScheduleTimezone };
