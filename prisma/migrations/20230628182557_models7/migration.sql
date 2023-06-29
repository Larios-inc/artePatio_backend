/*
  Warnings:

  - The primary key for the `Orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `permissionsId` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_pkey",
ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("idOrders", "userId");

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "is_Active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "permissionsId" TEXT NOT NULL,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("idRole", "permissionsId");

-- CreateTable
CREATE TABLE "permissions" (
    "idPermissions" TEXT NOT NULL,
    "permissin" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("idPermissions")
);

-- CreateIndex
CREATE UNIQUE INDEX "permissions_idPermissions_key" ON "permissions"("idPermissions");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_permissin_key" ON "permissions"("permissin");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("idPermissions") ON DELETE RESTRICT ON UPDATE CASCADE;
