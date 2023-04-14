import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CommentPost = ({ storyId, parentId, comment, createComment, updateComment, authorId }) => {
  const [body, setBody] = useState(comment ? comment.body : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      updateComment({
        id: comment.id,
        body: body,
      });
    } else {
      createComment({
        story_id: storyId,
        parent_id: parentId,
        body: body,
        author_id: authorId,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="body">Body</Label>
        <Input
          type="textarea"
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default CommentPost;

