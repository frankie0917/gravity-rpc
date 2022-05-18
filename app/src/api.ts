import type { services } from '../../server/src/services';
import { defineApi } from '@digitak/gravity-solid';

export const { api } = defineApi<typeof services>({
  // additional options go there
});
