import { gql } from "@apollo/client";

export const SEND_POSTS = gql`
mutation {
    createPost(usersNew:UserInput){
    success
    error
    message
  }
}
input UserInput{
    fName:String
    lName:String
    email:String
    message:String
  }
`;