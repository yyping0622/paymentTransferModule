import React, {Fragment} from 'react';
import {IconVariantProps} from '../../types/component/IconTypes';
import {TouchableOpacity} from 'react-native';
import {theme} from '../../styles/theme';
import {IconTuples} from './IconTuples';
import {IconProps} from '../../interface/IconInterface';

const Icon = ({
  width = 35,
  height = 35,
  variant,
  onClick,
  color = theme.colors.background.dark,
  style,
}: IconProps) => {
  const TouchableIcon = onClick ? TouchableOpacity : Fragment;
  const IconComponents = IconTuples[variant as IconVariantProps];

  const renderIcon = IconComponents ? (
    <IconComponents color={color} width={width} height={height} style={style} />
  ) : (
    <></>
  );

  return (
    <TouchableIcon {...(onClick && {onPress: () => onClick()})}>
      {renderIcon}
    </TouchableIcon>
  );
};

export default Icon;
