import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();

      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (data)
    return (
      <>
        <Head title='Estatísticas' />
        <React.Suspense fallback={<div></div>}>
          <UserStatsGraphs data={data} />
        </React.Suspense>
      </>
    );
  else return null;
}

export default UserStats;
