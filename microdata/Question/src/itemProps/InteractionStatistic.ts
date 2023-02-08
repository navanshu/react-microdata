import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const InteractionCounterType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'interactionStatistic',
   itemScope: true,
   itemType: 'https://schema.org/InteractionCounter',
   ...props
  },
  children
 );
};

const InteractionStatistic: Type & { InteractionCounter: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'interactionStatistic',
   ...props
  },
  children
 );
};

InteractionStatistic.InteractionCounter = InteractionCounterType;

export { InteractionStatistic };
