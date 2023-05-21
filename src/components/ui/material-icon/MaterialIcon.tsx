import { FC, memo } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconType } from '@/shared/types/icon.type';

interface MaterialIconProps {
  name: MaterialIconType;
}

export const MaterialIcon: FC<MaterialIconProps> = memo(({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
});
