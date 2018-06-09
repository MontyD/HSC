import gql from 'graphql-tag';

export const READ_TALKS = gql`{
	readTalks {
		pageInfo {
			totalCount
			hasNextPage
			hasPreviousPage
		}
		edges {
			node {
                ID
                name
                date
				description
				audioFile {
					url
				}
				author {
					name
				}
			}
		}
	}
}`;