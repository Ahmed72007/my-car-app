// app/components/FeaturedCars.tsx
import Link from 'next/link';

export default function FeaturedCars() {
  const cars = [
    { name: 'Toyota Corolla', slug: 'toyota-corolla' },
    { name: 'Honda Civic', slug: 'honda-civic' },
    // Add more cars as needed
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl mb-4">Featured Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map(car => (
          <div key={car.slug} className="border p-4 rounded">
            <Link href={`/${car.slug}`} className="text-lg text-blue-500">
              {car.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
