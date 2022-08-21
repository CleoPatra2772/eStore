import React from 'react';
import { Products } from '../Products/products.component';
import { SideBar } from '../Sidebar/side-bar.component';
import './main-container.styles.scss';


class MainContainer extends React.Component {
    render(){
        return(
            <section>
                <div className='container-fluid'>
                <div className='row'>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                   <SideBar />
                </div>
                <div className='col-lg-10 col-md-9 col-sm-8'>
                   <Products />
                </div>
                </div>
                </div>
            </section>
        )
    }
}

export default MainContainer;