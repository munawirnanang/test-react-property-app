import React from 'react';

const Card = (props) => {
    return(
        <div className="col-md-4 col-sm-6">
            <div className="property-card">
                <div className="property-image" style={{backgroundImage: `url({assets/assets/images/properties/1.jpg}) center center / cover no-repeat`}}>
                    <span className="property-label label label-warning">For Rent</span>
                </div>

                <div className="property-content">
                    <div className="listingInfo">
                        <div className="">
                            <h5 className="text-success m-t-0">{props.price}</h5>
                        </div>
                        <div className="">
                            <h3 className="text-overflow"><a href="#1" className="text-dark">{props.title}</a></h3>
                            <p className="text-muted text-overflow"><i className="mdi mdi-map-marker-radius m-r-5"></i>{props.address}</p>

                            <div className="row text-center">
                                <div className="col-xs-4">
                                    <h4>{props.feature[0]}</h4>
                                    <p className="text-overflow" title="Square Feet">Square Feet</p>
                                </div>
                                <div className="col-xs-4">
                                    <h4>{props.feature[1]}</h4>
                                    <p className="text-overflow" title="Bedrooms">Bedrooms</p>
                                </div>
                                <div className="col-xs-4">
                                    <h4>{props.feature[2]}</h4>
                                    <p className="text-overflow" title="Parking Space">Parking Space</p>
                                </div>
                            </div>

                            <div className="m-t-20">
                                <button type="button" className="btn btn-success btn-block waves-effect waves-light">View Detail</button>
                            </div>

                        </div>
                    </div>
                    {/* <!-- end. Card actions --> */}
                </div>
                {/* <!-- /inner row --> */}
            </div>
        </div>
    )
}

export default Card;