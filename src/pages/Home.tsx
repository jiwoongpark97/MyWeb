import { Carousel } from 'react-bootstrap';
import projectList from '../data/projects.json'
import firstSlide from '../../public/imgs/default.jpg'


export function Home() {
  return (
    <div className="m-auto d-flex justify-content-center align-items-center">
      <Carousel interval={5000} style={{ maxWidth: '40%', minWidth: '500px' }}>
        <Carousel.Item>
          <img
            className="w-100"
            src={firstSlide}
            alt="Image One"
          />
          <Carousel.Caption className='text-white'>
            <h1>Projects</h1>
            <h2>My side projects</h2>
          </Carousel.Caption>
        </Carousel.Item>
        {projectList.map(item => (
          <Carousel.Item>
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