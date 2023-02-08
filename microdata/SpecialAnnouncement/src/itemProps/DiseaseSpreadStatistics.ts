import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DiseaseSpreadStatistics: Type & {
 Dataset: Type;
 Observation: Type;
 WebContent: Type;
 URL: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diseaseSpreadStatistics',
   ...props
  },
  children
 );
};

DiseaseSpreadStatistics.Dataset = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diseaseSpreadStatistics',
   itemScope: true,
   itemType: 'https://schema.org/Dataset',
   ...props
  },
  children
 );
};

DiseaseSpreadStatistics.Observation = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diseaseSpreadStatistics',
   itemScope: true,
   itemType: 'https://schema.org/Observation',
   ...props
  },
  children
 );
};

DiseaseSpreadStatistics.WebContent = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diseaseSpreadStatistics',
   itemScope: true,
   itemType: 'https://schema.org/WebContent',
   ...props
  },
  children
 );
};

DiseaseSpreadStatistics.URL = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'diseaseSpreadStatistics',
   itemScope: true,
   itemType: 'https://schema.org/URL',
   ...props
  },
  children
 );
};

export { DiseaseSpreadStatistics };
