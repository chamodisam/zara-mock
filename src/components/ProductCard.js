import { Box, Card, CardMedia, CardContent, Typography, IconButton, Icon } from '@mui/material';
import TextTruncate from 'react-text-truncate';
import AddIcon from '@mui/icons-material/Add';

function ProductCard({ item }) {
    return (
        <Card sx={{ height: '100%', width: 350, display: 'flex', flexDirection: 'column'}}>
        <CardMedia
          component="img"
          height="300"
          image={item.image}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
        <TextTruncate
            line={1}
            element="span"
            truncateText="…"
            text={item.title}
        />
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span>
            {`$ ${item.price}`}
          </span>
          <IconButton sx={{ borderRadius: 0 }}>
            <AddIcon />
          </IconButton>
        </Box>
        </CardContent>
      </Card>
    );
}

export default ProductCard;
