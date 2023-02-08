import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DataDownloadType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'distribution',
   itemScope: true,
   itemType: 'https://schema.org/DataDownload',
   ...props
  },
  children
 );
};

const Distribution: Type & { DataDownload: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'distribution',
   ...props
  },
  children
 );
};

Distribution.DataDownload = DataDownloadType;

export { Distribution };
