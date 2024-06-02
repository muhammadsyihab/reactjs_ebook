import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Pagination } from '@mui/material';
import { useRecoilState } from 'recoil';
import { AllBooksSelector, fetchBooks } from '../../recoil/api/apiBukuState';
import { Link } from 'react-router-dom';

const ITEMS_PER_PAGE = 6;

const ABCBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useRecoilState(AllBooksSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await fetchBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error while fetching books:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = books ? books.slice(startIndex, endIndex) : [];

  const totalPages = Math.ceil((books ? books.length : 0) / ITEMS_PER_PAGE);

  return (
    <div>
      <Grid container spacing={3}>
        {paginatedData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="200" image={item.wiki_url} alt={item.wiki_url} />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {item.author}
                </Typography>
                {/* <Link to={`/book-detail/${item.id}`} component="button"
                  variant="body2">Lihat Buku</Link> */}

                <Button component={Link} to={`/book-detail/${item.id}`} variant="contained" color="primary" >
                  Lihat Buku
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
        />
      )}
    </div>
  );
};

export default ABCBooks;
