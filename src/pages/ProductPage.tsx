import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  Slider, 
  Button 
} from '@mui/material';
import { motion } from 'framer-motion';
import { LeafIcon, TreesIcon } from 'lucide-react';

const ProductPage: React.FC = () => {
  const [carbonFilter, setCarbonFilter] = useState<number>(50);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 3 }}>
          Sustainable Products
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Carbon Footprint Filter
                </Typography>
                <Slider
                  value={carbonFilter}
                  onChange={(_, value) => setCarbonFilter(value as number)}
                  valueLabelDisplay="auto"
                  marks
                  min={0}
                  max={100}
                />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item>
                    <LeafIcon color="#2ecc71" />
                  </Grid>
                  <Grid item xs>
                    <Typography>
                      Max Carbon Footprint: {carbonFilter} kg CO2
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {[1, 2, 3, 4].map((product) => (
                <Grid item xs={12} md={6} key={product}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card>
                      <CardContent>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <TreesIcon size={48} color="#27ae60" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="h6">
                              Eco Product {product}
                            </Typography>
                            <Typography variant="body2">
                              Sustainability Score: {80 - product * 5}%
                            </Typography>
                          </Grid>
                        </Grid>
                        <Button 
                          variant="contained" 
                          color="primary" 
                          fullWidth 
                          sx={{ mt: 2 }}
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default ProductPage;