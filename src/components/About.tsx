import { Box, Container, Typography } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <Box className="about-page">
      <Container maxWidth="md" className="about-container">
        <Typography variant="h3" component="h1" className="about-title" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" className="about-paragraph">
          We are a modern IT company specializing in web and mobile solutions for brands that value
          performance, reliability, and great user experience. Our team builds scalable products,
          from storefronts and internal tools to cloud-ready platforms.
        </Typography>
        <Typography variant="body1" className="about-paragraph">
          We focus on clean architecture, fast delivery, and long-term maintainability. Whether you
          are launching a new product or improving an existing system, we provide end-to-end support
          across design, development, and deployment.
        </Typography>
        <Box className="about-highlights">
          <Typography variant="h6" component="h2" className="about-subtitle">
            What we do
          </Typography>
          <ul className="about-list">
            <li>Full-stack web and mobile development</li>
            <li>UI/UX design and product strategy</li>
            <li>Cloud deployment and DevOps automation</li>
            <li>Ongoing maintenance and support</li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
