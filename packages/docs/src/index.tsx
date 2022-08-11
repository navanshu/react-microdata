import React from "react";
import ReactDOM from "react-dom/client";

// import PersonSchema, { Person, Address, Name } from "@react-microdata/person";
// import { AddressLocality } from "@react-microdata/postal-address";
import { AboutPage } from "@react-microdata/about-page";

const Index = () => {
  return (
    <div>
      <AboutPage>page</AboutPage>

      {/*<Winery>*/}
      {/*  <ServesCuisine>Greek</ServesCuisine>*/}
      {/*  <StarRating>*/}
      {/*    <RatingValue content={"4"}>****</RatingValue>*/}
      {/*  </StarRating>*/}
      {/*</Winery>*/}

      {/*<Person>*/}
      {/*  <Name>Stan</Name>*/}
      {/*  <Address.PostalAddress>*/}
      {/*    <AddressLocality>Passau</AddressLocality>*/}
      {/*  </Address.PostalAddress>*/}
      {/*</Person>*/}

      {/*<Restaurant>*/}
      {/*  <StarRating>*/}
      {/*      <RatingValue content={"4"}>****</RatingValue>*/}
      {/*  </StarRating>*/}
      {/*</Restaurant>*/}
    </div>
  );
};
ReactDOM
  //@ts-ignore
  .createRoot(document.getElementById("app"))
  .render(<Index />);
