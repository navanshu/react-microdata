import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AnnouncementLocation: Type & {
 CivicStructure: Type;
 LocalBusiness: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'announcementLocation',
   ...props
  },
  children
 );
};

AnnouncementLocation.CivicStructure = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'announcementLocation',
   itemScope: true,
   itemType: 'https://schema.org/CivicStructure',
   ...props
  },
  children
 );
};

AnnouncementLocation.LocalBusiness = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'announcementLocation',
   itemScope: true,
   itemType: 'https://schema.org/LocalBusiness',
   ...props
  },
  children
 );
};

export { AnnouncementLocation };
