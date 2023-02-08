import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OwnershipFundingInfo: Type & {
 URL: Type;
 AboutPage: Type;
 CreativeWork: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ownershipFundingInfo',
   ...props
  },
  children
 );
};

OwnershipFundingInfo.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ownershipFundingInfo',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

OwnershipFundingInfo.AboutPage = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ownershipFundingInfo',
   itemScope: true,
   itemType: 'https://schema.org/AboutPage',
   ...props
  },
  children
 );
};

OwnershipFundingInfo.CreativeWork = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'ownershipFundingInfo',
   itemScope: true,
   itemType: 'https://schema.org/CreativeWork',
   ...props
  },
  children
 );
};

export { OwnershipFundingInfo };
