import { Box } from '@mui/material';

function Home() {

    return (
        <Box
            component="img"
            src="https://static.zara.net/assets/public/b387/ed48/add74cccbf54/207c702e9e51/image-landscape-fill-a6af213d-fd20-474e-bfdd-6f21dff1af6f-default_0/image-landscape-fill-a6af213d-fd20-474e-bfdd-6f21dff1af6f-default_0.jpg?ts=1725451520565&w=3024"
            sx={{
                // height: '100vh',      // Full viewport height
                width: '100vw',       // Full viewport width
                objectFit: 'cover',   // Cover the viewport without distortion
                position: 'absolute', // Ensure it fills the whole screen
                // top: 0,
                left: 0,
                zIndex: -1,           // Ensure it's behind other content
            }}
        />
    );
}

export default Home;
