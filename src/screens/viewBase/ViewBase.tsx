import React from 'react';
import LoaderView from '../../component/loaderView/LoaderView';
import {useAppSelector} from '../../reduxToolKit/ReduxStore';

const ViewBase = ({children}: {children: React.ReactNode}) => {
  /* Handle global view and app initial data */
  const {isShowLoader} = useAppSelector(state => state.rootReducer.ViewReducer);

  return (
    <>
      {children}
      {isShowLoader && <LoaderView />}
    </>
  );
};

export default ViewBase;
