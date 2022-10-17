import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';
import { useNavigate } from 'react-router-native';

const useRepoById = () => {
  const [repository, setRepository] = useState();
  const navigate = useNavigate()

  const [getById, response] = useLazyQuery(GET_REPOSITORY_BY_ID, {
      fetchPolicy: 'cache-and-network'
    })
  const loading = response.loading;

  const getRepoById = async (id) => {
    await getById({ variables: { repositoryId: id } })
    navigate(id)
  }

  useEffect(() => {
    if (response.data) {

      console.log('SINGLE REPOSITORY:', response);
      if (response.data) {
        setRepository(response.data.repository)
      }
    }
  }, [response.data]);


  return { repository, loading, getRepoById };

};

export default useRepoById;