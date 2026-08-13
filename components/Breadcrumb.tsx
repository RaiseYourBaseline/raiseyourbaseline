import Link from "next/link";

export default function Breadcrumb({
  current,
  accentClassName = "text-academy-accent",
}: {
  current: string;
  accentClassName?: string;
}) {
  return (
    <span className={`text-[13px] ${accentClassName}`}>
      <Link href="/" className="hover:underline">
        Raise Your Baseline
      </Link>
      <span className="mx-1.5">&rsaquo;</span>
      {current}
    </span>
  );
}
