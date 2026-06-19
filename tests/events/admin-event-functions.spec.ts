import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';
const eventData = testData.EventsPage.eventDetails;


test.describe('Admin Event & Function', () => {

   test('Create new event', async ({ loginPage, page, dashboardPage, eventsPage }) => {

      /** LOgin with valid cred*/
      await loginPage.navigateToLoginPage();
      await loginPage.login(testData.LoginPage.validUser);

      /**User is on the event dashboard page */
      await expect(dashboardPage.adminTab()).toBeVisible();

      /** Navigate to Manage  Evelts Page */
      await dashboardPage.navigateToManageEvents();
      await expect(eventsPage.eventLimitText()).toContainText(testData.EventsPage.eventLimit);

      /* Enter New Event  Details*/
      await eventsPage.enterNewEventDetails(testData.EventsPage.eventDetails);
      await eventsPage.addEventButton().click();

      await expect(eventsPage.eventCreatedToastMsg()).toBeVisible();

   })



})