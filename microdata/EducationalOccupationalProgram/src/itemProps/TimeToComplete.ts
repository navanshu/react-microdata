import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DurationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'timeToComplete',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

const TimeToComplete: Type & { Duration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'timeToComplete',
   ...props
  },
  children
 );
};

TimeToComplete.Duration = DurationType;

export { TimeToComplete };
