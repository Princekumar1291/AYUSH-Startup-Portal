/*
  Warnings:

  - Added the required column `email` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `founder` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_startupId_fkey";

-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "founder" TEXT NOT NULL;
