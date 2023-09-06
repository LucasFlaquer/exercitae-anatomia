import MainEbook from '../assets/capa-anatomia.png'

export function Banner() {
  return (
    <div
      className={`bg-[url(src/assets/bones-chest.png)] bg-no-repeat bg-[banner_bones] container mx-auto flex items-center py-10 justify-center gap-10 `}
    >
      <div className="max-w-lg">
        <h1 className="text-[#921F3E] font-bold uppercase text-6xl mb-4">
          Bem-vindo(a)
          <small className="block text-2xl mt-4 font-semibold">
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
        <button>Compre agora!</button>
      </div>
      <figure className="border-8 border-[#921F3E] shadow-[8px_8px_0_1px_rgba(96,17,38,1)]">
        <img src={MainEbook} alt="" className="max-w-md" />
      </figure>
    </div>
  )
}
