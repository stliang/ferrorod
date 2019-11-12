import React from 'react';
// import { useTable, usePagination } from 'react-table';
import makeData from '../../test/makeData'

const Assets = () => {
  const [data, setData] = React.useState(() => makeData(20));
  debugger
  return (
    <div>
      <h1>Assets</h1>
    </div>
  );
}
export default Assets;