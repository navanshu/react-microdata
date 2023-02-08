import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DateType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'dateVehicleFirstRegistered',
   itemScope: true,
   itemType: 'https://schema.org/Date',
   ...props
  },
  children
 );
};

const DateVehicleFirstRegistered: Type & { Date: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'dateVehicleFirstRegistered',
   ...props
  },
  children
 );
};

DateVehicleFirstRegistered.Date = DateType;

export { DateVehicleFirstRegistered };
