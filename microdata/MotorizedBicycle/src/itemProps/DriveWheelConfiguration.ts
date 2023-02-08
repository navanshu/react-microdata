import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DriveWheelConfiguration: Type & {
 DriveWheelConfigurationValue: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'driveWheelConfiguration',
   ...props
  },
  children
 );
};

DriveWheelConfiguration.DriveWheelConfigurationValue = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'driveWheelConfiguration',
   itemScope: true,
   itemType: 'https://schema.org/DriveWheelConfigurationValue',
   ...props
  },
  children
 );
};

export { DriveWheelConfiguration };
