import MainEbook from '../assets/capa-anatomia.png'
import { ByNowButton } from './BuyNowButton'
import Bones from '../assets/chest.png'

export function Banner() {
  return (
    <div
      className={`container px-4 bg-[banner_bones]  mx-auto flex items-center py-10 justify-center gap-10 relative flex-col lg:flex-row`}
    >
      <img
        src={Bones}
        alt=""
        className="z-0 absolute left-[-10rem] md:left-0 top-[10rem] md:top-[2rem] max-h-[500px] mix-blend-multiply"
      />
      <div className="max-w-lg">
        <h1 className="text-[#921F3E] font-bold uppercase text-2xl md:text-6xl mb-4">
          Bem-vindo(a)
          <small className="block  md:text-2xl mt-4 font-semibold">
            ao e-book &quot;anatomia para calouros&quot;
          </small>
        </h1>
        <p>
          Cada novo estudante que ingressa na <strong>área da saúde</strong>{' '}
          inevitavelmente encontrará, ao longo de sua graduação, a disciplina de{' '}
          <strong>anatomia</strong>. Navegar por esse percurso pode se revelar
          desafiador, dada a complexidade do corpo humano. É nesse contexto que
          nosso <strong>e-book</strong> surge, trazendo consigo uma{' '}
          <strong>abordagem didática e de fácil compreensão</strong>, destinada
          a <strong>apoiar</strong> e <strong>guiar</strong> você durante essa
          trajetória.
        </p>
        <div className="text-center md:text-left">
          <ByNowButton />
        </div>
      </div>
      <figure className="border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)] z-[1]">
        <img src={MainEbook} alt="" className="max-w-[300px] md:max-w-md" />
      </figure>
    </div>
  )
}
