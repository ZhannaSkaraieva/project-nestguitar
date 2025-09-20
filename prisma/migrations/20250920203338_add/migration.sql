/*
  Warnings:

  - You are about to drop the column `brand` on the `Guitar` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Guitar` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vendorCode]` on the table `Guitar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `article` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviews` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strings` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vendorCode` to the `Guitar` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Guitar` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Guitar" DROP COLUMN "brand",
DROP COLUMN "name",
ADD COLUMN     "article" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "reviews" TEXT NOT NULL,
ADD COLUMN     "stocked" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "strings" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "vendorCode" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Guitar_vendorCode_key" ON "public"."Guitar"("vendorCode");
