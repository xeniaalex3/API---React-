import PropTypes from 'prop-types';

import { Segment } from 'semantic-ui-react';

function Message({ totalCount }) {
  return (
    <Segment>La recherche a donné {totalCount} résultats </Segment>
  );
}

Message.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default Message;
