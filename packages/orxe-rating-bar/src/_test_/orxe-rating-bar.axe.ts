import { OrxeRatingBar } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-orxe-rating-bar-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });

  let OrxeRatingBar;

  beforeEach(async () => {
    OrxeRatingBar;
    document.body.appendChild(document.createElement('OrxeRatingBar'));
    OrxeRatingBar = document.querySelector('OrxeRatingBar') as OrxeRatingBar;
  });

  afterEach(() => {
    OrxeRatingBar.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(OrxeRatingBar);
    expect(result).toHaveNoViolations();
  });
});
