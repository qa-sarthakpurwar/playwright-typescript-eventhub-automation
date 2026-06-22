# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: events\booking-management.spec.ts >> Booking Management >> Book maximum allowed tickets (10) & cannot increase above limit
- Location: tests\events\booking-management.spec.ts:8:9

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('link', { name: 'Book Now' })
Expected: 1
Received: 4
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Book Now' })
    5 × locator resolved to 7 elements
      - unexpected value "7"
    9 × locator resolved to 4 elements
      - unexpected value "4"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "EventHub" [ref=e5] [cursor=pointer]:
        - /url: /
        - img [ref=e7]
        - generic [ref=e9]: EventHub
      - generic [ref=e10]:
        - link "Home" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Events" [ref=e12] [cursor=pointer]:
          - /url: /events
        - link "My Bookings" [ref=e13] [cursor=pointer]:
          - /url: /bookings
        - link "API Docs" [ref=e14] [cursor=pointer]:
          - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
        - button "Admin" [ref=e16] [cursor=pointer]:
          - text: Admin
          - img [ref=e17]
        - generic [ref=e19]:
          - generic "signaturemusic12@gmail.com" [ref=e20]
          - button "Logout" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Upcoming Events" [level=1] [ref=e25]
        - paragraph [ref=e26]: Find your next unforgettable experience
      - generic [ref=e28]:
        - textbox "Search events, venues…" [active] [ref=e30]: Tech Meetup
        - combobox [ref=e32] [cursor=pointer]:
          - option "All Categories" [selected]
          - option "🎙 Conference"
          - option "🎵 Concert"
          - option "⚽ Sports"
          - option "🛠 Workshop"
          - option "🎉 Festival"
        - combobox [ref=e34] [cursor=pointer]:
          - option "All Cities" [selected]
          - option "Mumbai"
          - option "Bangalore"
          - option "Delhi"
          - option "Hyderabad"
          - option "Chennai"
          - option "Pune"
        - button "Clear filters" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - article [ref=e37]:
          - generic [ref=e38]:
            - img "Tech Meetup" [ref=e39]
            - generic [ref=e41]: Conference
          - generic [ref=e42]:
            - link "Tech Meetup" [ref=e43] [cursor=pointer]:
              - /url: /events/63826
              - heading "Tech Meetup" [level=3] [ref=e44]
            - generic [ref=e45]:
              - generic [ref=e46]:
                - img [ref=e47]
                - generic [ref=e49]: Mon, 20 Jul
              - generic [ref=e50]:
                - img [ref=e51]
                - generic [ref=e53]: TCS Campus, Hyderabad
            - generic [ref=e54]:
              - generic [ref=e55]:
                - paragraph [ref=e56]: $500
                - generic [ref=e57]: 1000 seats available
              - link "Book Now" [ref=e58] [cursor=pointer]:
                - /url: /events/63826
        - article [ref=e59]:
          - generic [ref=e60]:
            - img "Tech Meetup" [ref=e61]
            - generic [ref=e63]: Conference
          - generic [ref=e64]:
            - link "Tech Meetup" [ref=e65] [cursor=pointer]:
              - /url: /events/63815
              - heading "Tech Meetup" [level=3] [ref=e66]
            - generic [ref=e67]:
              - generic [ref=e68]:
                - img [ref=e69]
                - generic [ref=e71]: Mon, 20 Jul
              - generic [ref=e72]:
                - img [ref=e73]
                - generic [ref=e75]: TCS Campus, Hyderabad
            - generic [ref=e76]:
              - generic [ref=e77]:
                - paragraph [ref=e78]: $500
                - generic [ref=e79]: 1000 seats available
              - link "Book Now" [ref=e80] [cursor=pointer]:
                - /url: /events/63815
        - article [ref=e81]:
          - generic [ref=e82]:
            - img "Tech Meetup" [ref=e83]
            - generic [ref=e85]: Conference
          - generic [ref=e86]:
            - link "Tech Meetup" [ref=e87] [cursor=pointer]:
              - /url: /events/63808
              - heading "Tech Meetup" [level=3] [ref=e88]
            - generic [ref=e89]:
              - generic [ref=e90]:
                - img [ref=e91]
                - generic [ref=e93]: Mon, 20 Jul
              - generic [ref=e94]:
                - img [ref=e95]
                - generic [ref=e97]: TCS Campus, Hyderabad
            - generic [ref=e98]:
              - generic [ref=e99]:
                - paragraph [ref=e100]: $500
                - generic [ref=e101]: 1000 seats available
              - link "Book Now" [ref=e102] [cursor=pointer]:
                - /url: /events/63808
        - article [ref=e103]:
          - generic [ref=e104]:
            - img "Tech Meetup" [ref=e105]
            - generic [ref=e107]: Conference
          - generic [ref=e108]:
            - link "Tech Meetup" [ref=e109] [cursor=pointer]:
              - /url: /events/63764
              - heading "Tech Meetup" [level=3] [ref=e110]
            - generic [ref=e111]:
              - generic [ref=e112]:
                - img [ref=e113]
                - generic [ref=e115]: Mon, 20 Jul
              - generic [ref=e116]:
                - img [ref=e117]
                - generic [ref=e119]: TCS Campus, Hyderabad
            - generic [ref=e120]:
              - generic [ref=e121]:
                - paragraph [ref=e122]: $500
                - generic [ref=e123]: 967 seats available
              - link "Book Now" [ref=e124] [cursor=pointer]:
                - /url: /events/63764
      - link "Add New Event" [ref=e126] [cursor=pointer]:
        - /url: /admin/events
        - button "Add New Event" [ref=e127]:
          - img [ref=e128]
          - text: Add New Event
  - contentinfo [ref=e130]:
    - generic [ref=e131]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - heading "Rahul Shetty Academy" [level=3] [ref=e134]
          - paragraph [ref=e135]: India's leading QA automation training academy — empowering engineers to build real-world testing skills.
        - generic [ref=e136]:
          - heading "Popular Courses" [level=3] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Selenium WebDriver with Java" [ref=e140] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e141]:
              - link "Playwright with JavaScript" [ref=e142] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e143]:
              - link "RestAssured API Testing" [ref=e144] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e145]:
              - link "Cypress End-to-End Testing" [ref=e146] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
            - listitem [ref=e147]:
              - link "Appium Mobile Testing" [ref=e148] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com
        - generic [ref=e149]:
          - heading "QA Job Hiring Platform" [level=3] [ref=e150]
          - paragraph [ref=e151]: Get hired faster — take skill assessments trusted by top QA employers worldwide.
          - link "techsmarthire.com →" [ref=e152] [cursor=pointer]:
            - /url: https://techsmarthire.com
        - generic [ref=e153]:
          - heading "EventHub Practice App" [level=3] [ref=e154]
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link "Browse Events" [ref=e157] [cursor=pointer]:
                - /url: /events
            - listitem [ref=e158]:
              - link "My Bookings" [ref=e159] [cursor=pointer]:
                - /url: /bookings
            - listitem [ref=e160]:
              - link "Manage Events" [ref=e161] [cursor=pointer]:
                - /url: /admin/events
            - listitem [ref=e162]:
              - link "API Documentation" [ref=e163] [cursor=pointer]:
                - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e164]:
        - paragraph [ref=e165]: © 2026 Rahul Shetty Academy. All rights reserved.
        - generic [ref=e166]:
          - link "rahulshettyacademy.com →" [ref=e167] [cursor=pointer]:
            - /url: https://rahulshettyacademy.com
          - link "techsmarthire.com →" [ref=e168] [cursor=pointer]:
            - /url: https://techsmarthire.com
  - alert [ref=e169]
