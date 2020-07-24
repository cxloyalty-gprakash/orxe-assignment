# orxe-rating-bar
Shows ratings graphically (linear or donut) along with a contextual color. The ratings are based on a scale of 10. If a rating greater than 10 is passed, the element will default to 0.

## Usage

# A donut rating bar
<orxe-rating-bar label="Hotel rating" rating="6.2" type="donut"></orxe-rating-bar>

# A linear rating bar
<orxe-rating-bar label="Hotel rating" rating="6.2" type="linear"></orxe-rating-bar>

# A linear rating bar
<orxe-rating-bar rating="6.2" type="donut" aria-label="Rating 6.2 out of 10"></orxe-rating-bar>

## constructor

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {
  ...
}

## Properties

Following properties are exposed by the component - 
| Name    | Type   | Description                                  | Default  |
| ----    | ----   | -----------                                  | -------  |
| type    | string | Type of rating bar (linear/donut)            | linear   |
| rating  | number | Value for the rating bar, max value 10, floating point values are allowed   | 0  |
| label   | string | Provides a label for the linear rating bar   | ''  |

## Styling

Use variables defined in @orxe/theme/components/rating-bar/variables

## methods

| _setRatingStyles()              |  private  |   This method sets the appropriate style on the element based on the rating value |
| _addAriaLabel()                 |  private  |   Adds the aria-label to the element if one is not passed by the consumer |
| _getDonutRatingBarTemplate()    |  private  |   Returns the template for the donut rating bar |
| _getLinearRatingBarTemplate()   |  private  |   Returns the template for the linear rating bar  |
| updateRating()                  |  public   |   Calls _setRatingStyles() and updateRating() internally  |