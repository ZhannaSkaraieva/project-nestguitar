/*
  Warnings:

  - You are about to drop the column `stripePaymentIntentId` on the `Payment` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Payment_stripePaymentIntentId_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "stripePaymentIntentId";
