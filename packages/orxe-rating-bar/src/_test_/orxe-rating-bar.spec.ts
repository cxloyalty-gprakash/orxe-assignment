import { OrxeRatingBar } from "../";
import "..";

describe("orxe-rating-bar", () => {
  let orxeRatingBar: OrxeRatingBar = null;

  beforeEach(async () => {
    orxeRatingBar = document.createElement("orxe-rating-bar") as OrxeRatingBar;
    orxeRatingBar.rating = 6.2;
    orxeRatingBar.label = "Hotel Rating";
    orxeRatingBar.type = "donut";
    document.body.appendChild(orxeRatingBar);
    await orxeRatingBar.updateComplete;
    await orxeRatingBar.requestUpdate();
  });

  afterEach(async () => {
    await orxeRatingBar.remove();
  });

  it("Should add correct class based on set rating", async () => {
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-3").length
    ).toEqual(1);
  });

  it("Should render the donut rating bar", () => {
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".donut-rating-bar").length
    ).toEqual(1);
  });

  it("Should render the linear rating bar", async () => {
    orxeRatingBar.type = "linear";
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".linear-rating-bar").length
    ).toEqual(1);
  });

  it("Should set the aria-label if not set by consumer", () => {
    expect(orxeRatingBar.getAttribute("aria-label")).toBeDefined();
  });

  it("Should set the right value for the aria-label", () => {
    expect(orxeRatingBar.getAttribute("aria-label")).toEqual(
      "Hotel Rating 6.2 out of 10"
    );
  });

  it("Should have the rating-1 class", async () => {
    orxeRatingBar.rating = 1.5;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-1").length
    ).toEqual(1);
  });

  it("Should have the rating-2 class", async () => {
    orxeRatingBar.rating = 3.5;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-2").length
    ).toEqual(1);
  });

  it("Should have the rating-3 class", async () => {
    orxeRatingBar.rating = 6.4;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-3").length
    ).toEqual(1);
  });

  it("Should have the rating-4 class", async () => {
    orxeRatingBar.rating = 7.6;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-4").length
    ).toEqual(1);
  });

  it("Should have the rating-5 class", async () => {
    orxeRatingBar.rating = 8.6;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-5").length
    ).toEqual(1);
  });

  it("Should have the rating-1 if invalid rating is passed", async () => {
    orxeRatingBar.rating = 11;
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot.querySelectorAll(".rating-1").length
    ).toEqual(1);
  });

  it("Should have correct width set for linear progress", async () => {
    orxeRatingBar.type = "linear";
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot
        .querySelectorAll(".rating-3")
        .item(0)
        .getAttribute("style")
    ).toEqual("width:" + orxeRatingBar.rating * 10 + "%");
  });

  it("Should have correct stroke set for donut progress", async () => {
    orxeRatingBar.type = "donut";
    orxeRatingBar.updateRating();
    await orxeRatingBar.requestUpdate();
    expect(
      orxeRatingBar.shadowRoot
        .querySelectorAll(".donut-rating-bar__stroke")
        .item(1)
        .getAttribute("style")
    ).toEqual("stroke-dashoffset:" + 314.1592 * (orxeRatingBar.rating / 10) + "%");
  });
});
