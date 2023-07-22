import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import { neutral, support } from '../../../../utils/theme/theme';

const StyledEmpty = styled(Alert)({
  '&.MuiPaper-root': {
    backgroundColor: neutral[800],
  },
  '& .MuiAlert-icon': {
    color: support[500],
  },
  '& .MuiAlert-message': {
    color: neutral[300],
  },
});

export default StyledEmpty;
