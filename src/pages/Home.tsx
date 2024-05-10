import { Carousel } from 'react-bootstrap';
import Argus from '../../public/imgs/Argus.png'
import Campus_Buddy from '../../public/imgs/Campus_Buddy.png'
import dictionaryApp from '../../public/imgs/dictionaryApp.jpg'

export function Home() {
  return (
    <Carousel style={{ width: '400px', height: '600px' }}>
      <Carousel.Item style={{ height: '600px' }}>
        <img
          className="w-100"
          src={Argus}
          alt="Image One"
        />
        <Carousel.Caption className='text-dark' style={{ position: 'relative' }}>
          <h3>Projects</h3>
          <p>Few Projects I have done.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }}>
        <img
          className="w-100"
          src={Campus_Buddy}
          alt="Image One"
        />
        <Carousel.Caption className='text-dark'>
          <h3>Projects</h3>
          <p>Few Projects I have done.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '400px' }}>
        <img
          className="w-100"
          src={dictionaryApp}
          alt="Image One"
        />
        <Carousel.Caption className='text-dark'>
          <h3>Projects</h3>
          <p>Few Projects I have done.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}