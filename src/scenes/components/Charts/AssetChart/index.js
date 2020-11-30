import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserDataContext } from '../../../../services/contexts/UserDataContextProvider';
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme
} from 'victory';

const AssetChart = props => {
    const { tableName } = props;
    const [data, setData] = React.useState([]);
    const { getRows } = useContext(UserDataContext)

    useEffect(() => {
        const refreshData = () => {
            getRows(setData, tableName)
        }
        refreshData();
    }, []);

    return (
        <React.Fragment>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={40}
            >
                <VictoryAxis
                    label="Asset"
                    style={{
                        axisLabel: { padding: 30 }
                    }}
                />
                <VictoryAxis dependentAxis
                    label="Cost"
                    style={{
                        axisLabel: { padding: 35 }
                    }}
                />
                <VictoryBar
                    data={data}
                    x="asset"
                    y="cost"
                />
            </VictoryChart>
        </React.Fragment>
    )
}

AssetChart.propTypes = {
    tableName: PropTypes.string.isRequired
};

export default AssetChart
