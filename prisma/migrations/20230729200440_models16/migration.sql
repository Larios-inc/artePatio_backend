/*
  Warnings:

  - The primary key for the `PhoneNumber` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `permissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_permissionsId_fkey";

-- AlterTable
ALTER TABLE "PhoneNumber" DROP CONSTRAINT "PhoneNumber_pkey",
ADD CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("idPhoneNumber");

-- DropTable
DROP TABLE "permissions";

-- CreateTable
CREATE TABLE "Permissions" (
    "idPermissions" TEXT NOT NULL,
    "permission" TEXT NOT NULL,
    "descriptionPermission" TEXT NOT NULL,
    "create_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_At" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("idPermissions")
);

-- CreateTable
CREATE TABLE "PermissionsToRole" (
    "permissionId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "PermissionsToRole_pkey" PRIMARY KEY ("permissionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_idPermissions_key" ON "Permissions"("idPermissions");

-- CreateIndex
CREATE INDEX "PermissionsToRole_roleId_idx" ON "PermissionsToRole"("roleId");

-- CreateIndex
CREATE INDEX "PhoneNumber_ContactId_idx" ON "PhoneNumber"("ContactId");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "Permissions"("idPermissions") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionsToRole" ADD CONSTRAINT "PermissionsToRole_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permissions"("idPermissions") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionsToRole" ADD CONSTRAINT "PermissionsToRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;
