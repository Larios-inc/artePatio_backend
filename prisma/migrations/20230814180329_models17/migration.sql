/*
  Warnings:

  - Added the required column `updated_At` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "google" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_At" TIMESTAMP(3) NOT NULL;
