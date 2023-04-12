

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CommentPost = ({ parentId, comment, createComment, updateComment }) => {
    let body, author;
    return (
        <Form
        onSubmit={e => {
            e.preventDefault();
            if (comment) {
            updateComment({
                id: comment.id,
                body: body.value,

            });
            } else {
            createComment({
                parentId,
                body: body.value,

            });

            }
        }}
        >
        <FormGroup>
            <Label for="body">Body</Label>
            <Input
            type="textarea"
            name="body"
            id="body"
            defaultValue={comment ? comment.body : ''}
            innerRef={node => (body = node)}
            />
        </FormGroup>
        <Button>Submit</Button>
        </Form>
    );
};

export default CommentPost;