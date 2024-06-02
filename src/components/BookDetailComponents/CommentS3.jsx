import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const CommentS3 = ({comments}) => {
  const dummyComments = [
    {
      author: 'Matt',
      avatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
      metadata: 'Today at 5:42PM',
      text: 'How artistic!',
    },
    {
      author: 'Elliot Fu',
      avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      metadata: 'Yesterday at 12:30AM',
      text: 'This has been very useful for my research. Thanks as well!',
    },
    {
      author: 'Elliot Fu',
      avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
      metadata: 'Yesterday at 12:30AM',
      text: 'This has been very useful for my research. Thanks as well!',
    },
    {
      author: 'Joe Henderson',
      avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
      metadata: '5 days ago',
      text: 'Dude, this is awesome. Thanks so much',
    },
    {
      author: 'Joe Henderson',
      avatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
      metadata: '5 days ago',
      text: 'Dude, this is awesome. Thanks so much',
    },
  ];
  const reviewCount = dummyComments.length;

  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Reviews ({reviewCount})
      </Header>

      {comments.map((comment, index) => (
        <Comment key={index}>
          <Comment.Avatar src={comment.avatar} />
          <Comment.Content>
            <Comment.Author as='a'>{comment.email}</Comment.Author>
            <Comment.Metadata>
              {/* <div>{comment.metadata}</div> */}
            </Comment.Metadata>
            <Comment.Text>{comment.body}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      ))}

      <Form reply>
        <Form.TextArea />
        <Button content='Komentar' labelPosition='left' icon='edit' primary />
      </Form>
    </Comment.Group>
  );
}

export default CommentS3;
