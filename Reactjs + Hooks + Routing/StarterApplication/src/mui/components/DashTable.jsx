import * as React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead  from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import { Link, TableBody, TableRow } from '@mui/material';

//Single responsibility principle
function DashTable() {

    function createData(id, date, name, shipTo, paymentMethod, amount) {
        return { id, date, name, shipTo, paymentMethod, amount };
      }

    const rows = [
        createData(
          0,
          '16 Mar, 2019',
          'Elvis Presley',
          'Tupelo, MS',
          'VISA ⠀•••• 3719',
          312.44,
        ),
        createData(
          1,
          '16 Mar, 2019',
          'Paul McCartney',
          'London, UK',
          'VISA ⠀•••• 2574',
          866.99,
        ),
        createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
        createData(
          3,
          '16 Mar, 2019',
          'Michael Jackson',
          'Gary, IN',
          'AMEX ⠀•••• 2000',
          654.39,
        ),
        createData(
          4,
          '15 Mar, 2019',
          'Bruce Springsteen',
          'Long Branch, NJ',
          'VISA ⠀•••• 5919',
          212.79,
        ),
      ];

    const headerCells = ['Date', 'Name', 'Ship To', 'Payment Method']
    return (
      <>
        <Typography component="h2" variant='h6' color="primary">Recent Orders</Typography>
        <Table size='small'>
            <TableHead>
            <TableCell>
                Date
            </TableCell>
            <TableCell>
                Name
            </TableCell>
            <TableCell>
                Ship To
            </TableCell>
            <TableCell>
                Payment Method
            </TableCell>
            <TableCell>Sale Amount</TableCell>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                    <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{`$${row.amount}`}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            <Link color="primary" href="#" onClick={() => console.log("yayy")} style={{ mt: 15 }}>
        See more orders
      </Link>
        </Table>
      </>
    );
  }
  
  export default DashTable;
  