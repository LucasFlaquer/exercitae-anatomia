import { ByNowButton } from './BuyNowButton'

export function Topics() {
  const topics = [
    'Eixos e planos de seccção do corpo humano;',
    'Nomenclatura de todos os ossos do corpo humano e suas estruturas;',
    'Porque as articulações são importantes para o corpo humano e suas classificações;',
    'Ilustrações detalhadas e explicações didáticas sobre todas as estruturas;',
    'Secção de revisão ao término de cada capítulo;',
  ]

  return (
    <div className="mt-10 container mx-auto pb-44 max-w-3xl">
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
          <li
            className="bg-[#921f3E] mb-4 text-xl text-white w-fit p-2"
            key={topic}
          >
            {topic}
          </li>
        ))}
      </ul>
      <div className="text-center">
        <ByNowButton />
      </div>
    </div>
  )
}
