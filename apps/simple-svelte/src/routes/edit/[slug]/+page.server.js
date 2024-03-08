import { list } from '../../../data.js';
// @ts-expect-error: This is a workaround for a known TypeScript issue
export const load = ({ params }) => {
  console.log('list: ', list.filter((item) => item.id === params.slug)[0]);
  return {
      slug: params.slug,
      data: list.filter((item) => item.id === params.slug)[0]
  }
}
