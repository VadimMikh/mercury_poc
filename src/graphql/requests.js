import { gql } from 'apollo-boost';

export const USERS = gql`
{
    users {
        data {
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
}
`;