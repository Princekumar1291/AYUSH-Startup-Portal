/*
  Warnings:

  - You are about to drop the column `password` on the `Mentor` table. All the data in the column will be lost.
  - Added the required column `cataegory` to the `Mentor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "password",
ADD COLUMN     "cataegory" TEXT NOT NULL;
