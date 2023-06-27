/*
  Warnings:

  - A unique constraint covering the columns `[name_Product]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Made the column `addressId` on table `ContactInformation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumberid` on table `ContactInformation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_addressId_fkey";

-- DropForeignKey
ALTER TABLE "ContactInformation" DROP CONSTRAINT "ContactInformation_phoneNumberid_fkey";

-- AlterTable
ALTER TABLE "ContactInformation" ALTER COLUMN "addressId" SET NOT NULL,
ALTER COLUMN "phoneNumberid" SET NOT NULL,
ADD CONSTRAINT "ContactInformation_pkey" PRIMARY KEY ("idContact", "addressId", "phoneNumberid");

-- AlterTable
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("idOrderItems", "orderId", "productId");

-- AlterTable
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_pkey" PRIMARY KEY ("idOrders", "id", "userId");

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("idUser", "username", "email", "roleId");

-- CreateTable
CREATE TABLE "MonthlySale" (
    "idMonthSale" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "revenue" DECIMAL(10,2) NOT NULL,
    "revenue_rank" INTEGER NOT NULL,

    CONSTRAINT "MonthlySale_pkey" PRIMARY KEY ("idMonthSale","customer_id","product_name")
);

-- CreateTable
CREATE TABLE "TopSale" (
    "idTopSale" TEXT NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "customer_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "revenue" DECIMAL(65,30) NOT NULL,
    "revenue_rank" INTEGER NOT NULL,

    CONSTRAINT "TopSale_pkey" PRIMARY KEY ("idTopSale","customer_id","product_name")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonthlySale_idMonthSale_key" ON "MonthlySale"("idMonthSale");

-- CreateIndex
CREATE UNIQUE INDEX "TopSale_idTopSale_key" ON "TopSale"("idTopSale");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_Product_key" ON "Product"("name_Product");

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("idAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_phoneNumberid_fkey" FOREIGN KEY ("phoneNumberid") REFERENCES "PhoneNumber"("idPhoneNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlySale" ADD CONSTRAINT "MonthlySale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlySale" ADD CONSTRAINT "MonthlySale_product_name_fkey" FOREIGN KEY ("product_name") REFERENCES "Product"("name_Product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopSale" ADD CONSTRAINT "TopSale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopSale" ADD CONSTRAINT "TopSale_product_name_fkey" FOREIGN KEY ("product_name") REFERENCES "Product"("name_Product") ON DELETE RESTRICT ON UPDATE CASCADE;
