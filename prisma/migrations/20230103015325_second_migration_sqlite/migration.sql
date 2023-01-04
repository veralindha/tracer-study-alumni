-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Alumnis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nim" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "npwp" TEXT,
    "nama" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "angkatan" TEXT,
    "lulus" TEXT,
    "alamat" TEXT,
    "telepon" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tracered" TEXT NOT NULL DEFAULT 'false',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "answer" TEXT NOT NULL,
    "alumnisId" INTEGER NOT NULL,
    "questionsId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Answers_alumnisId_fkey" FOREIGN KEY ("alumnisId") REFERENCES "Alumnis" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Alumnis_nim_key" ON "Alumnis"("nim");

-- CreateIndex
CREATE UNIQUE INDEX "Alumnis_email_key" ON "Alumnis"("email");
