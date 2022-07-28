import PropTypes from 'prop-types';

import { Segment, Card, Image } from 'semantic-ui-react';

function ReposResults({ repos }) {
  return (
    <Segment>
      <Card.Group itemsPerRow={3}>
        {
          repos.map((repo) => (
            <Card key={repo.id}>
              <Image src={repo.owner.avatar_url} wrapped ui={false} alt="avatar image" />
              <Card.Content>
                <Card.Header>{repo.name}</Card.Header>
                <Card.Meta>
                  <span>{repo.language}</span>
                </Card.Meta>
                <Card.Description>
                  {repo.description}
                </Card.Description>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </Segment>
  );
}

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
