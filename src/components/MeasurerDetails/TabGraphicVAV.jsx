import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { GraphVoltage } from './GraphVoltage';
import { GraphWatts } from './GraphWatts';
import { GraphCurrent } from './GraphCurrent';
import { GraphPowerFactor } from './GraphPowerFactor';
import { GraphFrecuency } from './GraphFrecuency';
import { formatoFecha } from '../../helpers/listMacrometer';
import TableConsumptions from './TableConsumptions';
import { GraphArmonicCurrent } from './GraphArmonicCurrent';
import { GraphHarmonicVoltage } from './GraphHarmonicVoltage';

export default function TabGraphicVAV() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const currentDay = new Date();

  const currentDayToDay = formatoFecha(currentDay);

  function previusDay() {
    const date = new Date(currentDay);
    date.setDate(date.getDate() - 1);
    return formatoFecha(date, 'dd/mm/yy');
  }

  function nextDay() {
    const date1 = new Date(currentDay);
    if (date1 < currentDay) {
      date1.setDate(date1.getDate() + 1);
      return formatoFecha(date1, 'dd/mm/yy');
    }
    return formatoFecha(currentDay, 'dd/mm/yy');
  }

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1', marginBottom: '5%' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                label="Voltaje"
                value="1"
              />
              <Tab
                label="Amperaje"
                value="2"
              />
              <Tab
                label="Watts"
                value="3"
              />
              <Tab
                label="Factor de Potencia"
                value="4"
              />
              <Tab
                label="Frecuencia"
                value="5"
              />
              <Tab
                label="Armonico de amperaje"
                value="6"
              />
              <Tab
                label="Armonico de voltaje"
                value="7"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <GraphVoltage
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="2">
            <GraphCurrent
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="3">
            <GraphWatts
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="4">
            <GraphPowerFactor
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="5">
            <GraphFrecuency
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="6">
            <GraphArmonicCurrent
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
          <TabPanel value="7">
            <GraphHarmonicVoltage
              Dia={currentDayToDay}
              previusDay={previusDay}
              nextDay={nextDay}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
