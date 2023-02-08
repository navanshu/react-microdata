import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CreativeWorkType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'recordedIn',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

const RecordedIn: Type & { CreativeWork: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'recordedIn',
   ...props
  },
  children
 );
};

RecordedIn.CreativeWork = CreativeWorkType;

export { RecordedIn };
