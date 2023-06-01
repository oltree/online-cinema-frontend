import { useEffect, useState } from 'react';

//client-side render hook (e.g. MaterialIcon component)
export const useRenderClient = () => {
  const [isRenderClient, setIsRenderClient] = useState(false);

  useEffect(() => {
    !isRenderClient && setIsRenderClient(true);
  }, [isRenderClient]);

  return { isRenderClient };
};
