import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from '../BodyPart/BodyPart';
import RightArrowIcon from '../../assets/icons/right-arrow.png';
import LeftArrowIcon from '../../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map(elem => (
      <Box key={elem.id || elem}
           itemId={elem.id || elem}
           title={elem.id || elem}
           m='0 40px'
      >
      <BodyPart elem={elem} bodyPart={bodyPart} setBodyPart={setBodyPart} />        
      </Box>))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar