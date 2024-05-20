import { Carousel } from 'react-bootstrap';
import projectList from '../data/projects.json'


export function Slideshow() {
  return (
    <div id='tem' className="m-auto d-flex justify-content-center align-items-center">
      <Carousel id='carousel' interval={5000} style={{ maxWidth: '40%', minWidth: '500px' }}>
        {projectList.map(item => (
          <Carousel.Item key={item.title}>
            <img
              className="w-100"
              src={item.src}
              alt="Image One"
              onClick={() => window.open(item.url, '_blank')}
            />
            <Carousel.Caption className='text-dark' style={{ position: 'relative', right: 0, left: 0 }}>
              <h3>{item.title}</h3>
              <p><small>{item.description}</small></p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}