import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const SteeringPositionValueType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'steeringPosition',
   itemScope: true,
   itemType: 'https://schema.org/SteeringPositionValue',
   ...props
  },
  children
 );
};

const SteeringPosition: Type & { SteeringPositionValue: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'steeringPosition',
   ...props
  },
  children
 );
};

SteeringPosition.SteeringPositionValue = SteeringPositionValueType;

export { SteeringPosition };
