/*
  Warnings:

  - The primary key for the `ContactInformation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `addressId` on the `ContactInformation` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumberid` on the `ContactInformation` table. All the data in the column will be lost.
  - The primary key for the `PhoneNumber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contactInfo_Id` on the `User` table. All the data in the column will be lost.
  - Added the required column `ContactId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ContactInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ContactId` to the `PhoneNumber` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_addressId_fkey";

-- DropForeignKey
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_phoneNumberid_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_contactInfo_Id_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "ContactId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_pkey",
DROP COLUMN "addressId",
DROP COLUMN "phoneNumberid",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "ContactInformation_pkey" PRIMARY KEY ("idContact", "userId");

-- AlterTable
ALTER TABLE "PhoneNumber" DROP CONSTRAINT "PhoneNumber_pkey",
ADD COLUMN     "ContactId" TEXT NOT NULL,
ADD CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("idPhoneNumber", "ContactId");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contactInfo_Id";

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneNumber" ADD CONSTRAINT "PhoneNumber_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "ContactInformation"("idContact") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "ContactInformation"("idContact") ON DELETE RESTRICT ON UPDATE CASCADE;
