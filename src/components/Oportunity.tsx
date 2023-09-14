import { ByNowButton } from './BuyNowButton'
import PageOne from '../assets/page-one.png'
import PageTwo from '../assets/page-two.png'
import Column from '../assets/column.png'

export function Oportunity() {
  return (
    <div className="px-4 mt-10 container mx-auto pb-14 max-w-7xl relative flex items-center gap-4 flex-col lg:flex-row">
      <div className="order-2 lg:order-none content min-w-[35%] mt-4 lg:mt-0 mb-4 lg:mb-0">
        <h2 className="text-[#921F3E] font-bold uppercase text-2xl lg:text-4xl mb-4 ">
          Não perca essa oportunidade!
        </h2>
        <p className="lg:mb-12 md:mb-32 text-base md:text-lg">
          Você está prestes a dar um passo fundamental em sua jornada de
          conhecimento na área da saúde.
        </p>
        <ByNowButton />
      </div>
      <figure className="order-1 lg:order-none lg:mr-4 lg:-translate-y-32 border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)]">
        <img src={PageOne} alt="" />
      </figure>
      <figure className="order-3 lg:order-none lg:translate-y-32 border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)]">
        <img src={PageTwo} alt="" />
      </figure>
      <img
        src={Column}
        alt=""
        className="absolute max-h-[50vw] left-[-40%] mix-blend-multiply top-[-12rem]"
      />
    </div>
  )
}
