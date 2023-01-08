/*
  Warnings:

  - You are about to drop the column `questionsId` on the `Answers` table. All the data in the column will be lost.
  - Added the required column `question_code` to the `Answers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Alumnis" ADD COLUMN "prodi" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "answer" TEXT NOT NULL,
    "alumnisId" INTEGER NOT NULL,
    "question_code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Answers_alumnisId_fkey" FOREIGN KEY ("alumnisId") REFERENCES "Alumnis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answers" ("alumnisId", "answer", "createdAt", "id", "updatedAt") SELECT "alumnisId", "answer", "createdAt", "id", "updatedAt" FROM "Answers";
DROP TABLE "Answers";
ALTER TABLE "new_Answers" RENAME TO "Answers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
