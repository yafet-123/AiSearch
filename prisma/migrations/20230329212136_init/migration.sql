-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "UserName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "resetToken" VARCHAR(255),
    "Password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "CategoryName" VARCHAR(255) NOT NULL,
    "user_id" INTEGER,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Detail" (
    "detail_id" SERIAL NOT NULL,
    "Header" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "like" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "service" TEXT[],
    "user_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("detail_id")
);

-- CreateTable
CREATE TABLE "DetailCategory" (
    "detail_category_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "category_id" INTEGER NOT NULL,
    "detail_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetailCategory_pkey" PRIMARY KEY ("detail_category_id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "author_id" INTEGER NOT NULL,
    "detail_id" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "author_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("author_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_UserName_key" ON "User"("UserName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_resetToken_key" ON "User"("resetToken");

-- CreateIndex
CREATE UNIQUE INDEX "Author_email_key" ON "Author"("email");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailCategory" ADD CONSTRAINT "DetailCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailCategory" ADD CONSTRAINT "DetailCategory_detail_id_fkey" FOREIGN KEY ("detail_id") REFERENCES "Detail"("detail_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetailCategory" ADD CONSTRAINT "DetailCategory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("author_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_detail_id_fkey" FOREIGN KEY ("detail_id") REFERENCES "Detail"("detail_id") ON DELETE CASCADE ON UPDATE CASCADE;
