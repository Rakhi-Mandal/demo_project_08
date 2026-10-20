const { test, expect } = require('../../fixtures/walker_fixture.js');
import testData from '../../test-data.json';

test("basic order flow navigates login, personal card, rewards, and info modals @regression", async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  const usernameInput = page.locator("xpath=//input[@id='username']");
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.username);

  const passwordInput = page.locator("xpath=//input[@id='password']");
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);

  const continueButtonAfterLogin = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButtonAfterLogin).toBeEnabled();
  await continueButtonAfterLogin.click();

  const scottRogersHeader = page.locator("xpath=//h2[@aria-label='Scott Rogers'][normalize-space(.)='Scott Rogers']");
  await expect(scottRogersHeader).toBeVisible();

  const personalButton = page.getByRole('button', { name: 'Personal' });
  await expect(personalButton).toBeEnabled();
  await personalButton.click();

  const manageCardButton = page.getByRole('button', { name: 'Manage card' });
  await expect(manageCardButton).toBeEnabled();
  await manageCardButton.click();

  const myRewardsButton = page.getByRole('button', { name: 'My rewards' });
  await expect(myRewardsButton).toBeEnabled();
  await myRewardsButton.click();

  const rewardsImage = page.locator("xpath=//div[contains(concat(' ', normalize-space(@class), ' '), ' r-3pj75a ')]//img[contains(concat(' ', normalize-space(@class), ' '), ' css-9pa8cd ') and @draggable='false']");
  await expect(rewardsImage).toBeEnabled();
  await rewardsImage.click();

  const understandingSweepstakesHeading = page.getByRole('heading', { name: 'Understanding your sweepstakes' });
  await expect(understandingSweepstakesHeading).toBeEnabled();
  await understandingSweepstakesHeading.click();

  const gotItButtonVisible = page.locator("xpath=//button[@aria-label='Got it'][normalize-space(.)='Got it']");
  await expect(gotItButtonVisible).toBeVisible();

  const gotItButton = page.getByRole('button', { name: 'Got it' });
  await expect(gotItButton).toBeEnabled();
  await gotItButton.click();

  const viewAllButton = page.getByRole('button', { name: 'View all' });
  await expect(viewAllButton).toBeEnabled();
  await viewAllButton.click();

  const previousTransactionsSection = page.locator("xpath=//div[normalize-space(.)='Previous transactions']");
  await expect(previousTransactionsSection).toBeVisible();

  const backToMyRewardsSection = page.locator("xpath=//div[@dir='auto' and normalize-space(.)='Back to My rewards'][normalize-space(.)='Back to My rewards']");
  await expect(backToMyRewardsSection).toBeVisible();

  const goBackToRewardsButton = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButton).toBeEnabled();
  await goBackToRewardsButton.click();

  const entriesEarnedText = page.getByText('entries earned');
  await expect(entriesEarnedText).toBeEnabled();
  await entriesEarnedText.click();

  const checkOutTheNewWatcoButton = page.getByRole('button', { name: 'Check Out the New Watco' });
  await expect(checkOutTheNewWatcoButton).toBeEnabled();
  await checkOutTheNewWatcoButton.click();

  const readNowButton = page.getByRole('button', { name: 'Read Now' });
  await expect(readNowButton).toBeEnabled();
  await readNowButton.click();

  const goBackToRewardsButtonAfterRead = page.getByRole('button', { name: 'Go back to Rewards' });
  await expect(goBackToRewardsButtonAfterRead).toBeEnabled();
  await goBackToRewardsButtonAfterRead.click();

});
