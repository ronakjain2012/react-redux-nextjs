import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

let copyToClipboard = value => {
  navigator.clipboard.writeText(value).then(_ => {
    console.log(value, 'Copied!!');
  });
};

export default function SimpleDTable(props) {
  let cols = props.cols || [];
  let data = props.data || [];
  const THData = () => {
    return cols.map((element, i) => <TableCell key={i}>{element}</TableCell>);
  };
  return (
    <TableContainer>
      <Table size='small'>
        <TableHead>
          <TableRow>{THData()}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              key={i}>
              {cols.map(col => (
                <TableCell
                  key={col + '_' + i}
                  component='td'
                  scope='row'
                >
                  {typeof row[col] == 'object' ? (
                    <p
                      onClick={() => copyToClipboard(JSON.stringify(row[col]))}
                    >
                      {JSON.stringify(row[col])}
                    </p>
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
