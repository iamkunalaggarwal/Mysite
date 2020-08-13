import React, {Component} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Jumbotron } from 'reactstrap';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import Logo from './logoComponet';

class Home extends Component {
    render() {
        const images = [
            { url: "assets/images/a1.jpg" },
            { url: "assets/images/a2.jpg" },
            { url: "assets/images/a4.jpg" },
            { url: "assets/images/a5.jpg" },
        ];

        return (
            <div >
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
                <div className="col-md-8 mx-auto">
                <SimpleImageSlider
                    width={856}
                    height={504}
                    images={images}
                />
                </div>
               <div >
                <SplitterLayout>
                    <div>

                        <h2>NEWS / NOTICES </h2>
                            
                    </div>
                    <div>
                        <h2>OUR RECRUITERS</h2>
                        <Logo/>
                    </div>
                </SplitterLayout>
                </div>
            </div>
            
        );
    }
}

export default Home;