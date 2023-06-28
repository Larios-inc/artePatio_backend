/*
  Warnings:

  - The primary key for the `DescriptionProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descImgId` on the `DescriptionProduct` table. All the data in the column will be lost.
  - Added the required column `DescriptionProductID` to the `descImg` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DescriptionProduct" DROP CONSTRAINT "DescriptionProduct_descImgId_fkey";

-- AlterTable
ALTER TABLE "DescriptionProduct" DROP CONSTRAINT "DescriptionProduct_pkey",
DROP COLUMN "descImgId",
ADD CONSTRAINT "DescriptionProduct_pkey" PRIMARY KEY ("idDescription", "productId");

-- AlterTable
ALTER TABLE "descImg" ADD COLUMN     "DescriptionProductID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "descImg" ADD CONSTRAINT "descImg_DescriptionProductID_fkey" FOREIGN KEY ("DescriptionProductID") REFERENCES "DescriptionProduct"("idDescription") ON DELETE RESTRICT ON UPDATE CASCADE;
