import React from "react";
import {  MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
return (
    <MDBCol md="6">
      <form>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Message
        </label>
        <textarea id="defaultFormContactMessageEx" className="form-control"/>
        <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                    <MDBIcon fa icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
      );
    };

    export default FormPage;