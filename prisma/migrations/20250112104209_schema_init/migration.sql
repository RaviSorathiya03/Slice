/*
  Warnings:

  - The primary key for the `Subscription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Automation" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Dms" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Integrations" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Keyword" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Listener" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Trigger" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
