import { IUser } from '@/shared/interfaces/user.interface';

export interface IUserState {
  email: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
