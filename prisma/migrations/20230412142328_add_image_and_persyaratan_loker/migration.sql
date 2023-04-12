/*
  Warnings:

  - You are about to drop the column `deskripsi` on the `Loker` table. All the data in the column will be lost.
  - Added the required column `persyaratan` to the `Loker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Loker` DROP COLUMN `deskripsi`,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `persyaratan` VARCHAR(191) NOT NULL;
