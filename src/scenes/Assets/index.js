import React, { useContext, useEffect } from 'react';

import AssetTable from './components/AssetTable';
import CssBaseline from '@material-ui/core/CssBaseline';
import { FirebaseContext } from '../../services/contexts/FirebaseContextProvider'
import { headers } from './config'

const Assets = () => {
    const { firebaseInstance } = useContext(FirebaseContext)
    const getRows = (tableName) => {
        debugger
        firebaseInstance
            .firestore()
            .collection(tableName)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map(doc => doc.data());
                debugger
                setData(data);
                console.log(data);
                debugger
            })
            .catch((error) => {
                console.error("Error getting document: ", error);
            });
    }
    const columns = React.useMemo(
        () => headers,
        []
    )

    // const [data, setData] = React.useState(React.useMemo(() => makeData(20), []));
    const [data, setData] = React.useState([]);
    const [skipPageReset, setSkipPageReset] = React.useState(false)

    // const debug_data = makeData(20);
    debugger

    useEffect(() => {
        getRows('assets')
    }, []);

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AssetTable
                columns={columns}
                data={data}
                setData={setData}
                updateMyData={updateMyData}
                skipPageReset={skipPageReset}
            />
        </React.Fragment>
    )
}

export default Assets
