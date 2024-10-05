import React, { memo } from 'react';
import { Text } from 'react-native';
import { ColorConstants } from '../../Constants/ColorConstants';

function StyledText({
  fontSize,
  fontWeight = '400',
  color,
  lineHeight,
  children,
  style,
  ...rest
}: any) {
  return (
    <Text
      allowFontScaling={false}
      {...rest}
      style={{
        fontSize: fontSize ?? 14,
        color: color ? color : ColorConstants.blackColor,
        fontWeight,
        lineHeight: lineHeight ?? fontSize ?? 12 + 6,
        ...style,
      }}>
      {children}
    </Text>
  );
}

export default memo(StyledText);
