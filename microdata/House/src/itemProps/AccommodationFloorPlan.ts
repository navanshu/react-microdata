import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FloorPlanType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'accommodationFloorPlan',
   itemScope: true,
   itemType: 'https://schema.org/FloorPlan',
   ...props
  },
  children
 );
};

const AccommodationFloorPlan: Type & { FloorPlan: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'accommodationFloorPlan',
   ...props
  },
  children
 );
};

AccommodationFloorPlan.FloorPlan = FloorPlanType;

export { AccommodationFloorPlan };
