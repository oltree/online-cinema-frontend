import { NextPageAuth } from '@/shared/types/roles.types';

const ActorsPage: NextPageAuth = () => {
  return <div>actors</div>;
};

ActorsPage.isOnlyAdmin = true;

export default ActorsPage;
