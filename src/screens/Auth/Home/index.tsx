import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import StyledText from '../../../Components/StyledText';
import { ColorConstants } from '../../../Constants/ColorConstants';
import MainBackground from '../../Common/MainBackground';
import { useDispatch, useSelector } from 'react-redux';
import { HomeService } from './redux/Services/HomeService';
import AppLoader from '../../../Components/AppLoader'; // Import the AppLoader

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
    <View style={styles.userItem}>
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
      <View style={styles.container}>
        <AppLoader loading={loading} /> {/* Show the loader based on loading state */}
        {!loading && (
          <>
            {error && <StyledText color="red">{error}</StyledText>}
            {user && user.data && user.data.length > 0 ? ( 
              <FlatList
                data={user.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            ) : (
              <StyledText>No users found.</StyledText>
            )}
          </>
        )}
      </View>
    </MainBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.whiteColor,
  },
  userItem: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: ColorConstants.placeholderColor,
    borderRadius: 5,
  },
});

export default Home;
