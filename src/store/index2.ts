import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagSrote';

const store = {
  ...recordStore,
  ...tagStore
};

export default store;