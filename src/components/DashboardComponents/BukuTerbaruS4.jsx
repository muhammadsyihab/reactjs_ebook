import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { fetchBukuTerbaru, BukuTerbaruSelector } from '../../recoil/api/apiBukuState';


import Carousel from 'better-react-carousel'

const BukuTerbaruS4 = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const books = useRecoilValue(BukuTerbaruSelector);
  const setBooks = useSetRecoilState(BukuTerbaruSelector);

  useEffect(() => {
    const getBukuTerbaru = async () => {
      const booksData = await fetchBukuTerbaru();
      setBooks(booksData);
    };

    getBukuTerbaru();
  }, [setBooks]);

  const maxSteps = books ? books.length : 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!books || books.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel cols={4} rows={1} gap={10} loop style={{ maxWidth: '100%' }}>
    {books.map((book, index) => (
        <Carousel.Item key={index}>
          <div style={{ position: 'relative' }}>
          <div style={{ marginTop: '10px' }}>
              <img height="280" width="300" src={book.wiki_url} />
            </div>
            <div style={{ padding: '10px', maxWidth: '100%', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{book.title}</h3>
            </div>
            <div style={{ padding: '10px', maxWidth: '100%', marginBottom: '10px' }}>
              <h6 style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{Array.isArray(book.author) ? book.author.join(', ') : book.author}</h6>
            </div>
           
          </div>
        </Carousel.Item>
      ))}
  </Carousel>
  

  
  );
};

export default BukuTerbaruS4;
