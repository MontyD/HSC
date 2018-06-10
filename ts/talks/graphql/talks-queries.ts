import gql from 'graphql-tag';

export const READ_TALKS = gql`{
	readTalks(offset: 1, limit: 1) {
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
}`;