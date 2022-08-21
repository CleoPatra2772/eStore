import './side-bar.styles.scss';

export const SideBar = () => {
    return (
        <div className='side-bar-category'>
        <div className='section-title'>
            <h4>categories</h4>
        </div>
        <div className='category-accordian'>
            <div className='accordian'>
            <div className='card'>
                <div className='card-heading'>
                    <a>Women</a>

                </div>
                <div className='card-body'>
                    <ul>
                        <li>
                            <a href='#'>Coats</a>
                        </li>
                        <li>
                            <a href='#'>Jackets</a>
                        </li>
                        <li>
                            <a href='#'>Dresses</a>
                        </li>
                        <li>
                            <a href='#'>Shirts</a>
                        </li>
                    </ul>
                </div>
            </div>

            </div>
        </div>

        </div>
    )
}