import React from "react";
import {
  Audience,
  Award,
  Breadcrumb,
  DatePublished,
  MainContentOfPage,
  WebPage,
} from "@react-microdata/web-page";
import { AudienceType } from "@react-microdata/audience";

const WebPageComponent = () => {
  return (
    <WebPage data-testid={"web-page"}>
      <Audience>
        <AudienceType>programmers</AudienceType>
      </Audience>
      <Award>award</Award>
      <Breadcrumb data-testid={"breadcrumb"}>1/2/3/4</Breadcrumb>
      <MainContentOfPage.WebPageElement>
        <DatePublished content="2009-05-08">May 8, 2009</DatePublished>
      </MainContentOfPage.WebPageElement>
    </WebPage>
  );
};

export default WebPageComponent;
