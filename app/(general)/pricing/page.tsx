import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta es la pagina de precios de mis servicios',
  keywords:['About Page','Guillermo','informació,','...']
};

export default function PricingPage() {
    return (
      <>
        <span className="text-7xl">Pricing Page</span>
      </>
  
    )
  }