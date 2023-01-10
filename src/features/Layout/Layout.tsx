import { Link } from 'react-router-dom';

import './Layout.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='container-fluid'>
      <h1 className='text-center'>
        <Link className='layout__link' to='/'>
          Marvel Heroes
        </Link>
      </h1>
      {children}
    </main>
  );
};

export default Layout;
