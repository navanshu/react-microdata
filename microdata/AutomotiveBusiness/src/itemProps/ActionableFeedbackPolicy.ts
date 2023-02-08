import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ActionableFeedbackPolicy: Type & {
 URL: Type;
 CreativeWork: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionableFeedbackPolicy',
   ...props
  },
  children
 );
};

ActionableFeedbackPolicy.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'actionableFeedbackPolicy',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

ActionableFeedbackPolicy.CreativeWork = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'actionableFeedbackPolicy',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

export { ActionableFeedbackPolicy };
