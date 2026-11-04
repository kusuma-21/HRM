# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.spec.js >> OrangeHRM PIM workflow >> TC05 - navigate to PIM, add an employee, and log out
- Location: tests\navigation.spec.js:17:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Personal Details' }) with timeout 7000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })
  - Test timeout of 30000ms exceeded.

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Test1793250281400
- textbox "Middle Name"
- textbox "Last Name": Employee
- text: Employee Id
- textbox: "0459"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/Loginpage');
  3  | const { DashboardPage } = require('../pages/Dashboard');
  4  | const { PIMPage } = require('../pages/PIM');
  5  | const { username, password } = require('../test-data/credentials');
  6  | 
  7  | test.describe('OrangeHRM PIM workflow', () => {
  8  |   test.beforeEach(async ({ page }) => {
  9  |     const login = new LoginPage(page);
  10 |     const dashboard = new DashboardPage(page);
  11 | 
  12 |     await login.open();
  13 |     await login.login(username, password);
  14 |     await dashboard.expectLoaded();
  15 |   });
  16 | 
  17 |   test('TC05 - navigate to PIM, add an employee, and log out', async ({ page }) => {
  18 |     const dashboard = new DashboardPage(page);
  19 |     const pim = new PIMPage(page);
  20 |     const firstName = `Test${Date.now()}`;
  21 |     const lastName = 'Employee';
  22 | 
  23 |     await dashboard.openPIM();
  24 |     await expect(page).toHaveURL(/pim/);
  25 |     await expect(page.getByRole('heading', { name: 'PIM' })).toBeVisible();
  26 | 
  27 |     await pim.openAddEmployee();
  28 |     await pim.addEmployee(firstName, lastName);
  29 | 
> 30 |     await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  31 |     await expect(pim.firstName).toHaveValue(firstName);
  32 |     await expect(pim.lastName).toHaveValue(lastName);
  33 | 
  34 |     await dashboard.logout();
  35 |     await expect(page).toHaveURL(/auth\/login/);
  36 |   });
  37 | });
  38 | 
```