import type { Metadata } from "next";
import LbrUnlockClient from "@/components/LbrUnlockClient";

export const metadata: Metadata = {
  title: "Unlock the library",
};

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <LbrUnlockClient code={code} />
    </div>
  );
}
