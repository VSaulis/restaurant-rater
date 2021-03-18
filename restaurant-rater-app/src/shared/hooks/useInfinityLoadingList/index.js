import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';

const initialPaging = { limit: 20, offset: 0 };

const useInfinityLoadingList = (props) => {
  const {
    count,
    refreshAction,
    loadMoreAction,
    isLoading,
    isRefreshing,
    filter,
    sort,
  } = props;

  const [paging, setPaging] = useState(initialPaging);
  const [canLoadMore, setCanLoadMore] = useState(count > paging.offset);

  useDeepCompareEffect(() => {
    setCanLoadMore(count > paging.offset);
  }, [paging, count]);

  useDeepCompareEffect(() => {
    const request = { filter, sort, paging };

    if (paging.offset === 0) {
      refreshAction(request);
    }

    if (paging.offset > 0 && canLoadMore) {
      loadMoreAction(request);
    }
  }, [filter, sort, paging]);

  const loadMore = () => {
    if (canLoadMore && !isLoading && !isRefreshing) {
      setPaging({ ...paging, offset: paging.offset + paging.limit });
    }
  };

  const refresh = () => {
    setPaging({ ...paging, offset: 0 });
  };

  return { loadMore, refresh };
};

export default useInfinityLoadingList;
