import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DurationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'totalTime',
   itemScope: true,
   itemType: 'https://schema.org/Duration',
   ...props
  },
  children
 );
};

const TotalTime: Type & { Duration: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'totalTime',
   ...props
  },
  children
 );
};

TotalTime.Duration = DurationType;

export { TotalTime };
