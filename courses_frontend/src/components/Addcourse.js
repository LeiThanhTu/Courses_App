import React, { useEffect, useState, Fragment } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  FormGroup,
  Input,
  Container,
  Button,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
const Addcourse = () => {
  useEffect(() => {
    document.title = "Add Course || LearnCode";
  }, []);

  const [course, setCourse] = useState({});
  // form handle function
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };
  // creating function to post data on server
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Course added successfully");
        setCourse({ id: "", title: "", description: "" });
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Error ! Something went wrong");
      }
    );
  };

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="userId">Course Id </label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          ></Input>
        </FormGroup>

        <Container className="text-center">
          <Button color="success">Add Course</Button>
          <Button
            type="reset"
            color="warning ml-2"
            onClick={() => {
              setCourse({id: "", title: "", description: ""});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default Addcourse;
