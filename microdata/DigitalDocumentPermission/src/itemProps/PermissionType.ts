import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DigitalDocumentPermissionTypeType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'permissionType',
   itemScope: true,
   itemType: 'https://schema.org/DigitalDocumentPermissionType',
   ...props
  },
  children
 );
};

const PermissionType: Type & { DigitalDocumentPermissionType: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'permissionType',
   ...props
  },
  children
 );
};

PermissionType.DigitalDocumentPermissionType =
 DigitalDocumentPermissionTypeType;

export { PermissionType };
