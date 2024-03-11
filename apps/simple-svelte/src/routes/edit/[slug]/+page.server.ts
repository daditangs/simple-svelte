import { seafarers } from '../../../data';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	console.log('list: ', seafarers.filter((item) => item.id.toString() === params.slug)[0]);
	return {
		slug: params.slug,
		seafarer: seafarers.filter((item) => item.id.toString() === params.slug)[0]
	};
}
