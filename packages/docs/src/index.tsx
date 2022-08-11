import React from "react";
import ReactDOM from "react-dom/client";

import {
  AboutPage,
  Breadcrumb,
  ReviewedBy,
  Name as AboutPageName,
  About,
} from "@react-microdata/about-page";

import {
  Restaurant,
  Name as RestaurantName,
  Address,
} from "@react-microdata/restaurant";

import { Name, Person } from "@react-microdata/person";

import { RatingValue } from "@react-microdata/rating";

import { AddressLocality } from "@react-microdata/postal-address";
import { Name as ThingName } from "@react-microdata/thing";
import {
  Winery,
  ServesCuisine,
  StarRating,
  Address as WineryAddress,
} from "@react-microdata/winery";

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
          <RatingValue content={"4"}>****</RatingValue>
        </StarRating.Rating>
      </Winery>

      <Person>
        <Name>Stan</Name>
        <Address.PostalAddress>
          <AddressLocality>Passau</AddressLocality>
        </Address.PostalAddress>
      </Person>
    </div>
  );
};
ReactDOM
  //@ts-ignore
  .createRoot(document.getElementById("app"))
  .render(<Index />);
