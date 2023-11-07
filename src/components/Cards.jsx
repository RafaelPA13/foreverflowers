import { CardGroup, Card } from 'react-bootstrap';

import Produto1 from '../assets/Produto1.jpg'
import Produto2 from '../assets/Produto2.jfif'
import Produto3 from '../assets/Produto3.jfif'

const CardGroupComponent = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={Produto1} />
        <Card.Body>
          <Card.Title>Bonsai</Card.Title>
          <Card.Text>
            Descrição: Planta japonesa feita de plastico biodegradável e resistente.
          </Card.Text>
          <Card.Text>
            Fornecedor: Raphael Pereira
          </Card.Text>
          <Card.Text>
            Estoque: 100 unidades
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Img variant="top" src={Produto2} />
        <Card.Body>
          <Card.Title>Rosas</Card.Title>
          <Card.Text>
            Descrição: Rosas feitas de plastico biodegradável e resistente.
          </Card.Text>
          <Card.Text>
            Fornecedor: Anderson Mota
          </Card.Text>
          <Card.Text>
            Estoque: 75 unidades
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Produto3} />
        <Card.Body>
          <Card.Title>Coroa de Rosas</Card.Title>
          <Card.Text>
            Descrição: Coroa de rosas para celebrações feitas de plastico biodegradável.
          </Card.Text>
          <Card.Text>
            Fornecedor: Mathias Neto
          </Card.Text>
          <Card.Text>
            Estoque: 15 unidades
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CardGroupComponent;
