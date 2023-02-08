import React, { createElement, FC, HTMLAttributes, HTMLProps } from 'react';
import ReactDOM from 'react-dom/client';

import {
 AboutPage,
 Breadcrumb,
 ReviewedBy,
 Name as AboutPageName,
 About
} from '@react-microdata/about-page';

import {
 Restaurant,
 Name as RestaurantName,
 Address
} from '@react-microdata/restaurant';

import { RatingValue } from '@react-microdata/rating';

import { Name as ThingName } from '@react-microdata/thing';
import {
 Winery,
 ServesCuisine,
 StarRating,
 Address as WineryAddress
} from '@react-microdata/winery';

import {
 Image,
 Name,
 Person,
 JobTitle,
 Colleague,
 Url,
 Email
} from '@react-microdata/person';

import { AddressLocality } from '@react-microdata/postal-address';

import WebPageComponent from './components/WebPage/WebPage';
import { StreetAddress } from '@react-microdata/postal-address';
import { AddressRegion } from '@react-microdata/postal-address';
import { PostalCode } from '@react-microdata/postal-address';
import { Telephone } from '@react-microdata/person';
import ProductComponent from './components/Product/Product';

type Type = FC<
 HTMLProps<HTMLAttributes<any>> & {
  as?: string;
 }
>;

const Component: Type & { Some: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(as, { itemProp: '', ...props }, children);
};

Component.Some = ({ as = 'div', children, ...props }) => {
 return createElement(as, { itemProp: '', ...props }, children);
};

const A = () => {
 return (
  <Component as={'img'}>
   <div></div>
   <div></div>
  </Component>
 );
};

const Index = () => {
 return (
  <div>
   <AboutPage>
    <About.Thing>
     <ThingName>about</ThingName>
    </About.Thing>
    <Restaurant>
     <Address.PostalAddress>
      <AddressLocality>Locality</AddressLocality>
     </Address.PostalAddress>
     <RestaurantName>Restaurant Name</RestaurantName>
    </Restaurant>

    <AboutPageName>Page Name</AboutPageName>
    <Breadcrumb>Breadcrumb/text</Breadcrumb>
    <ReviewedBy.Person>
     <Name>Reviewer Name</Name>
    </ReviewedBy.Person>
   </AboutPage>

   <Winery>
    <WineryAddress>Winery Address</WineryAddress>
    <ServesCuisine>Greek</ServesCuisine>
    <StarRating.Rating>
     <RatingValue content={'4'}>****</RatingValue>
    </StarRating.Rating>
   </Winery>

   <Person>
    <Name>Stan</Name>
    <Address.PostalAddress>
     <AddressLocality>Passau</AddressLocality>
    </Address.PostalAddress>
   </Person>

   <WebPageComponent />

   <Person>
    <Name as={'span'}>Jane Doe</Name>
    <Image as={'img'} src={'janedoe.jpg'}></Image>
    <JobTitle as={'span'}>Professor</JobTitle>
    <Address.PostalAddress>
     <StreetAddress>20341 Whitworth Institute 405 N. Whitworth</StreetAddress>
     <AddressLocality>Seattle</AddressLocality>
     <AddressRegion>WA</AddressRegion>
     <PostalCode>98052</PostalCode>
    </Address.PostalAddress>
    <Telephone>(425) 123-4567</Telephone>
    <Email as={'a'} href="mailto:jane-doe@xyz.edu">
     jane-doe@xyz.edu
    </Email>
    <Url as={'a'} href="http://www.janedoe.com">
     janedoe.com
    </Url>
    <Colleague as={'a'} href="http://www.xyz.edu/students/alicejones.html">
     Alice Jones
    </Colleague>
    <Colleague as={'a'} href="http://www.xyz.edu/students/bobsmith.html">
     Bob Smith
    </Colleague>
   </Person>

   <ProductComponent />
  </div>
 );
};
ReactDOM
 //@ts-ignore
 .createRoot(document.getElementById('app'))
 .render(<Index />);
