import { expect, test } from '@playwright/test';

test('homepage renders key CTA across viewports', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page.getByTestId('home-hero')).toBeVisible();
  await expect(page.getByTestId('home-search-submit')).toBeVisible();
});

test('guest search flow reaches vehicle detail and checkout', async ({ page }) => {
  await page.goto('/search?pickup=mco&start=2026-04-18&end=2026-04-22&time=10:00');
  await expect(page.getByTestId('search-summary')).toBeVisible();
  await page
    .getByRole('link', { name: /Ver detalle|See details/ })
    .first()
    .click();
  await expect(page.getByTestId('booking-cta')).toBeVisible();
  await page.getByTestId('booking-cta').click();
  await expect(page.getByTestId('confirm-booking')).toBeVisible();
  await page.getByTestId('confirm-booking').click();
  await expect(page.getByTestId('confirmed-summary')).toBeVisible();
});

test('host flow is navigable', async ({ page }) => {
  await page.goto('/host');
  await page
    .getByRole('link', { name: /Publicar mi auto|List my car/ })
    .first()
    .click();
  await expect(page.getByTestId('host-wizard')).toBeVisible();
});

test('account pages render without broken navigation', async ({ page }) => {
  await page.goto('/account/trips');
  const sidebar = page.getByRole('complementary');
  await expect(sidebar.getByRole('link', { name: /Mensajes|Messages/ })).toBeVisible();
  await sidebar.getByRole('link', { name: /Mensajes|Messages/ }).click();
  await expect(page).toHaveURL(/\/account\/messages/);
  await page
    .getByRole('complementary')
    .getByRole('link', { name: /Guardados|Saved/ })
    .click();
  await expect(page).toHaveURL(/\/account\/wishlist/);
});
