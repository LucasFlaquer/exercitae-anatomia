import './index.css'
import { Banner } from './components/Banner'
import { Topics } from './components/Topics'
// import { Features } from './components/Features'
// import { Oportunity } from './components/Oportunity'
// import { WhoWeAre } from './components/WhoWeAre'

export function App() {
  return (
    <div className="bg-[#E8D8CE]">
      <Banner />
      <Topics />
      {/* 
      <Oportunity />
      <Features />
      <WhoWeAre /> */}
    </div>
  )
}
