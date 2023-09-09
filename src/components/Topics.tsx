import { SealCheck } from '@phosphor-icons/react'
import { ByNowButton } from './BuyNowButton'
import Hand from '../assets/hand.png'
export function Topics() {
  const topics = [
    'Eixos e planos de seccção do corpo humano;',
    'Nomenclatura de todos os ossos do corpo humano e suas estruturas;',
    'Porque as articulações são importantes para o corpo humano e suas classificações;',
    'Ilustrações detalhadas e explicações didáticas sobre todas as estruturas;',
    'Secção de revisão ao término de cada capítulo;',
  ]

  return (
    <div className="mt-10 container mx-auto pb-44 max-w-4xl relative">
      <p className="text-xl mx-auto text-center">
        Nosso e-book possui{' '}
        <strong>ilustrações detalhadas e explicações claras</strong> sobre
        sistemas orgânicos, estruturas e funções, proporcionando aos estudantes
        uma base sólida de apoio para cursar com <strong>êxito</strong> a
        disciplina de anatomia durante a graduação.
      </p>
      <h3 className="text-[#921f3E] font-bold text-center text-lg mt-8">
        Você vai encontrar nesse e-book conteúdos como:
      </h3>
      <ul className="mx-auto mt-4">
        {topics.map((topic) => (
          <li className="flex items-center gap-2 mb-4" key={topic}>
            <span>
              <SealCheck size={32} weight="fill" color="#921f3E" />
            </span>
            <span className="bg-[#921f3E] text-xl text-white w-fit p-2">
              {topic}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <ByNowButton />
      </div>
      <img
        src={Hand}
        alt=""
        className="absolute max-h-[600px] right-[-30%] mix-blend-multiply top-[2rem]"
      />
    </div>
  )
}
