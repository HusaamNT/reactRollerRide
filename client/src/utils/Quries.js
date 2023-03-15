import { gql } from "@apollo/client";

export const GET_TICKETS = gql`
    query GetTickets {
        getAllPackages {
            _id
            passType
            ticketName
            ticketPrice
        }
    }
`;