import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const Comment = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Cards</h3>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} content={faker.lorem.sentence()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} content="This has been very useful for my research. Thanks as well!" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail avatar={faker.image.avatar()} author={faker.name.firstName()} content="Dude, this is awesome. Thanks so much" />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
);
