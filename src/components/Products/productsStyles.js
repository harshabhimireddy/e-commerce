import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: 'felx',
    justifyContent: 'flex-center',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
