import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DigitalDocumentPermissionType: Type = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasDigitalDocumentPermission',
   itemScope: true,
   itemType: 'https://schema.org/DigitalDocumentPermission',
   ...props
  },
  children
 );
};

const HasDigitalDocumentPermission: Type & {
 DigitalDocumentPermission: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasDigitalDocumentPermission',
   ...props
  },
  children
 );
};

HasDigitalDocumentPermission.DigitalDocumentPermission =
 DigitalDocumentPermissionType;

export { HasDigitalDocumentPermission };
