import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const HealthcareReportingData: Type & {
 Dataset: Type;
 CDCPMDRecord: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'healthcareReportingData',
   ...props
  },
  children
 );
};

HealthcareReportingData.Dataset = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'healthcareReportingData',
   itemScope: true,
   itemType: 'https://schema.org/Dataset',
   ...props
  },
  children
 );
};

HealthcareReportingData.CDCPMDRecord = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'healthcareReportingData',
   itemScope: true,
   itemType: 'https://schema.org/CDCPMDRecord',
   ...props
  },
  children
 );
};

export { HealthcareReportingData };
