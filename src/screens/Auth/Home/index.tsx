import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: ColorConstants.blueColor,
            padding: 8,
            marginRight: 8
          }}>
          <StyledText fontSize={14} color={ColorConstants.whiteColor}>
            {'Edit'}
          </StyledText>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: ColorConstants.redColor,
            padding: 8,
            marginLeft: 8
          }}>
          <StyledText fontSize={14} color={ColorConstants.whiteColor}>
            {'Delete'}
          </StyledText>
        </TouchableOpacity>

      </View>

    </View>
  );

  return (
    <MainBackground>
      <View style={HomeCss.container}>
        {error && <StyledText color={ColorConstants.redColor}>{error}</StyledText>}
        {user && user.data && user.data.length > 0 ? (
          <FlatList
            data={user.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          loading == true ? <></> : <StyledText>{TitleConstants.userNotFound}</StyledText>
        )}
      </View>
      <AppLoader loading={loading} />
    </MainBackground>
  );
};

export default Home;
