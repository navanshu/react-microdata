import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Status: Type & {
 EventStatusType: Type;
 MedicalStudyStatus: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'status',
   ...props
  },
  children
 );
};

Status.EventStatusType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'status',
   itemScope: true,
   itemType: 'https://schema.org/EventStatusType',
   ...props
  },
  children
 );
};

Status.MedicalStudyStatus = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'status',
   itemScope: true,
   itemType: 'https://schema.org/MedicalStudyStatus',
   ...props
  },
  children
 );
};

export { Status };
