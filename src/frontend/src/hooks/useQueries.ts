import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

// Placeholder for future backend integration
// Currently no backend queries are needed as the site is content-based

export function useExampleQuery() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      if (!actor) return null;
      // Future backend calls will go here
      return null;
    },
    enabled: !!actor && !isFetching,
  });
}
