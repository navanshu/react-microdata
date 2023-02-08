import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const LocationFeatureSpecificationType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'amenityFeature',
   itemScope: true,
   itemType: 'https://schema.org/LocationFeatureSpecification',
   ...props
  },
  children
 );
};

const AmenityFeature: Type & { LocationFeatureSpecification: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'amenityFeature',
   ...props
  },
  children
 );
};

AmenityFeature.LocationFeatureSpecification = LocationFeatureSpecificationType;

export { AmenityFeature };
