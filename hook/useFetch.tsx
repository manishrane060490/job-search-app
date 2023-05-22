import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': '1e91a1bc43msh0ffa4f6f3b44df6p18f108jsn22baef313380',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query}
    };

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
      } catch(error) {
        setError(error);
        alert("Somthing went wrong")
      } finally {
        setIsLoading(false)
      }
    }

    useEffect(() => {
      fetchData();
    }, [])

    const refetch = () => {
      setIsLoading(true);
      fetchData();
    }

    return { data, error, refetch, isLoading}
};

export default useFetch;