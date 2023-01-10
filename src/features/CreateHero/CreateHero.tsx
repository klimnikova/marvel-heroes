import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { HeroCategory } from '../../api/heroes/types';
import { addHeroes } from '../../store/slices/heroesSlice';

const ARRAY_CATEGORIES = ['comics', 'series', 'stories'];

type FormData = {
  name: string;
  description: string;
  comics: HeroCategory;
  series: HeroCategory;
  stories: HeroCategory;
  id: number;
  [key: string]: unknown;
};

const CreateHero = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current as HTMLFormElement);
      const formDataObj = {} as FormData;
      formData.forEach((value, key) => {
        if (ARRAY_CATEGORIES.includes(key) && !(value instanceof File)) {
          return (formDataObj[key] = {
            items: value.split(',').map((it) => ({
              name: it,
            })),
          });
        }

        formDataObj[key] = value;
      });
      if (!formDataObj.description || !formDataObj.name || !formDataObj) {
        return toast.error('Name and description are required!');
      }
      formDataObj.id = Date.now();
      const heroes = JSON.parse(localStorage.getItem('heroes') || '[]');
      const newHeroes = [...heroes, formDataObj];
      localStorage.setItem(`heroes`, JSON.stringify(newHeroes));
      dispatch(addHeroes(newHeroes));
      setShow(false);
    }
  };

  return (
    <>
      <div className='d-grid mt-2'>
        <Button variant='primary' size='lg' onClick={handleShow}>
          Add hero
        </Button>
      </div>
      <Modal fullscreen show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add hero</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id='form' ref={formRef}>
            <Form.Group className='mb-3' controlId='form.name'>
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' placeholder='John Doe' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='form.description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                name='description'
                placeholder='He has magic power to levitate'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='form.comics'>
              <Form.Label>Comics</Form.Label>
              <Form.Control
                name='comics'
                placeholder='Сomics in which he was present. List separated by commas. For example: Hulk (2008) #53,
Hulk (2008) #54,
Hulk (2008) #55'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='form.series'>
              <Form.Label>Series</Form.Label>
              <Form.Control
                name='series'
                placeholder='Series in which he was present. List separated by commas. For example: Hulk (2008) #53,
Hulk (2008) #54,
Hulk (2008) #55'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='form.stories'>
              <Form.Label>Stories</Form.Label>
              <Form.Control
                name='stories'
                placeholder='Stories in which he was present. List separated by commas. For example: Hulk (2008) #53,
Hulk (2008) #54,
Hulk (2008) #55'
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateHero;
