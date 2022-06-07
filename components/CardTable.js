import { CardContent, CardHeader, Paper } from '@mui/material';
import DenseTable from './DenseTable';
import styles from '../styles/CardTable.module.css';
import LoadingButton from '@mui/lab/LoadingButton';
import { getLoadingByAction } from '../redux/selectors';
import { connect } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';
function CardTable(props) {
  const items = props.data;
  const cols =
    items !== undefined && items[0] !== undefined ? Object.keys(items[0]) : [];

  const RenderTable = () => {
    if (items === undefined || items[0] === undefined) {
      return <p>No Repords</p>;
    } else {
      return <DenseTable cols={cols} data={items} className='scroll' />;
    }
  };

  return (
    <Paper className={styles.card} square={false}>
      <CardHeader
        title={props.name}
        className={styles.tableHeading}
        action={
          <LoadingButton
            loading={props.loading}
            style={{ color: 'var(--primary-color)' }}>
            {' '}
            <CheckIcon></CheckIcon>{' '}
          </LoadingButton>
        }
      />
      <CardContent className={`${styles.noPadding} ${styles.cardContent}`}>
        {RenderTable()}
      </CardContent>
    </Paper>
  );
}

const mapStateToProps = (state, props) => {
  return {
    loading: getLoadingByAction(state, props.for),
  };
};

export default connect(mapStateToProps)(CardTable);
