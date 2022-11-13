import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { columns } from '../../domain/layout';

const accordionItems = [
  {
    title: 'layout',
    icon: <MdKeyboardArrowDown />,
    children: <>This is children</>,
  },
  {
    title: 'color',
    icon: <MdKeyboardArrowDown />,
    children: <>This is children</>,
  },
];

const Sidenav = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  console.log(columns);
  return (
    <div>
      {accordionItems.map(({ title, icon, children }) => (
        <Accordion
          expanded={expanded === title}
          onChange={handleChange(title)}
          key={title}
        >
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls={`panel{title}-content`}
            id={`panel{title}-header`}
          >
            <Stack
              alignItems="center"
              alignContent="center"
              direction="row"
              justifyContent={'center'}
            >
              <Typography>{icon}</Typography>
              <Typography>{title}</Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { Sidenav };
