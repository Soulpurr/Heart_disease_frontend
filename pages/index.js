import Image from 'next/image'
import { Inter } from 'next/font/google'
import Heart from '@/Components/Heart'
import Navbar from '@/Components/Navbar'
import MidCard from '@/Components/MidCard'
import Features from '@/Components/Features'
import Scores from '@/Components/Scores'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
        <div className="bg-[url(/heartt_p.jpg)] h-[100vh]">
        <Navbar/>
        <MidCard/>
        </div>
        <Heart/>
        <Features/>
        <Scores/>
      </div>
  )
}
