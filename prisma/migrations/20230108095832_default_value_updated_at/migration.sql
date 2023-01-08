-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "answer" TEXT NOT NULL,
    "alumnisId" INTEGER NOT NULL,
    "question_code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Answers_alumnisId_fkey" FOREIGN KEY ("alumnisId") REFERENCES "Alumnis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answers" ("alumnisId", "answer", "createdAt", "id", "question_code", "updatedAt") SELECT "alumnisId", "answer", "createdAt", "id", "question_code", "updatedAt" FROM "Answers";
DROP TABLE "Answers";
ALTER TABLE "new_Answers" RENAME TO "Answers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
