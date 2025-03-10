import { Imagem, Precos, Titulo, ButtonPosition } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Tag } from '../Tag'
import { Button } from '../Button'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>
          Marvel&apos;s Spider-Man: Miles <br />
          Morales PS4 & PS5
        </Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br /> por apenas <strong>R$ 99,90</strong>
        </Precos>
      </div>
      <ButtonPosition>
        <Button
          type="link"
          to="/produtos"
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </ButtonPosition>
    </div>
  </Imagem>
)
