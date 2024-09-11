import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import UserStatsGraphs from './UserStatsGraphs';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData(event) {
      const { url, options } = STATS_GET();

      await request(url, options);
    }
    getData();
  }, [request]);

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (data)
    return (
      <div>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
}

export default UserStats;
