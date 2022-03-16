import React, {Component} from 'react';

import Card from '../../Component/Homepage/Card';

class Wrapper extends Component {
    state = {
        cardProperty: [
            {
                "id": 1,
                "price": "$12500/M - $19000/M",
                "title": "4BHK Alexander Court,New York",
                "address": "245 E 20th St, New York, NY 201609",
                "feature": ["290", "5", "3"]
            },
            {
                "id": 2,
                "price": "$13500/M - $18000/M",
                "title": "4BHK Alexander Court,New York",
                "address": "245 E 20th St, New York, NY 201609",
                "feature": ["290", "5", "3"]
            },
            {
                "id": 3,
                "price": "$14500/M - $17000/M",
                "title": "4BHK Alexander Court,New York",
                "address": "245 E 20th St, New York, NY 201609",
                "feature": ["290", "5", "3"]
            },
            {
                "id": 4,
                "price": "$15500/M - $16000/M",
                "title": "4BHK Alexander Court,New York",
                "address": "245 E 20th St, New York, NY 201609",
                "feature": ["290", "5", "3"]
            },
        ]
    }

    render(){
        return(
            <div className="wrapper">
                <div className="container">

                    {/* <!-- Page-Title --> */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="btn-group pull-right">
                                    <ol className="breadcrumb hide-phone p-0 m-0">
                                        <li>
                                            <a href="#1">Zircos</a>
                                        </li>
                                        <li>
                                            <a href="#1">Real Estate</a>
                                        </li>
                                        <li className="active">
                                            Property Column
                                        </li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Property Column</h4>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end page title end breadcrumb --> */}


                    <div className="row text-center">
                        <div className="col-sm-12">
                            <h3 className="m-t-20">Search Properties</h3>
                            <div className="border center-block m-b-20"></div>
                        </div>
                    </div>
                    {/* <!-- end row --> */}

                    <div className="row">
                        <div className="col-sm-12">
                            <form className="row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <select className="selectpicker show-tick" data-style="btn-default">
                                            {/* <option value="0" disabled selected>Status</option> */}
                                            <option value="0" disabled>Status</option>
                                            <option value="1">Rent</option>
                                            <option value="2">Sale</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <select className="selectpicker show-tick" data-style="btn-default">
                                            <option value="">Country</option>
                                            <option value="1">France</option>
                                            <option value="2">Great Britain</option>
                                            <option value="3">Spain</option>
                                            <option value="4">Russia</option>
                                            <option value="5">United States</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <select className="selectpicker show-tick" data-style="btn-default">
                                            <option value="">City</option>
                                            <option value="1">New York</option>
                                            <option value="2">Los Angeles</option>
                                            <option value="3">Chicago</option>
                                            <option value="4">Houston</option>
                                            <option value="5">Philadelphia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <select className="selectpicker show-tick" data-style="btn-default">
                                            <option value="">Property Type</option>
                                            <option value="1">Apartment</option>
                                            <option value="2">Condominium</option>
                                            <option value="3">Cottage</option>
                                            <option value="4">Flat</option>
                                            <option value="5">House</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xs-12 m-b-30 text-center m-t-10">
                                    <button type="submit" className="btn btn-purple waves-effect waves-light"><i className="mdi mdi-magnify m-r-5"></i>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- end row --> */}

                    <div className="row">
                        {this.state.cardProperty.map((property)=>
                            <Card key={property.key} price={property.price} title={property.title} address={property.address} feature={property.feature} />
                        )}
                        {/* <!-- end col --> */}
                    </div>
                    {/* <!-- end row --> */}


                    <div className="text-right">
                        <ul className="pagination pagination-split">
                            <li className="disabled">
                                <a href="#1"><i className="fa fa-angle-left"></i></a>
                            </li>
                            <li className="active">
                                <a href="#1">1</a>
                            </li>
                            <li>
                                <a href="#1">2</a>
                            </li>
                            <li>
                                <a href="#1">3</a>
                            </li>
                            <li>
                                <a href="#1">4</a>
                            </li>
                            <li>
                                <a href="#1">5</a>
                            </li>
                            <li>
                                <a href="#1"><i className="fa fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </div>



                    {/* <!-- Footer --> */}
                    <footer className="footer text-right">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    © 2016 - 2018 Zircos.
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- End Footer --> */}

                </div> {/* <!-- end container --> */}
            </div>
            // {/* <!-- end wrapper --> */}
        )
    }
}

export default Wrapper;