import React, { useEffect } from 'react';
import { View, Modal } from 'react-native';
import StyledText from '../StyledText';
import { ColorConstants } from '../../Constants/ColorConstants';

const SuccessError = ({ visible, type, message, onClose }: any) => {
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (visible) {
            timeout = setTimeout(onClose, 1000);
        }
        return () => clearTimeout(timeout);
    }, [visible, onClose]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose} 
        >
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ width: '100%', backgroundColor: type == "success"?ColorConstants.greenColor:ColorConstants.redColor, 
                    padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <StyledText
                        fontSize={18}
                        fontWeight={'400'}
                        color={ColorConstants.whiteColor}
                        lineHeight={20}
                    >
                        {message}
                    </StyledText>
                </View>
            </View>
        </Modal>
    );
};

export default SuccessError;
