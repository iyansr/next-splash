import { type DependencyList, type EffectCallback, useEffect, useRef } from 'react';

function useUpdated(callback: EffectCallback, deps: DependencyList) {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) {
      return callback();
    }
    mounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdated;
