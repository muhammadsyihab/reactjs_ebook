import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const KategoriS5 = () => {
  const dummyData = [
    { title: 'pryisbjkm sanjkasds aasdsadasda sdsadsa dsasda', author: 'Author 1, dasd, dasdas,asdsads', imageUrl: 'https://picsum.photos/200' },
    { title: 'Title 2', author: 'Author 2', imageUrl: 'https://picsum.photos/200' },
    { title: 'Title 3', author: 'Author 3', imageUrl: 'https://picsum.photos/200' },
    { title: 'Title 4', author: 'Author 4', imageUrl: 'https://picsum.photos/200' },
    { title: 'Title 5', author: 'Author 5', imageUrl: 'https://picsum.photos/200' },
    { title: 'Title 6', author: 'Author 6', imageUrl: 'https://picsum.photos/200' },
    // Tambahkan data tambahan di sini
  ];

  const rows = Math.ceil(dummyData.length / 3); // Hitung jumlah baris

  const renderGridItems = () => {
    const gridItems = [];

    for (let i = 0; i < rows; i++) {
      const rowItems = dummyData.slice(i * 3, (i + 1) * 3); // Ambil 3 elemen untuk setiap baris

      const gridRow = (
        <Grid container item spacing={3} key={i}>
          {rowItems.map((item, index) => (
            <Grid item xs={4} key={index}>
              <Item sx={{ maxWidth: '100%', padding: '8px' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <img src={item.imageUrl} alt="Potret" height="200" width="170" />
                  </Grid>
                  <Grid item xs sx={{  }}>
                    <Typography sx={{  overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical',marginBottom: '10px' }} variant="body1">
                      {item.title}
                    </Typography>
                    <Typography sx={{  overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'  }} variant="body4">
                      {item.author}
                    </Typography>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          ))}
        </Grid>
      );

      gridItems.push(gridRow);
    }

    return gridItems;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {renderGridItems()}
      </Grid>
    </Box>
  );
};

export default KategoriS5;
