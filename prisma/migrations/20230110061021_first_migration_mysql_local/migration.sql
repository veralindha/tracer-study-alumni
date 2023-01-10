-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alumnis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nim` VARCHAR(191) NOT NULL,
    `nik` VARCHAR(191) NOT NULL,
    `npwp` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `angkatan` VARCHAR(191) NULL,
    `lulus` VARCHAR(191) NULL,
    `prodi` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `telepon` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tracered` VARCHAR(191) NOT NULL DEFAULT 'false',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Alumnis_nim_key`(`nim`),
    UNIQUE INDEX `Alumnis_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `answer` VARCHAR(191) NOT NULL,
    `alumnisId` INTEGER NOT NULL,
    `question_code` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Answers` ADD CONSTRAINT `Answers_alumnisId_fkey` FOREIGN KEY (`alumnisId`) REFERENCES `Alumnis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
