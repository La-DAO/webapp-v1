-- DropForeignKey
ALTER TABLE "WaitlistApplication" DROP CONSTRAINT "WaitlistApplication_userId_fkey";

-- AlterTable
ALTER TABLE "WaitlistApplication" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "WaitlistApplication" ADD CONSTRAINT "WaitlistApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
