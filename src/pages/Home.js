import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition} from 'semantic-ui-react';

import { AuthContext } from '../context/auth';
import PostCard from '../components/PostCard';
import UserCard from '../components/UserCard';

import PostForm from '../components/PostForm';
import { FETCH_POSTS_QUERY } from '../util/graphql';

function Home() {
  const { user } = useContext(AuthContext);
  const {loading, data: { getPosts: posts, getUsers: users}} = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={2}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>

    
  
      <Grid.Row>
      <Grid.Column width={3}>
        {users &&
              users.map((user) => (
                <Grid.Row key={user.id} style={{ marginBottom: 20 }}>
                  <UserCard post={user} />
                </Grid.Row>
              ))}
        </Grid.Column>
      <Grid.Column width={13}>
      {user && (
          <Grid.Row style={{marginBottom: 20}}>
              <PostForm />
          </Grid.Row>
        )}

        <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
        </Grid.Row>
       </Grid.Column>      
      </Grid.Row>
    </Grid>
  );
}

export default Home;
