-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL,
    "head" TEXT NOT NULL,
    "desc" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");
