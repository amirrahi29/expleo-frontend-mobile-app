import React, { memo } from 'react';
import {
    View,
    Modal,
    StatusBar,
    ActivityIndicator,
    Platform
} from 'react-native';
import { ColorConstants } from '../../Constants/ColorConstants';
import { AppLoaderCss } from './css';

const AppLoader = (props:any) => {
    const {
        loading,
        ...attributes
    } = props;
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
            }}>

            <View style={AppLoaderCss.modalBackground}>
                {(Platform.OS === 'ios') ? <StatusBar 
                translucent barStyle="dark-content" /> : null}
                <View style={AppLoaderCss.activityIndicatorWrapper}>
                    <ActivityIndicator color={ColorConstants.redColor}
                        size={"large"}
                        animating={loading} />
                </View>
            </View>
        </Modal>
    )
}

export default memo(AppLoader)