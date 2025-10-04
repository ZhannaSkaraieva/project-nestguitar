/*
  Warnings:

  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Product_title_key";

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "public"."Product"("name");
