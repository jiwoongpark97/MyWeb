import { Carousel } from 'react-bootstrap';
import projectList from '../data/projects.json'


export function Home() {
  return (
    <div className="m-auto d-flex justify-content-center align-items-center">
      <Carousel style={{ maxWidth: '40%', minWidth: '500px' }}>
        {projectList.map(item => (
          <Carousel.Item>
            <img
              className="w-100"
              src={item.src}
              alt="Image One"
            />
            <Carousel.Caption className='text-dark' style={{ position: 'relative', right: 0, left: 0 }}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}