import gql from 'graphql-tag';

export const READ_TALKS = gql`
query PaginatedTalks($offset: Int!, $limit: Int!) {
	readTalks(offset: $offset, limit: $limit) {
		pageInfo {
			totalCount
			hasNextPage
			hasPreviousPage
		}
		edges {
			node {
				ID
				name
				description
				date
				audioFile {
					url
				}
				author {
					name
					image {
						url
					}
				}
				series {
					name
					image {
						url
					}
				}
			}
		}
	}
}
`;