// app/[car]/page.tsx
"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CarDetails() {
  const { car } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-3xl">Details for {car}</h1>
      {/* Add more car details here */}
      <Link href="/make-payment" className="text-blue-500">
        Make Payment
      </Link>
    </div>
  );
}
