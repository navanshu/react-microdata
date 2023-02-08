import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MedicalDeviceType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'usesDevice',
   itemScope: true,
   itemType: 'https://schema.org/MedicalDevice',
   ...props
  },
  children
 );
};

const UsesDevice: Type & { MedicalDevice: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'usesDevice',
   ...props
  },
  children
 );
};

UsesDevice.MedicalDevice = MedicalDeviceType;

export { UsesDevice };
