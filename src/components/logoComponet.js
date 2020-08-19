import React, { Component } from 'react';
import { Media ,Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle} from 'reactstrap';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [
                {
                  id: 0,
                  image: 'assets/images/1.jpg',
                  },
                  {
                    id: 1,
                    image: 'assets/images/2.png',
                    },
                {
                    id: 2,
                    image: 'assets/images/5.png',
                },
                {
                    id: 3,
                    image: 'assets/images/4.png',
                    },
                {
                    id: 4,
                    image: 'assets/images/3.jpg',
                 },
               ],
        };
    }

    render() {
        const logo = this.state.companies.map((comp) => {
            return (
            <div  className="col-12 col-md-3 m-10">
              <Card key={comp.id} className="col-12">
                  <CardImg width="100%" src={comp.image} />
              </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                  {logo}
            </div>
          </div>
        );
    }
}

export default Logo;