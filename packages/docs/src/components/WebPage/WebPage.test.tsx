import { render } from "@testing-library/react";
import {
  DatePublished,
  MainContentOfPage,
  WebPage,
  Breadcrumb,
  Award,
  Url,
} from "@react-microdata/web-page";

describe("WebPage", () => {
  it("should ", function () {
    const { getByTestId } = render(
      <WebPage data-testid={"web-page"}>
        <Url data-testid={"url"}>url</Url>
        <Award data-testid={"award"}>award</Award>
        <Breadcrumb data-testid={"breadcrumb"}>1/2/3/4</Breadcrumb>
        <MainContentOfPage.WebPageElement data-testid={"webPageElement"}>
          <DatePublished data-testid={"datePublished"} content="2009-05-08">
            May 8, 2009
          </DatePublished>
        </MainContentOfPage.WebPageElement>
      </WebPage>
    );
    const webPage = getByTestId("web-page");
    const datePublished = getByTestId("datePublished");
    const breadcrumb = getByTestId("breadcrumb");
    const award = getByTestId("award");
    const webPageElement = getByTestId("webPageElement");
    const url = getByTestId("url");

    //
    expect(url).toHaveAttribute("itemprop", "url");
    expect(url).toHaveTextContent("url");
    //
    expect(webPage).toHaveAttribute("itemtype", "https://schema.org/WebPage");
    expect(webPage).toHaveAttribute("itemscope", "");
    //
    expect(webPageElement).toHaveAttribute(
      "itemtype",
      "https://schema.org/WebPageElement"
    );
    expect(webPageElement).toHaveAttribute("itemscope", "");
    expect(webPageElement).toHaveAttribute("itemprop", "mainContentOfPage");
    //
    expect(datePublished).toHaveAttribute("content", "2009-05-08");
    expect(datePublished).toHaveTextContent("May 8, 2009");
    //
    expect(breadcrumb).toHaveTextContent("1/2/3/4");
    //
    expect(award).toHaveTextContent("award");
    expect(award).toHaveAttribute("itemprop", "award");
  });
});
