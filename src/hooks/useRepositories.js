import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const response = useQuery(GET_REPOSITORIES, {
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