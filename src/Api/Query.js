import { gql } from "@apollo/client";

// export const BASE_URL="https://api-ap-south-1.graphcms.com/v2/cl3va596peya101z1cc8m66bx/master"; SARFARAZ
export const BASE_URL = "https://api-ap-south-1.graphcms.com/v2/cl3vy0joxg5zj01z1do204woq/master";

export const LOAD_POSTS = gql`
  query {
    posts {
        title
        coverImage {
          url
        }
        slug
        excerpt
        date
    }
  }
`;

export const LOAD_POST_CONTENT = (slug) => gql`
query {
  post(where: {slug: "${slug}"}) {
    author {
      name
    }
    content {
      html
    }
    coverImage {
      url
    }
    date
    title
  }
}
`;


export default LOAD_POSTS;
