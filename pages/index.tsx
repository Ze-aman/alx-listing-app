import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  const listings = [
    { title: 'Modern Apartment', description: '2 bed, 2 bath in the city center.', image: '/assets/house1.jpg' },
    { title: 'Cozy Cottage', description: 'A peaceful getaway in the countryside.', image: '/assets/house2.jpg' },
    { title: 'Beach House', description: 'Enjoy sea views and fresh air.', image: '/assets/house3.jpg' },
  ]

  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Listings</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <Card key={index} {...listing} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button label="Load More" onClick={() => alert('Loading more...')} />
        </div>
      </main>
    </>
  )
}
