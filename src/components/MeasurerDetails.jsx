import { Fragment } from 'react';
// import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { CardPhaseANew } from './NewMacrometer/CardPhaseANew';
import { CardPhaseBNew } from './NewMacrometer/CardPhaseBNew';
import { CardPhaseCNew } from './NewMacrometer/CardPhaseCNew';
import CardTotalNew from './NewMacrometer/CardTotalNew';
import TabGraphicVAV from './MeasurerDetails/TabGraphicVAV';
import { TabGraphic } from './MeasurerDetails/TabGraphic';
import { GET_METTERS_HISTORY_SERVICES } from './controllers/measurerController';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import TableConsumptions from './MeasurerDetails/TableConsumptions';

const MeasurerDetails = () => {
  const serial = { serial: '22551432' };
  const { data } = useQuery(GET_METTERS_HISTORY_SERVICES, {
    variables: { serial: '22551432' },
    fetchPolicy: 'no-cache',
  });

  const [dato, setDato] = useState();

  useEffect(() => {
    setDato(data);
  }, [data]);

  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 5,
          backgroundColor: 'rgba(195, 1, 78, 0.)',
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ mx: '1%', mt: '40px' }}
        >
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
          >
            <CardTotalNew
              serial={serial}
              datos={dato}
            />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
          >
            <CardPhaseANew serial={serial} />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
          >
            <CardPhaseBNew serial={serial} />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
          >
            <CardPhaseCNew serial={serial} />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ height: '50px' }}
          ></Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ height: '560px' }}
          >
            <TabGraphic serial={serial} />
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ height: '550px' }}
          >
            <TabGraphicVAV serial={serial} />
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{ width: '90%' }}
          >
            {/* <TableConsumptions serial={serial} /> */}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MeasurerDetails;
