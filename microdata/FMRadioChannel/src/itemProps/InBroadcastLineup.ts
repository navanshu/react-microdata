import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const CableOrSatelliteServiceType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inBroadcastLineup',
   itemScope: true,
   itemType: 'https://schema.org/CableOrSatelliteService',
   ...props
  },
  children
 );
};

const InBroadcastLineup: Type & { CableOrSatelliteService: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'inBroadcastLineup',
   ...props
  },
  children
 );
};

InBroadcastLineup.CableOrSatelliteService = CableOrSatelliteServiceType;

export { InBroadcastLineup };
