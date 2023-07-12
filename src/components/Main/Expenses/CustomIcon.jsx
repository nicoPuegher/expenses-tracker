import React from 'react';
import PropTypes from 'prop-types';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import GppGoodIcon from '@mui/icons-material/GppGood';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import TheatersIcon from '@mui/icons-material/Theaters';
import HomeIcon from '@mui/icons-material/Home';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PowerIcon from '@mui/icons-material/Power';
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
    case 'Investment':
      return <LeaderboardIcon fontSize="inherit" />;
    case 'Miscellaneous':
      return <MiscellaneousServicesIcon fontSize="inherit" />;
    case 'Personal':
      return <EmojiFoodBeverageIcon fontSize="inherit" />;
    case 'Recreation':
      return <TheatersIcon fontSize="inherit" />;
    case 'Rent':
      return <HomeIcon fontSize="inherit" />;
    case 'Transfer':
      return <SyncAltIcon fontSize="inherit" />;
    case 'Transport':
      return <DirectionsBusIcon fontSize="inherit" />;
    case 'Utilities':
      return <PowerIcon fontSize="inherit" />;
    default:
      return <AttachMoneyIcon fontSize="inherit" />;
  }
}

CustomIcon.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default CustomIcon;
