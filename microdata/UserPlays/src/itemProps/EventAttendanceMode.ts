import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EventAttendanceModeEnumerationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eventAttendanceMode',
   itemScope: true,
   itemType: 'https://schema.org/EventAttendanceModeEnumeration',
   ...props
  },
  children
 );
};

const EventAttendanceMode: Type & { EventAttendanceModeEnumeration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'eventAttendanceMode',
   ...props
  },
  children
 );
};

EventAttendanceMode.EventAttendanceModeEnumeration =
 EventAttendanceModeEnumerationType;

export { EventAttendanceMode };
