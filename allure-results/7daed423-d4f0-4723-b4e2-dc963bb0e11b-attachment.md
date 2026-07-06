# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: booking-management\admin-booking-operations.spec.ts >> Admin Booking Operations >> Verify that admin can view and validate booking details
- Location: tests\booking-management\admin-booking-operations.spec.ts:8:9

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('tbody tr').first().locator('td').nth(6).locator('span')

```

# Test source

```ts
  1  | import { test } from '../../fixtures/baseFixture';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | 
  5  | 
  6  | test.describe('Admin Booking Operations', () => {
  7  | 
  8  |     test('Verify that admin can view and validate booking details', async ({ page }) => {
  9  |         /** Verify that admin is on dashboard page*/
  10 | 
  11 |         const dashboardHeading = await page.locator('h1 +  p').innerText();
  12 |         await expect(dashboardHeading).toContain('From tech conferences to live concerts');
  13 | 
  14 |         /** Navigate to Manage Booking Page*/
  15 |         await page.getByRole('button', { name: 'Admin' }).click();
  16 |         await page.getByRole('link', { name: 'Manage Bookings' }).click();
  17 | 
  18 |         /*Verify that user is in Manage  Booking Page* */
  19 |         expect(page.getByRole('heading' , {name: 'Manage Bookings'})).toBeVisible();
  20 | 
> 21 |         const confirmStatus = await page.locator('tbody tr').first().locator('td').nth(6).locator('span').innerText();
     |                                                                                                           ^ Error: locator.innerText: Target page, context or browser has been closed
  22 |         await expect(confirmStatus).toEqual('Confirmed');
  23 | 
  24 |         
  25 | 
  26 | 
  27 |     })
  28 | 
  29 | 
  30 | 
  31 | });
```