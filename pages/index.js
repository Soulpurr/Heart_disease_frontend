import Image from 'next/image'
import { Inter } from 'next/font/google'
import Heart from '@/components/Heart'
import Navbar from '@/components/Navbar'
import MidCard from '@/components/MidCard'
import Features from '@/components/Features'
import Scores from '@/components/Scores'

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
