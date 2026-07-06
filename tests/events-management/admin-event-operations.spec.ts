import { test } from '../../fixtures/baseFixture';
import { expect } from '@playwright/test';
import testData from '../../test-data/eventhub-data.json';
import * as allure from 'allure-js-commons';

test.describe('Admin Event & Function', () => {

   test('Create new event', async ({dashboardPage, manageEventsPage }) => {

      // 🔷 High-level metadata
      await allure.epic('EventHub Application');
      await allure.feature('Admin Event Management');
      await allure.story('Create Event');

      await allure.severity('critical');
      await allure.owner('Sarthak');

      await allure.tag('smoke');
      await allure.tag('regression');

      await allure.description('Verify that admin user can create a new event successfully from Manage Events page');


      //  Step 1: Verify dashboard
      await allure.step('Verify user is on Admin Dashboard', async () => {
         await expect(dashboardPage.adminTab()).toBeVisible();
      });

      //  Step 2: Navigate to Manage Events
      await allure.step('Navigate to Manage Events page', async () => {
         await dashboardPage.navigateToManageEvents();
         await expect(manageEventsPage.eventLimitText())
            .toContainText(testData.EventsPage.eventLimit);
      });

      //  Step 3: Create new event
      await allure.step('Enter event details and create event', async () => {
         await manageEventsPage.enterNewEventDetails(testData.EventsPage.eventDetails);
         await manageEventsPage.addEventButton().click();
      });

      //  Step 4: Validate event creation
      await allure.step('Verify event creation success message', async () => {
         await expect(manageEventsPage.eventCreatedToastMsg()).toBeVisible();
      });

   });


   

   

});