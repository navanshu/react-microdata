import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const EngineSpecificationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleEngine',
   itemScope: true,
   itemType: 'https://schema.org/EngineSpecification',
   ...props
  },
  children
 );
};

const VehicleEngine: Type & { EngineSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'vehicleEngine',
   ...props
  },
  children
 );
};

VehicleEngine.EngineSpecification = EngineSpecificationType;

export { VehicleEngine };
