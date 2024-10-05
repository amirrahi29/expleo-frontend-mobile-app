import { NavigationContainerRef, ParamListBase, CommonActions } from '@react-navigation/native';
import { createRef } from 'react';

export const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();
export const navigate = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};
export const goBack = () => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};
export const replace = (name: string, params?: object) => {
  if (navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
};
