import { gql } from "@apollo/client";

export const getLaunches = gql`
  query Launches($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      mission_name
      launch_date_local
      links {
        flickr_images
      }
    }
  }
`;

export const LaunchQuery = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      details
      launch_date_local
      launch_site {
        site_name
      }
      mission_name
      rocket {
        rocket_type
        rocket_name
        rocket {
          description
        }
      }
      ships {
        image
        name
        model
      }
    }
  }
`;
