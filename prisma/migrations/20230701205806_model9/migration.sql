/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stateId` on the `Address` table. All the data in the column will be lost.
  - Added the required column `type_state` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_stateId_fkey";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "stateId",
ADD COLUMN     "type_state" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("idAddress", "type_state");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_type_state_fkey" FOREIGN KEY ("type_state") REFERENCES "typeState"("idTypeState") ON DELETE RESTRICT ON UPDATE CASCADE;
