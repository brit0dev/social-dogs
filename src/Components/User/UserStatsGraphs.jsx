import React from 'react';
import styles from './UserStatusGraphs.module.css';
import { VictoryPie, VictoryBar, VictoryChart } from 'victory';

function UserStatsGraphs({ data }) {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((photo) => ({
      x: photo.title,
      y: Number(photo.acessos),
    }));

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );

    setGraph(graphData);
  }, [data]);

  console.log(data.map((photo) => ({ x: photo.title, y: photo.acesso })));

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
          className={`${styles.graphItem}`}
        />
      </div>
      <div className={`${styles.graphItem}`}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}

export default UserStatsGraphs;
