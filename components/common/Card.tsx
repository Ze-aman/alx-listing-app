import React from 'react'
import Image from 'next/image'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <Image src={image} alt={title} width={400} height={250} className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card
