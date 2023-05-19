import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconType } from '@/shared/types/icon.type';

interface MaterialIconProps {
  name: MaterialIconType;
}

const MaterialIcon: FC<MaterialIconProps> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
