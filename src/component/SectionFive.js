import React from 'react';
import ftimg1 from "../image/linkedin-sales-navigator-402831.png";
import ftimg2 from "../image/charles-etoroma-390119.png";
import "../component/SectionFive.css";

function SectionFive() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 px-0">
                        <img className="img1" src={ftimg1} alt=""/>
                    </div>
                    <div className="col-xl-8">
                        <p className="ft-title1">YOU SHOULD ALSO KNOW</p>
                        <p className="ft-text1">MDD affects more than 16.1 million American adults, or about 6.7%of the
                            U.S.
                            population age 18 and older in a given year. We at ThriveTalk can help you.</p>
                        <p className="ft-title2">GET HELP NOW</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 bg-blue">
                        <p className="ft-title3">CONTACT US</p>
                        <p className="ft-text2">Ready. Set. Smile</p>
                        <p className="ft-text3">Take the free online assessment to see if you are a candidate and get
                            started on your journey.</p>
                        <p className="ft-title4">GET HELP NOW</p>
                    </div>

                    <div className="col-xl-4 px-0">
                        <img className="img2" src={ftimg2} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionFive;