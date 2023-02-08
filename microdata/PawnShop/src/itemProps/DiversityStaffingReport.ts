import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DiversityStaffingReport: Type & {
 URL: Type;
 Article: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diversityStaffingReport',
   ...props
  },
  children
 );
};

DiversityStaffingReport.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diversityStaffingReport',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

DiversityStaffingReport.Article = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diversityStaffingReport',
   itemScope: true,
   itemType: 'https://schema.org/Article',
   ...props
  },
  children
 );
};

export { DiversityStaffingReport };
