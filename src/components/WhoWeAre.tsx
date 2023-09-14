import Instagram from '../assets/insta.png'
import Base from '../assets/base.png'

export function WhoWeAre() {
  return (
    <div className="px-4 container flex flex-col-reverse lg:flex-row justify-between gap-8 max-w-6xl mx-auto items-center pb-8 relative">
      <div className="relative">
        <figure className="bg-[#921F3E] rounded-3xl overflow-hidden max-w-[350px] ">
          <img
            src={Instagram}
            alt=""
            className="border-[10px] border-[#921F3E]"
          />
        </figure>
        <a
          href="https://www.instagram.com/exercitae/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:bg-[rgba(96,17,38,0.8)] absolute lg:-right-16 bottom-16 text-xl uppercase text-white font-[Open Sans] block p-1 bg-[#921F3E] font-semibold"
        >
          @ Exercitae
        </a>
      </div>
      <div className="max-w-2xl">
        <h2 className="font-bold text-3xl lg:text-6xl text-[#921F3E] mb-8">
          Quem Somos?
        </h2>
        <p className="mb-4 text-lg">
          O <strong>ExercitAÊ</strong> é um projeto inovador que visa promover a
          disseminação do conhecimento na área da Educação Física e saúde,
          atendendo tanto a estudantes como ao público em geral.
        </p>
        <p className="text-lg">
          Nosso <strong>objetivo</strong> é <strong>transmitir</strong> o máximo
          de informações possíveis para que as pessoas tenham uma qualidade de
          vida melhor, <strong>oferecer</strong> recursos educacionais e suporte
          de alta qualidade na área da Educação Física e{' '}
          <strong>garantir</strong> que todo o conhecimento gerado pela nossa
          área chegue ao público e que agrege de forma positiva na vida de todas
          as pessoas.
        </p>
      </div>
      <img
        src={Base}
        alt=""
        className="absolute max-h-[660px] right-[-30%] mix-blend-multiply top-[-10%] "
      />
    </div>
  )
}
