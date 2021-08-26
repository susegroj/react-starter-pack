/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { useTranslation } from 'react-i18next';

import useLocalStorage from './useLocalStorage';
import initialState from '../../initialState';

const useInitialState = () => {
  const [state, setState] = useLocalStorage('boilerplate', initialState);
  const { i18n } = useTranslation('common');

  const setLanguage = (payload) => {
    i18n.changeLanguage(payload);

    setState({
      ...state,
      language: payload,
    });
  };

  return {
    setLanguage,

    state,
  };
};

export default useInitialState;
