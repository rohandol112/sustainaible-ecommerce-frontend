import React from 'react';
import { motion } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button 
} from '@mui/material';
import { 
  Leaf, 
  Globe, 
  TreePine 
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              Sustainable Shopping Starts Here
            </Typography>
            <Typography variant="body1" paragraph>
              Discover products that help you reduce your carbon footprint
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
            >
              Explore Products
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Leaf size={48} color="#2ecc71" />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6">
                        Eco-Friendly Choices
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {[
            { 
              icon: <Globe size={48} color="#3498db" />, 
              title: 'Global Impact',
              description: 'Reduce your environmental footprint'
            },
            { 
              icon: <TreePine size={48} color="#27ae60" />, 
              title: 'Sustainable Living',
              description: 'Choose products that matter'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>{feature.icon}</Grid>
                      <Grid item xs>
                        <Typography variant="h6">
                          {feature.title}
                        </Typography>
                        <Typography variant="body2">
                          {feature.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default HomePage;