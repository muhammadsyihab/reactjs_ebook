import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import StarIcon from '@mui/icons-material/Star';

import { Link } from 'react-router-dom';

import { AllBooksSelector, fetchBooks } from '../../recoil/api/apiBukuState';

const itemsPerPage = 8;

const ABCLBooks = () => {
  const [bookData, setBookData] = useRecoilState(AllBooksSelector);
  const booksLoadable = useRecoilValueLoadable(AllBooksSelector);
  const currentPage = 1;

  useEffect(() => {
    if (booksLoadable.state === 'hasValue' && booksLoadable.contents.length === 0) {
      fetchAllBooks();
    }
  }, [booksLoadable.state]);

  const fetchAllBooks = async () => {
    const books = await fetchBooks(itemsPerPage);
    setBookData(books);
  };

  const handleChangePage = (event, newPage) => {
    // Implement page change logic here
  };

  return (
    <div>
      <Grid container spacing={2}>
        {booksLoadable.state === 'hasValue' &&
          bookData.map((item) => (
            <Grid item xs={12} sm={6} md={12} key={item.id}>
              <Card>
                <Grid container>
                  <Grid item xs={12} sm={2}>
                    <Grid container direction="column" alignItems="center">
                      <Grid item>
                        <img src={item.wiki_url} alt={item.title} style={{ height: 200, padding: '20px' }} />
                      </Grid>
                      <Grid item>
                        <Button variant="contained" component={Link} to={`/book-detail/${item.id}`}  color="primary" className='mb-3' >
                          Lihat Buku
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <CardContent>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {item.author}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 2, mb: 3 }} gutterBottom>
                        {item.deskripsi}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <StarIcon color="primary" />
                        <Typography variant="body2" color="textSecondary" >
                          {item.review}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="center">
        <Pagination count={1} page={currentPage} onChange={handleChangePage} />
      </Box>
    </div>
  );
};

export default ABCLBooks;
