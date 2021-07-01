import { useState, useEffect, useReducer } from 'react';
import { axios } from '../utils/axios';

const ACTIONS = {
  INIT: 'FETCH_INIT',
  SUCCESS: 'FETCH_SUCCESS',
  FAILURE: 'FETCH_FAILURE'
};

const axiosFetchReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case ACTIONS.SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case ACTIONS.FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

const useAxiosFetch = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(axiosFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  useEffect(() => {
    let isCancel = false;

    const fetchData = async () => {
      dispatch({ type: ACTIONS.INIT });

      try {
        const result = await axios.get(url);

        if (!isCancel) {
          dispatch({ type: ACTIONS.SUCCESS, payload: result.data.data });
        }
      } catch (error) {
        if (!isCancel) {
          dispatch({ type: ACTIONS.FAILURE });
        }
      }
    };

    fetchData();
    return () => (isCancel = true);
  }, [url]);

  return [state, setUrl];
};

export default useAxiosFetch;
