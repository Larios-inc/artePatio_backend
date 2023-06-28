/*
  Warnings:

  - The primary key for the `descImg` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "descImg" DROP CONSTRAINT "descImg_pkey",
ADD CONSTRAINT "descImg_pkey" PRIMARY KEY ("idDescImg", "DescriptionProductID");
