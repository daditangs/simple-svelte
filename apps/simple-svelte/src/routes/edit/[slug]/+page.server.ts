import { seafarers } from '../../../data';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		slug: params.slug,
		seafarer: seafarers.filter((item) => item.id.toString() === params.slug)[0]
	};
}
