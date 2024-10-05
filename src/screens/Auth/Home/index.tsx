import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import StyledText from '../../../Components/StyledText';
import { ColorConstants } from '../../../Constants/ColorConstants';
import MainBackground from '../../Common/MainBackground';
import { useDispatch, useSelector } from 'react-redux';
import { HomeService } from './redux/Services/HomeService';
import { TitleConstants } from '../../../Constants/TitleConstants';
import AppLoader from '../../../Components/AppLoader';
import { HomeCss } from './css';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state: any) => state.home);

  useEffect(() => {
    dispatch<any>(HomeService());
  }, [dispatch]); 

  const renderItem = ({ item }: { item: User }) => (
    <View style={HomeCss.userItem}>
      <StyledText fontSize={14} color={ColorConstants.blueColor}>
        {item.username}
      </StyledText>
      <StyledText fontSize={14} color={ColorConstants.grayColor}>
        {item.email}
      </StyledText>
    </View>
  );

  return (
    <MainBackground>
      <View style={HomeCss.container}>
        {error && <StyledText color={ColorConstants.redColor}>{error}</StyledText>}
        {user && user.data && user.data.length > 0 ? (
          <FlatList
            data={[...user.data].reverse()}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          !loading && <StyledText>{TitleConstants.userNotFound}</StyledText>
        )}
      </View>
      <AppLoader loading={loading} />
    </MainBackground>
  );
};

export default Home;
