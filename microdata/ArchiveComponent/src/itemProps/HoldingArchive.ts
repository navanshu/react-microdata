import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ArchiveOrganizationType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'holdingArchive',
   itemScope: true,
   itemType: 'https://schema.org/ArchiveOrganization',
   ...props
  },
  children
 );
};

const HoldingArchive: Type & { ArchiveOrganization: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'holdingArchive',
   ...props
  },
  children
 );
};

HoldingArchive.ArchiveOrganization = ArchiveOrganizationType;

export { HoldingArchive };
