import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ButtonDown from '@/components/ui/ButtonDown'
import ProductHunt from '@/components/ui/ProductHunt'
import IMage from '@/components/ui/image'

export default function Home() {
  return (
    <main className="">
      <Header />
      <ProductHunt />
      <Hero />
      <ButtonDown />

      <IMage />
      <img src="/public/img.jpg" alt="" />
    </main>
  )
}
