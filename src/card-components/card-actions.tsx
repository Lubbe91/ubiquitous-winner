import { CardActions as MuiCardActions, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const CardAction = ({
  fn,
  text,
  noIcon = false,
}: {
  fn: any;
  text: string;
  noIcon?: boolean;
}) => (
  <MuiCardActions sx={{ justifyContent: 'end' }}>
    <Button
      size="large"
      endIcon={noIcon ? null : <AddCircleIcon />}
      onClick={fn}
    >
      {text}
    </Button>
  </MuiCardActions>
);
