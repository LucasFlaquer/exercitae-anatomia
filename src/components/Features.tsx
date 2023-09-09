import Hearth from '../assets/hearth.png'
import { ByNowButton } from './BuyNowButton'

export function Features() {
  const features = [
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
    {
      title: 'Explicação acessível',
      text: 'Desenvolvido por especialistas na área, nosso e-book foi projetado para ser claro e acessível, tornando até os conceitos mais complexos compreensíveis para todos os níveis de aprendizado.',
    },
    {
      title: 'Ilustrações detalhadas',
      text: 'Visualize cada estrutura anatômica de maneira nítida e detalhada. Nossas ilustrações ajudam você a conectar a teoria à prática, auxiliando na compreensão do corpo humano em movimento.',
    },
    {
      title: 'Aplicação prática',
      text: 'Não se trata apenas de teoria. Compreenda como o conhecimento anatômico se traduz em exercícios, prevenção de lesões e treinamento personalizado.',
    },
    {
      title: 'Suporte para estudo',
      text: 'Este e-book é uma ferramenta valiosa para otimizar seu estudo. Prepare-se para provas, seminários e apresentações com informações confiáveis e detalhadas ao alcance de suas mãos.',
    },
  ]
  return (
    <div className="container mx-auto pb-14">
      <div className="relative mb-10">
        <h2 className="text-center font-bold text-5xl text-[#921F3E]">
          POR QUE O E-BOOK É{' '}
          <span className="block p-1 border-1">IMPERDÍVEL?</span>
        </h2>
        <img
          src={Hearth}
          alt=""
          className="absolute max-h-[360px] left-[50%] mix-blend-multiply top-[30%] -translate-y-1/2 -translate-x-1/2"
        />
      </div>

      <div className="flex gap-12 items-start justify-center">
        {features.map((feature) => (
          <div className="text-center w-80" key={feature.title}>
            <h3 className="flex items-center justify-center text-[#921F3E] font-bold text-xl min-h-[4rem]">
              {feature.title}
            </h3>
            <p className="h-[250px] text-[#921F3E] border-2 border-[#921F3E] shadow-[10px_10px_0_1px_rgba(96,17,38,1)] text-lg p-3">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <ByNowButton />
      </div>
    </div>
  )
}
