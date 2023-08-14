/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `img` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "img" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("idUser");

-- CreateIndex
CREATE INDEX "User_username_email_roleId_idx" ON "User"("username", "email", "roleId");
