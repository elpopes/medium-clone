// component to edit a comment

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment } from '../../actions/comments';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CommentEdit = ({ comment, updateComment }) => {
    let body;
    return (
        <Form
        onSubmit={e => {
            e.preventDefault();
            updateComment({
            id: comment.id,
            body: body.value
            });
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
    }

export default CommentEdit;
