import React from 'react';
import { SideBar } from '../Sidebar/side-bar.component';
import './main-container.styles.scss';


class MainContainer extends React.Component {
    render(){
        return(
            <section>
                <div className='container-fluid'>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                   <SideBar />
                </div>
                </div>
            </section>
        )
    }
}

export default MainContainer;