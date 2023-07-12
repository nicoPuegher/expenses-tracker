import React from 'react';
import PropTypes from 'prop-types';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GppGoodIcon from '@mui/icons-material/GppGood';

import HomeIcon from '@mui/icons-material/Home';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function CustomIcon({ iconType }) {
  switch (iconType) {
    case 'Debt':
      return <AccountBalanceIcon fontSize="inherit" />;
    case 'Food':
      return <LocalDiningIcon fontSize="inherit" />;
    case 'Healthcare':
      return <LocalHospitalIcon fontSize="inherit" />;
    case 'Insurance':
      return <GppGoodIcon fontSize="inherit" />;
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
