import { gql } from 'apollo-boost';

export const USERS = gql`
{
    users {
        id
        username
        email
            website
        company {
          name
          catchPhrase
          bs
        }
    }
}
`;