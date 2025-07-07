import Navbar from "@/components/home/navbar";
import Hero from '@/components/home/hero'
import TopFoodCategory from '@/components/home/top-food-category'
import FAQ from '@/components/home/faq'
import Contact from '@/components/home/contact'
import Footer from '@/components/home/footer'


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TopFoodCategory />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