```

# Test source

```ts
  1   | import { test } from '../../fixtures/baseFixture';
  2   | import { expect } from '@playwright/test';
  3   | import testData from '../../test-data/eventhub-data.json';
  4   | import * as allure from 'allure-js-commons';
  5   | 
  6   | test.describe('Booking Management', () => {
  7   | 
  8   |     test('Book maximum allowed tickets (10) & cannot increase above limit', async ({ loginPage, dashboardPage, eventsTabPage, eventBookingPage, page }) => {
  9   | 
  10  |         // Metadata
  11  |         await allure.epic('EventHub Application');
  12  |         await allure.feature('Booking Management');
  13  |         await allure.story('Max Ticket Booking Validation');
  14  |         await allure.severity('critical');
  15  |         await allure.owner('Sarthak');
  16  |         await allure.tag('regression');
  17  |         await allure.description('Verify user can book maximum 10 tickets and cannot exceed limit');
  18  | 
  19  | 
  20  |         // Step 1: Navigate to events
  21  |         await allure.step('Navigate to Events page', async () => {
  22  |             await expect(dashboardPage.featuredEventsHeading()).toBeVisible();
  23  |             await dashboardPage.navigateToAllEvents();
  24  |             await expect(eventsTabPage.upcomingEventsHeading()).toBeVisible();
  25  |         });
  26  | 
  27  |         // Step 2: Search event
  28  |         await allure.step('Search for specific event', async () => {
  29  |             await eventsTabPage.searchInput().fill(testData.EventsPage.eventDetails.title);
> 30  |             await expect(eventsTabPage.bookNowButton()).toHaveCount(1);
      |                                                         ^ Error: expect(locator).toHaveCount(expected) failed
  31  |         });
  32  | 
  33  |         // Step 3: Open booking page
  34  |         await allure.step('Navigate to booking page', async () => {
  35  |             await eventsTabPage.navigateToEventBookingPage();
  36  |             await expect(eventBookingPage.bookTicketHeading()).toBeVisible();
  37  |         });
  38  | 
  39  |         // Step 4: Select tickets
  40  |         await allure.step('Select 10 tickets and validate limit', async () => {
  41  |             await eventBookingPage.bookTickets(10);
  42  |             const selectedTickets = (await eventBookingPage.ticketCount().textContent())?.trim();
  43  |             await expect(Number(selectedTickets)).toBe(10);
  44  |             await expect(eventBookingPage.ticketIncrementBtn()).toBeDisabled();
  45  |         });
  46  | 
  47  |         // Step 5: Enter user details
  48  |         await allure.step('Enter booking details', async () => {
  49  |             await eventBookingPage.enterUserDetailsInForm(
  50  |                 testData.EventsBookingPage.name,
  51  |                 testData.LoginPage.validUser.email,
  52  |                 testData.EventsBookingPage.phoneNo
  53  |             );
  54  |         });
  55  | 
  56  |         //  Step 6: Validate pricing
  57  |         await allure.step('Validate total price calculation', async () => {
  58  |             const ticketPrice = Number(eventBookingPage.getEventTicketPrice());
  59  |             const totalPrice = Number(eventBookingPage.getTotalPrice());
  60  | 
  61  |             await allure.attachment(
  62  |                 'Pricing Details',
  63  |                 JSON.stringify({ ticketPrice, totalPrice }, null, 2),
  64  |                 'application/json'
  65  |             );
  66  | 
  67  |             await expect(totalPrice).toBe(ticketPrice * 10);
  68  |         });
  69  | 
  70  |         // Step 7: Confirm booking
  71  |         await allure.step('Confirm booking and validate', async () => {
  72  |             await eventBookingPage.bookTheEvent();
  73  | 
  74  |             await expect(eventBookingPage.bookingConfirmedHeading())
  75  |                 .toContainText(testData.EventsBookingPage.bookinConfirmedHeading);
  76  | 
  77  |             const tickets = await eventBookingPage.getNoOfTicketBooked();
  78  |             await expect(Number(tickets)).toBe(10);
  79  |         });
  80  | 
  81  |     });
  82  | 
  83  | 
  84  |     test('Book minimum single ticket & cannot decrease below 1', async ({ loginPage, dashboardPage, eventsTabPage, eventBookingPage }) => {
  85  | 
  86  |         // Metadata
  87  |         await allure.epic('EventHub Application');
  88  |         await allure.feature('Booking Management');
  89  |         await allure.story('Minimum Ticket Booking Validation');
  90  |         await allure.severity('normal');
  91  |         await allure.owner('Sarthak');
  92  |         await allure.tag('smoke');
  93  |         await allure.description('Verify user can book minimum 1 ticket and cannot decrease below 1');
  94  | 
  95  | 
  96  |         //  Step 1: Navigate to event
  97  |         await allure.step('Navigate to specific event', async () => {
  98  |             await dashboardPage.navigateToAllEvents();
  99  |             await eventsTabPage.searchInput().fill(testData.EventsPage.eventDetails.title);
  100 |             await expect(eventsTabPage.bookNowButton()).toHaveCount(1);
  101 |         });
  102 | 
  103 |         // Step 2: Open booking page
  104 |         await allure.step('Open booking page', async () => {
  105 |             await eventsTabPage.navigateToEventBookingPage();
  106 |             await expect(eventBookingPage.bookTicketHeading()).toBeVisible();
  107 |         });
  108 | 
  109 |         //  Step 3: Validate default ticket
  110 |         await allure.step('Validate minimum ticket constraint', async () => {
  111 |             const defaultCount = await eventBookingPage.getSelectedTicketCount();
  112 |             await expect(Number(defaultCount)).toBe(1);
  113 |             await expect(eventBookingPage.ticketDecrementBtn()).toBeDisabled();
  114 |         });
  115 | 
  116 |         //  Step 4: Book ticket
  117 |         await allure.step('Book single ticket', async () => {
  118 |             await eventBookingPage.bookTickets(1);
  119 |             await eventBookingPage.enterUserDetailsInForm(
  120 |                 testData.EventsBookingPage.name,
  121 |                 testData.LoginPage.validUser.email,
  122 |                 testData.EventsBookingPage.phoneNo
  123 |             );
  124 |         });
  125 | 
  126 |         //  Step 5: Validate price
  127 |         await allure.step('Validate pricing for single ticket', async () => {
  128 |             const ticketPrice = Number(eventBookingPage.getEventTicketPrice());
  129 |             const totalPrice = Number(eventBookingPage.getTotalPrice());
  130 | 
```