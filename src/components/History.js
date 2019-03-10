import React, {Component} from 'react';
import '../css/App.css';
import CartesianGrid from "recharts/es6/cartesian/CartesianGrid";
import XAxis from "recharts/es6/cartesian/XAxis";
import YAxis from "recharts/es6/cartesian/YAxis";
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import {getHistory} from "../utils/apiReq";
import LineChart from "recharts/es6/chart/LineChart";
import Line from "recharts/es6/cartesian/Line";
import BarChart from "recharts/es6/chart/BarChart";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Bar from "recharts/es6/cartesian/Bar";
import Legend from "recharts/es6/component/Legend";

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            history: null,
            hasHistory: false,
        }
    }

    componentDidMount() {
        this.getHistoryDetail()
    }

    getHistoryDetail = () => {
        getHistory().then(response => {
            console.log(response)
            this.setState({
                hasHistory: true,
                history: response,
            });
        })
    }
    render() {

            return (
                <div>
                    <h1 className='App-Title'> History </h1>
                    <div className="question">
                    {
                        this.state.hasHistory &&
                        <div className="question-container">
                            <ResponsiveContainer width='100%' height="100%">
                                <BarChart data={this.state.history}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="fallsInMonth" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    }

                </div>
                </div>

            )
        }
}
export default (History);
