import { ByNowButton } from './BuyNowButton'
import PageOne from '../assets/page-one.png'
import PageTwo from '../assets/page-two.png'

export function Oportunity() {
  return (
    <div className="mt-10 container mx-auto pb-44 max-w-7xl flex items-center gap-4">
      <div className="content min-w-[35%]">
        <h2 className="text-[#921F3E] font-bold uppercase text-4xl mb-4 ">
          Não perca essa oportunidade!
        </h2>
        <p className="mb-32 text-lg">
          Você está prestes a dar um passo fundamental em sua jornada de
          conhecimento na área da saúde.
        </p>
        <ByNowButton />
      </div>
      <figure className="mr-4 -translate-y-32 border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)]">
        <img src={PageOne} alt="" />
      </figure>
      <figure className="translate-y-32 border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)]">
        <img src={PageTwo} alt="" />
      </figure>
    </div>
  )
}
