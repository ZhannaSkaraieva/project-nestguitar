/*
  Warnings:

  - The primary key for the `Guitar` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."Guitar" DROP CONSTRAINT "Guitar_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Guitar_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Guitar_id_seq";
