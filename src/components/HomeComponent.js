import React, {Component} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Jumbotron } from 'reactstrap';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

class Home extends Component {
    render() {
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];

        return (
            <div >
                <div >
                <SimpleImageSlider
                    width={1350}
                    height={504}
                    images={images}
                />
                </div>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>T.P.C</h1>
                                <p>TRANING AND PLACEMENT CELL BIET JHANSI</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <SplitterLayout>
                    <div>Pane 1
                            
                    </div>
                    <div>Pane 2</div>
                </SplitterLayout>
            </div>
            
        );
    }
}

export default Home;