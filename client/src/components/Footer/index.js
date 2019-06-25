import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="justify-content-md-center">
          <MDBCol md="3">
            <h5 className="title"><strong>Walk or Wait</strong></h5>
          </MDBCol>
          <MDBCol md="3" sm="12">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3" sm="12">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Toronto</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Montreal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Vancouver</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> WW </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;