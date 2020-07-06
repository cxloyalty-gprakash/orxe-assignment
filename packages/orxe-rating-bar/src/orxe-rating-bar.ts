import { html, customElement, property } from "lit-element";
import styles from "./orxe-rating-bar-css";
import { TranslationClass, events } from "@orxe-culture/lit";

@customElement("orxe-rating-bar")
export default class OrxeRatingBar extends TranslationClass {
  private _ratingClass: string;
  private _ratingProgress: string;
  private _maxRating: number;

  // #region external properties
  /**
   * This property is used to set the rating for the rating bar
   */
  @property({ type: Number, reflect: true })
  rating = 0;

  /**
   * This property is used to set the label for the rating bar
   */
  @property({ type: String, reflect: true })
  label = "";

  /**
   * This property is used to set the type of the rating bar. By default, it will show a linear rating bar.
   */
  @property({ type: String, reflect: true })
  type: "linear" | "donut" = "linear";

  // #endregion

  constructor() {
    super();
    this._ratingClass = "rating-1";
    this._ratingProgress = "width: '0%'";
    this._maxRating = 10;
  }

  /**
   * Implement `render` to define a template for the element.
   */
  render() {
    if (this.type.toLowerCase() === "donut") {
      return this._getDonutRatingBarTemplate();
    } else {
      return this._getLinearRatingBarTemplate();
    }
  }

  firstUpdated() {
    this.updateRating();
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;

  /**
   * This method encapsulates the styles and aria-label handling w.r.t the values provided by the consumer
   */
  updateRating() {
    this._setRatingStyles();

    if (!this.hasAttribute("aria-label")) {
      events.initialized.subscribe((isInitialized) => {
        if (isInitialized) {
          this._addAriaLabel();
        }
      });
    }
  }

  /**
   * This method is used to set the right styles on the rating bar to represent the progress/rating value
   */
  private _setRatingStyles() {
    const value = this.rating;
    if (this.type.toLowerCase() === "linear") {
      this._ratingProgress =
        value > 0 && value < this._maxRating
          ? "width:" + value * this._maxRating + "%"
          : "width:0%";
    } else {
      this._ratingProgress =
        "stroke-dashoffset:" + 314.1592 * (value / this._maxRating) + "%";
    }
    switch (true) {
      case value <= 3:
        this._ratingClass = "rating-1";
        break;
      case value <= 5:
        this._ratingClass = "rating-2";
        break;
      case value <= 7:
        this._ratingClass = "rating-3";
        break;
      case value <= 8.5:
        this._ratingClass = "rating-4";
        break;
      case value <= 10:
        this._ratingClass = "rating-5";
        break;
      default:
        this._ratingClass = "rating-1";
        break;
    }
  }

  /**
   * This method returns the html template for the linear rating bar
   */
  private _getLinearRatingBarTemplate() {
    return html`
      <div class="linear-rating-bar">
        <div class="bar-container">
          <div
            class="rating ${this._ratingClass}"
            style="${this._ratingProgress}"
          ></div>
        </div>
        <label>${this.label}<span class="right">${this.rating}</span></label>
      </div>
    `;
  }

  /**
   * This method returns the html template for the donut rating bar
   */
  private _getDonutRatingBarTemplate() {
    return html`
      <div class="donut-rating-bar">
        <svg class="donut-rating-bar__svg" viewport="0 0 2000 2000">
          <circle
            class="donut-rating-bar__stroke ${this._ratingClass}"
            r="50%"
            cx="50%"
            cy="50%"
          ></circle>
          <circle
            class="donut-rating-bar__stroke"
            r="50%"
            cx="50%"
            cy="50%"
            style="${this._ratingProgress}"
          ></circle>
        </svg>
        <label>${this.rating}</label>
      </div>
    `;
  }

  /**
   * This method is used to add an aria-label attribute on the component if one is not provided by the consumer.
   */
  private _addAriaLabel() {
    const ariaLabel = `${this.t("aria_label", {
      label: this.label,
      rating: this.rating,
      totalRating: this._maxRating,
    })}`;
    this.setAttribute("aria-label", ariaLabel);
  }
}
