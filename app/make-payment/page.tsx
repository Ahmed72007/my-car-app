// app/make-payment/page.tsx
"use client"
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function MakePayment() {
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here you can handle the payment logic (e.g., calling an API)
    
    // After successful payment processing, redirect to the Thank You page
    router.push('/thank-you');
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl">Make Payment</h1>
      <form onSubmit={handleSubmit}> {/* Attach the handleSubmit function here */}
        {/* Add your form fields here */}
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Submit Payment
        </button>
      </form>
    </div>
  );
}
