-- CreateTable
CREATE TABLE "Product" (
    "idProduct" TEXT NOT NULL,
    "name_Product" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_Active" BOOLEAN NOT NULL DEFAULT true,
    "img_Main_Product" TEXT,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "DescriptionProduct" (
    "idDescription" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "desc_1" TEXT,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "productId" TEXT NOT NULL,

    CONSTRAINT "DescriptionProduct_pkey" PRIMARY KEY ("idDescription","productId")
);

-- CreateTable
CREATE TABLE "descImg" (
    "idDescImg" TEXT NOT NULL,
    "imgs" TEXT,
    "DescriptionProductID" TEXT NOT NULL,

    CONSTRAINT "descImg_pkey" PRIMARY KEY ("idDescImg","DescriptionProductID")
);

-- CreateTable
CREATE TABLE "Category" (
    "idCategory" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("idCategory")
);

-- CreateTable
CREATE TABLE "Orders" (
    "idOrders" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "order_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_amout" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("idOrders","userId")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "idOrderItems" TEXT NOT NULL,
    "quiantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("idOrderItems","orderId","productId")
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser","username","email","roleId")
);

-- CreateTable
CREATE TABLE "ContactInformation" (
    "idContact" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_Name" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ContactInformation_pkey" PRIMARY KEY ("idContact","userId")
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "idPhoneNumber" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "ContactId" TEXT NOT NULL,

    CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("idPhoneNumber","ContactId")
);

-- CreateTable
CREATE TABLE "Address" (
    "idAddress" TEXT NOT NULL,
    "address_line_1" TEXT NOT NULL,
    "address_line_2" TEXT,
    "address_line_3" TEXT,
    "city" TEXT NOT NULL,
    "type_state" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "ContactId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("idAddress","type_state")
);

-- CreateTable
CREATE TABLE "typeState" (
    "idTypeState" TEXT NOT NULL,
    "type_state" TEXT NOT NULL,
    "create_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Role" (
    "idRole" TEXT NOT NULL,
    "role_Name" TEXT NOT NULL,
    "create_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "permissionsId" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("idRole","permissionsId")
);

-- CreateTable
CREATE TABLE "permissions" (
    "idPermissions" TEXT NOT NULL,
    "permission" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("idPermissions")
);

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
CREATE UNIQUE INDEX "Product_idProduct_key" ON "Product"("idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_Product_key" ON "Product"("name_Product");

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

-- CreateIndex
CREATE UNIQUE INDEX "permissions_idPermissions_key" ON "permissions"("idPermissions");

-- CreateIndex
CREATE UNIQUE INDEX "permissions_permission_key" ON "permissions"("permission");

-- CreateIndex
CREATE UNIQUE INDEX "MonthlySale_idMonthSale_key" ON "MonthlySale"("idMonthSale");

-- CreateIndex
CREATE UNIQUE INDEX "TopSale_idTopSale_key" ON "TopSale"("idTopSale");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("idCategory") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DescriptionProduct" ADD CONSTRAINT "DescriptionProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "descImg" ADD CONSTRAINT "descImg_DescriptionProductID_fkey" FOREIGN KEY ("DescriptionProductID") REFERENCES "DescriptionProduct"("idDescription") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("idOrders") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactInformation" ADD CONSTRAINT "ContactInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhoneNumber" ADD CONSTRAINT "PhoneNumber_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "ContactInformation"("idContact") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_type_state_fkey" FOREIGN KEY ("type_state") REFERENCES "typeState"("idTypeState") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "ContactInformation"("idContact") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("idPermissions") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlySale" ADD CONSTRAINT "MonthlySale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlySale" ADD CONSTRAINT "MonthlySale_product_name_fkey" FOREIGN KEY ("product_name") REFERENCES "Product"("name_Product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopSale" ADD CONSTRAINT "TopSale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopSale" ADD CONSTRAINT "TopSale_product_name_fkey" FOREIGN KEY ("product_name") REFERENCES "Product"("name_Product") ON DELETE RESTRICT ON UPDATE CASCADE;
