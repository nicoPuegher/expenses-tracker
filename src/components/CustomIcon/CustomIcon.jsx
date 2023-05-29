import React from 'react';
import PropTypes from 'prop-types';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function CustomIcon({ iconType }) {
  switch (iconType) {
    case 'Food':
      return <LocalDiningIcon fontSize="inherit" />;
    case 'Rent':
      return <HomeIcon fontSize="inherit" />;
    case 'Transport':
      return <DirectionsBusIcon fontSize="inherit" />;
    default:
      return <AttachMoneyIcon fontSize="inherit" />;
  }
}

CustomIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default CustomIcon;
