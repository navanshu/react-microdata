import { render } from "@testing-library/react";
import {
  DatePublished,
  MainContentOfPage,
  WebPage,
  Breadcrumb,
  Award,
  Url,
  Audience,
  Name,
} from "@react-microdata/web-page";
import { AudienceType } from "@react-microdata/audience";

describe("WebPage", () => {
  it("should return expected type component if property and expected type have the same name", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Audience data-testid={"audience"}>
          <AudienceType>programmers</AudienceType>
        </Audience>
      </WebPage>
    );

    const audience = getByTestId("audience");
    //
    expect(audience).toHaveAttribute("itemprop", "audience");
    expect(audience).toHaveAttribute("itemtype", "https://schema.org/Audience");
    expect(audience).toHaveAttribute("itemscope", "");
  });

  it("should return property component if expected type is Text", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Award data-testid={"award"}>award</Award>
      </WebPage>
    );
    const award = getByTestId("award");
    //
    expect(award).toHaveTextContent("award");
    expect(award).toHaveAttribute("itemprop", "award");
    expect(award).not.toHaveAttribute("itemtype", "https://schema.org/Text");
  });

  it("should return property component if one of expected types is Text", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Breadcrumb data-testid={"breadcrumb"}>1/2/3/4</Breadcrumb>
      </WebPage>
    );
    const breadcrumb = getByTestId("breadcrumb");
    //
    expect(breadcrumb).toHaveTextContent("1/2/3/4");
    expect(breadcrumb).toHaveAttribute("itemprop", "breadcrumb");
    expect(breadcrumb).not.toHaveAttribute("itemscope", "");
    expect(breadcrumb).not.toHaveAttribute(
      "itemtype",
      "https://schema.org/BreadcrumbList"
    );
  });

  it("should return composed react component if property has multiple expected types", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Breadcrumb.BreadcrumbList
          data-testid={"breadcrumb-list"}
        ></Breadcrumb.BreadcrumbList>
      </WebPage>
    );
    const breadcrumbList = getByTestId("breadcrumb-list");
    //
    expect(breadcrumbList).toHaveAttribute("itemprop", "breadcrumb");
    expect(breadcrumbList).toHaveAttribute("itemscope", "");
    expect(breadcrumbList).toHaveAttribute(
      "itemtype",
      "https://schema.org/BreadcrumbList"
    );
  });

  it("should return type component", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}></WebPage>
    );
    const webPage = getByTestId("web-page");
    //
    expect(webPage).toHaveAttribute("itemtype", "https://schema.org/WebPage");
    expect(webPage).toHaveAttribute("itemscope", "");
  });

  it("should return html element specified in the 'as' prop", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <MainContentOfPage.WebPageElement data-testid={"webPageElement"}>
          <DatePublished
            as={"meta"}
            data-testid={"datePublished"}
            content="2009-05-08"
          />
        </MainContentOfPage.WebPageElement>
      </WebPage>
    );

    const datePublished = getByTestId("datePublished");
    expect(datePublished).toHaveAttribute("content", "2009-05-08");
    expect(Object.values(datePublished)[0].elementType).toBe("meta");
  });

  it("should return compound component if expected type has a different dane as the property", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <MainContentOfPage.WebPageElement data-testid={"webPageElement"} />
      </WebPage>
    );
    const webPageElement = getByTestId("webPageElement");
    //
    expect(webPageElement).toHaveAttribute(
      "itemtype",
      "https://schema.org/WebPageElement"
    );
    expect(webPageElement).toHaveAttribute("itemscope", "");
    expect(webPageElement).toHaveAttribute("itemprop", "mainContentOfPage");
  });

  it("should return itemprop component for the 'url' property", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Url data-testid={"url"}>url</Url>
      </WebPage>
    );
    const url = getByTestId("url");
    expect(url).toHaveAttribute("itemprop", "url");
    expect(url).toHaveTextContent("url");

    expect(url).not.toHaveAttribute("itemscope", "");
    expect(url).not.toHaveAttribute("itemtype", "https://schema.org/URL");
  });

  it("should return compound react component for the 'url' property", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Url.URL data-testid={"url"}>url</Url.URL>
      </WebPage>
    );
    const url = getByTestId("url");
    expect(url).toHaveAttribute("itemprop", "url");
    expect(url).toHaveTextContent("url");

    expect(url).toHaveAttribute("itemscope", "");
    expect(url).toHaveAttribute("itemtype", "https://schema.org/URL");
  });

  it("should return compound react component for the expected type Text", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Name.Text data-testid={"name"}>name</Name.Text>
      </WebPage>
    );
    const name = getByTestId("name");

    expect(name).toHaveTextContent("name");

    expect(name).toHaveAttribute("itemprop", "name");

    expect(name).toHaveAttribute("itemscope", "");
    expect(name).toHaveAttribute("itemtype", "https://schema.org/Text");
  });
});
