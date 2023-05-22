import { FC, memo } from 'react';

import { Button } from '@/components/ui/button';

import { useAuth } from '@/hooks/useAuth';

import { AuthModes } from '@/shared/enums/authModes.enum';
import { AuthModeType } from '@/shared/types/authMode.type';

import styles from '../Auth.module.scss';

interface AuthButtonsProps {
  setMode: (mode: AuthModeType) => void;
}

export const AuthButtons: FC<AuthButtonsProps> = memo(({ setMode }) => {
  const { isLoading } = useAuth();

  return (
    <div className={styles.buttons}>
      <Button
        type='submit'
        onClick={() => setMode(AuthModes.Login)}
        disabled={isLoading}
        className={styles.button}
      >
        {AuthModes.Login}
      </Button>
      <Button
        type='submit'
        onClick={() => setMode(AuthModes.Register)}
        disabled={isLoading}
        className={styles.button}
      >
        {AuthModes.Register}
      </Button>
    </div>
  );
});