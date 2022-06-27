-- CreateTable
CREATE TABLE "loja" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "produtos" VARCHAR(100) NOT NULL,
    "servicos" VARCHAR(100) NOT NULL,

    CONSTRAINT "loja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "loja_email_key" ON "loja"("email");
