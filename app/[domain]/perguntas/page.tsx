import { type Metadata } from "next"
import { Stage } from "@/components/stage"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const domain = params.domain

  return {
    title: `Perguntas • ${domain}`,
    description: `Veja as pessoas que utilizam o ${domain}.`,
  }
}
interface Props {
  params: { domain: string }
}

export default function CommunityPage({ params }: Props) {

  const domain = params.domain

  return (
    <main className="container grid gap-6 items-center pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold tracking-tighter leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
          Perguntas e Respostas
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Tirar todas as suas dúvidas ou morrer tentando
        </p>
      </div>
      <div>
        <Stage title="Como isso funciona?" number={"❔"} last>
          <p className="max-w-lg">
           No Bluesky todos os usuários tem estrutura semelhante de um domínio (ou subdomínio), por conta disso, ao se cadastrar na plataforma você ganha um usuário com <strong>bsky.social</strong> no final.
          </p>
        </Stage>
        <Stage title="Trocando o @, quem me segue vai continuar me seguindo?" number={"❔"} last>
          <p className="max-w-lg">
           <strong>Sim.</strong> Basta seguir o processo. Inclusive, todos os posts anteriores ao momento da troca que tem marcação do sue @ antigo irão redirecionar para o novo.
          </p>
        </Stage>
        <Stage title="Cadastrando um @ aqui, ele é meu pra sempre?" number={"❔"} last>
          <p className="max-w-lg">
           <strong>No momento, sim.</strong>
          </p>
        </Stage>
        <Stage title="Está dando erro de 'Invalid Handle', como resolvo?" number={"❔"} last>
          <p className="max-w-lg">
           Este erro tende a ser provisório. Faça o processo de verificação novamente, ou se quiser, volte o @ anterior e tente cadastrar novamente. Nenhum dado será perdido.
          </p>
        </Stage>
        <Stage title="Por quanto tempo eu posso ter um usuário personalizado?" number={"❔"} last>
          <p className="max-w-lg">
          <strong>Não existe um limite de tempo.</strong> Farei o possível para manter o serviço funcionando.
          </p>
        </Stage>
        <Stage title="Tenho um domínio próprio e queria algo assim, como faço?" number={"❔"} last>
          <p className="max-w-lg">
            O código do {domain} está <a href="https://github.com/daniloraisi/comunidade.dev.br" target="_blank" rel="noreferer" className="underline bold">disponível no GitHub</a>, basta fazer seu fork e dar deploy. O projeto é baseado no <a href="https://github.com/mozzius/community-handles" target="_blank" rel="noreferer" className="underline bold">Community Handles</a>, também disponível no GitHub.
          </p>
        </Stage>
        <Stage title="Não sou programador, tenho uma comunidade e quero disponibilizar para meus usuários. É possível?" number={"❔"} last>
          <p className="mb-4 max-w-lg">
            Para dúvidas pontuais, pode me contatar diretamente pelo BlueSky, minha DM está aberta. Para facilitar, <a href="https://bsky.app/profile/raisiexception.dev.br" target="_blank" rel="noreferer" className="underline bold">clique aqui</a> para acessar meu perfil.
          </p>
          <p className="max-w-lg">
            Caso tenha interesse em fazer algo profissional, com direcionamento, validaçao por senha e algo mais customizado, entre em contato pelo email <a href="mailto:danilo@raisi.tech">danilo@raisi.tech</a> para avaliarmos suas necessidades.
          </p>
        </Stage>
      </div>
    </main>
  )
}
