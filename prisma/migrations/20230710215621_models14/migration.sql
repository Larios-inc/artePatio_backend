/*
  Warnings:

  - Added the required column `descriptionPermission` to the `permissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_At` to the `permissions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "permissions_permission_key";

-- AlterTable
ALTER TABLE "permissions" ADD COLUMN     "create_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "descriptionPermission" TEXT NOT NULL,
ADD COLUMN     "update_At" TIMESTAMP(3) NOT NULL;
