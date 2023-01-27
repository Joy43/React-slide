 import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

  const News = (props) => {
//  const [title,description]=props;

   return (

     <div>
        <Card>
        <Card.Header>Featured</Card.Header>
         <Card.Body>
         <Card.Title>hello world</Card.Title>
         <Card.Text>
           
we are one for the nation
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
     
     </div>
   );
 };

 export default News;