import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SubjectOf: Type & {
 Event: Type;
 CreativeWork: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subjectOf',
   ...props
  },
  children
 );
};

SubjectOf.Event = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subjectOf',
   itemScope: true,
   itemType: 'https://schema.org/Event',
   ...props
  },
  children
 );
};

SubjectOf.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'subjectOf',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

export { SubjectOf };
