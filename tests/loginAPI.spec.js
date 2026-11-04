// const { test, expect, request } = require('@playwright/test');
// const { LoginPage } = require('../pages/Loginpage');
// const { DashboardPage } = require('../pages/Dashboard');
// const { username, password } = require('../test-data/credentials');


// // -------
// // const {test, expect,request} = require ("@playwright/test");
// // const apiPayload = {userEmail: "abc7690@gmail.com", userPassword: "Roundmount_2@"};
// // const orderpayload = [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}];


// // //login page
// // test('loginpage', async ({page, request})=>{
// //     const loginResponse = await request.post(
// //         "https://rahulshettyacademy.com/api/ecom/auth/login",
// //         { data: apiPayload }
// //     );

// //     expect(loginResponse.ok()).toBeTruthy();
// //     const loginResponseJson = await loginResponse.json();
// //     expect(loginResponseJson.token).toBeTruthy();
// //     const token = loginResponseJson.token;
// // ----------------------------------------------

// test.describe('OrangeHRM Authentication', () => {

//   test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.open();
//   });

//   test('TC01 - valid login opens dashboard', async ({ page }) => {
//     const login = new LoginPage(page);
//     const dashboard = new DashboardPage(page);

//     await login.login(username, password);

//     await expect(page).toHaveURL(/dashboard/);
//     await dashboard.expectLoaded();
//   });

//   test('TC02 - invalid credentials are rejected', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('invalid_user', 'wrong_password');

//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//   });

//   test('TC03 - empty login shows required validation', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.submitEmptyForm();

//     await expect(page.getByText('Required').first()).toBeVisible();
//   });

//   test.describe('Authenticated user', () => {
//     test.beforeEach(async ({ page }) => {
//       const login = new LoginPage(page);
//       const dashboard = new DashboardPage(page);

//       await login.login(username, password);
//       await dashboard.expectLoaded();
//     });

//     test('TC04 - logged-in user can log out', async ({ page }) => {
//       const login = new LoginPage(page);

//       await new DashboardPage(page).logout();

//       await expect(login.loginButton).toBeVisible();
//     });
//   });
// });