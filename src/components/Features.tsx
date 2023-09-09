import { ByNowButton } from './BuyNowButton'

export function Features() {
  const features = [
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
    {
      title: 'Base sólida de conhecimento',
      text: 'Este e-book abrangente oferece uma visão detalhada dos ossos e articulações, fornecendo a você as informações necessárias para entender os movimentos humanos.',
    },
  ]
  return (
    <div className="container mx-auto pb-44 max-w-7xl">
      <h2 className="text-center font-bold text-5xl text-[#921F3E] mb-8">
        POR QUE O E-BOOK É IMPERDÍVEL?
      </h2>
      <div className="flex gap-12">
        {features.map((feature) => (
          <div className="feature text-center" key={feature.title}>
            <h3 className="text-[#921F3E] font-bold text-xl mb-4">
              Base sólida de conhecimento
            </h3>
            <p className=" text-[#921F3E] border-2 border-[#921F3E] shadow-[10px_10px_0_1px_rgba(96,17,38,1)] text-lg p-3">
              Este e-book abrangente oferece uma visão detalhada dos ossos e
              articulações, fornecendo a você as informações necessárias para
              entender os movimentos humanos.
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
