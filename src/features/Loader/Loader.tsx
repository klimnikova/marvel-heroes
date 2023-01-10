import Spinner from 'react-bootstrap/Spinner';

import './Loader.scss';

const Loader = () => (
  <div className='loader d-flex justify-content-center align-items-center'>
    <Spinner className='text-center' animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  </div>
);

export default Loader;
