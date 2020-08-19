import React, {Component} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Jumbotron , Col, CardTitle} from 'reactstrap';
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
                <Col className="text-dark text-center py-5 px-4 " style={{ backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg)` }}>    
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>T.P.C</h1>
                                <p>TRANING AND PLACEMENT CELL BIET JHANSI</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <div>
                <Col className="text-dark text-center py-5 px-4 " style={{ backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg)` }}>
                    
                <div className="col-md-8 mx-auto">

                    <SimpleImageSlider
                        width={856}
                        height={504}
                        images={images}
                    />
                    </div>
                    </Col>
                </div>

                <div>
                    <Col className="text-dark text-center py-5 px-4 " style={{ backgroundImage: `url(https://image.freepik.com/free-vector/elegant-white-texture-background_23-2148431731.jpg)` }}>
                    <Col className="py-2">
                    <CardTitle className="h1-responsive pt-3 m-4 font-bold ">BIET JHANSI gives you an edge over the rest</CardTitle>
                    <p className="mx-5 mb-2">Continuing with its tradition of making new grounds every year, BIET JHANSI, the placement of this year is started with finalizing the schedule of dream companies like ADOBE, , TECH MAHINDRA, HCL COMNET, SYNERGY TECH, NECHCL ST, DSCL, JINDAL,ADTEL, L&T, SAMSUNG etc. the highest package offered this year is staggering Rs. 7.89 Lacs/year excluding benefits. The profiles offered included software, quality engineering, system administrator etc, and many more. The placements at BIET JHANSI witnessed, reaffirming the faith the industry has in the college and the quality of its students.
In standing with BIET JHANSI being the pre-eminent technical campus of the country. Most of the students choose to join the developing sector with higher salaries. By placing one of the largest batches across all Govt. college, we have reaffirmed the faith of our recruiters-cum-partners in this process. BIET JHANSI has always been the preferred destination among recruiters. This has been established by our placement figures, which are one of the best across the state year after year. The strong academic culture fostered by the faculty and the supportive Alumni have played a major role in our sustained success and we like to use this opportunity to thank them all. The placement team also takes this opportunity to thank everyone- the administration, support staff, students and faculty who helped us run the process smoothly.</p>
                    </Col>
                    </Col>
                </div>
                <div>
                    <Col className="text-dark text-center py-5 px-4 " style={{ backgroundImage: `url(https://www.lefthudson.com/wp-content/uploads/2019/11/white-hd-background-inspirational-plain-white-wallpapers-hd-wallpapersafari-this-week-of-white-hd-background.jpg)` }}>
                    <h1>OUR recruiters</h1>
                    <br/>
                        <Logo/>
                    </Col>
                </div>
            </div>
            
        );
    }
}

export default Home;