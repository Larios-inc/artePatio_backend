/*
  Warnings:

  - You are about to drop the column `permissin` on the `permissions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[permission]` on the table `permissions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `permission` to the `permissions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "permissions_permissin_key";

-- AlterTable
ALTER TABLE "permissions" DROP COLUMN "permissin",
ADD COLUMN     "permission" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "permissions_permission_key" ON "permissions"("permission");
