import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const PDF = () => {

  return (
    <>
      <div>
        <Link to="/pdf/Version-A">
        <Button>
          Version A
        </Button>
        </Link>
        <Link to="/pdf/Version-B">
        <Button>
          Version B
        </Button>
        </Link>
      </div>
    </>
  );
};

export default PDF;
