/* eslint-disable @typescript-eslint/no-explicit-any */
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: { params: any }) {
	return {
		slug: params.slug
	};
}
