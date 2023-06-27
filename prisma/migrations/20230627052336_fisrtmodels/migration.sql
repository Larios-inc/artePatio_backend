-- CreateTable
CREATE TABLE "Product" (
    "idProduct" TEXT NOT NULL,
    "name_Product" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "img_Main_Product" TEXT,
    "descriptionId" TEXT,
    "categoeryId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DescriptionProduct" (
    "idDescription" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "descImgId" TEXT
);

-- CreateTable
CREATE TABLE "descImg" (
    "idDescImg" TEXT NOT NULL,
    "imgs" TEXT
);

-- CreateTable
CREATE TABLE "Category" (
    "idCategory" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Orders" (
    "idOrders" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "order_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_amout" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "idOrderItems" TEXT NOT NULL,
    "quiantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_Active" BOOLEAN NOT NULL DEFAULT true,
    "roleId" TEXT NOT NULL,
    "contactInfo_Id" TEXT
);

-- CreateTable
CREATE TABLE "ContactInformation" (
    "idContact" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_Name" TEXT,
    "addressId" TEXT,
    "phoneNumberid" TEXT
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "idPhoneNumber" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Address" (
    "idAddress" TEXT NOT NULL,
    "address_line_1" TEXT NOT NULL,
    "address_line_2" TEXT,
    "city" TEXT NOT NULL,
    "stateId" TEXT,
    "zip_code" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "typeState" (
    "idTypeState" TEXT NOT NULL,
    "type_state" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "idRole" TEXT NOT NULL,
    "role_Name" TEXT NOT NULL,
    "create_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_idProduct_key" ON "Product"("idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "DescriptionProduct_idDescription_key" ON "DescriptionProduct"("idDescription");

-- CreateIndex
CREATE UNIQUE INDEX "descImg_idDescImg_key" ON "descImg"("idDescImg");

-- CreateIndex
CREATE UNIQUE INDEX "Category_idCategory_key" ON "Category"("idCategory");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryName_key" ON "Category"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_idOrders_key" ON "Orders"("idOrders");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItems_idOrderItems_key" ON "OrderItems"("idOrderItems");

-- CreateIndex
CREATE UNIQUE INDEX "User_idUser_key" ON "User"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInformation_idContact_key" ON "ContactInformation"("idContact");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneNumber_idPhoneNumber_key" ON "PhoneNumber"("idPhoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneNumber_phone_number_key" ON "PhoneNumber"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Address_idAddress_key" ON "Address"("idAddress");

-- CreateIndex
CREATE UNIQUE INDEX "typeState_idTypeState_key" ON "typeState"("idTypeState");

-- CreateIndex
CREATE UNIQUE INDEX "typeState_type_state_key" ON "typeState"("type_state");

-- CreateIndex
CREATE UNIQUE INDEX "Role_idRole_key" ON "Role"("idRole");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_Name_key" ON "Role"("role_Name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_descriptionId_fkey" FOREIGN KEY ("descriptionId") REFERENCES "DescriptionProduct"("idDescription") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoeryId_fkey" FOREIGN KEY ("categoeryId") REFERENCES "Category"("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DescriptionProduct" ADD CONSTRAINT "DescriptionProduct_descImgId_fkey" FOREIGN KEY ("descImgId") REFERENCES "descImg"("idDescImg") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("idOrders") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contactInfo_Id_fkey" FOREIGN KEY ("contactInfo_Id") REFERENCES "ContactInformation"("idContact") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("idAddress") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_phoneNumberid_fkey" FOREIGN KEY ("phoneNumberid") REFERENCES "PhoneNumber"("idPhoneNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "typeState"("idTypeState") ON DELETE SET NULL ON UPDATE CASCADE;
