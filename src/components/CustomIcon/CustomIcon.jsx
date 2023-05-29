import React from 'react';
import PropTypes from 'prop-types';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function CustomIcon({ iconType }) {
  switch (iconType) {
    case 'Food':
      return <LocalDiningIcon fontSize="small" />;
    case 'Rent':
      return <HomeIcon fontSize="small" />;
    case 'Transport':
      return <DirectionsBusIcon fontSize="small" />;
    default:
      return <AttachMoneyIcon fontSize="small" />;
  }
}

CustomIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default CustomIcon;
