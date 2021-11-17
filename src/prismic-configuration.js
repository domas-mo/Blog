import Prismic from '@prismicio/client';

const apiEndpoint = 'https://myspaceblog.prismic.io/api/v2';
const accessToken = '';

const fetchData = async (type) => {
	const client = Prismic.client(apiEndpoint, { accessToken });
	const response = await client.query(Prismic.Predicates.at('document.type', type));

    if(response) {
		return response;
	}
}

export default fetchData;