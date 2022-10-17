import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (mutationArgs, searchKeyword) => {
  const [repositories, setRepositories] = useState();

  const { orderBy, orderDirection } = mutationArgs

  const response = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network'
  });

  const loading = response.loading;



  const fetchRepositories = async () => {
    console.log('Response:', response);
    if (response.data) {
      setRepositories(response.data.repositories)
    }
  };

  useEffect(() => {
    if (response.data) {
      fetchRepositories();
    }
  }, [response.data]);


  return { repositories, loading, refetch: fetchRepositories };

};

export default useRepositories;