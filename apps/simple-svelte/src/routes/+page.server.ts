import { seafarers } from '../data';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		seafarers: seafarers
	};
}
