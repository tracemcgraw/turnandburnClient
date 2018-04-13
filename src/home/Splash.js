import React, { Component } from 'react';
import WorkoutIndex from '../workouts/WorkoutIndex';

class Splash extends Component{
    render(){
        return (
            <div>
                Welcome User
                <WorkoutIndex token= {this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;