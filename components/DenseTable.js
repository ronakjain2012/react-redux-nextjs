import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './styles/DenseTable.module.css';

let copyToClipboard = value => {
  navigator.clipboard.writeText(value).then(_ => {
    console.log(value, 'Copied!!');
  });
};

export default function DenseTable(props) {
  let cols = props.cols || [];
  let data = props.data || [];
  const THData = () => {
    return cols.map((element, i) => <TableCell key={i}>{element}</TableCell>);
  };
  return (
    <TableContainer>
      <Table size='small'>
        <TableHead className={styles.THeader}>
          <TableRow>{THData()}</TableRow>
        </TableHead>
        <TableBody className={styles.TBody}>
          {data.map((row, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {cols.map(col => (
                <TableCell
                  key={col + '_' + i}
                  component='td'
                  scope='row'
                  className={`${styles.row} noPaddingTopBottom`}
                >
                  {typeof row[col] == 'object' ? (
                    <pre
                      onClick={() => copyToClipboard(JSON.stringify(row[col]))}
                    >
                      {JSON.stringify(row[col], null, 2)}
                    </pre>
                  ) : (
                    <span onClick={() => copyToClipboard(row[col])}>
                      {row[col]}
                    </span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
