import { useState } from  'react'
import menu from '../data/menu'
import MenuItem from './MenuItem'
import { Button } from '@mui/material';

const Menu = ({maxItemPerPage=3}) => {
    const [displayedItems, setDisplayedItems] = useState(maxItemPerPage);

    const handleViewMore =()=>{
        setDisplayedItems(prevDisplayedItems => prevDisplayedItems + maxItemPerPage);
    }

    return (
        <div id="projects" className="flex flex-row md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menu.slice(0, displayedItems).map((item) => (
                    <MenuItem
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
            <div>
                {displayedItems < menu.length && (
                    <Button variant="outlined" onClick={handleViewMore} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        View More
                    </Button>
                )}
            </div>
        </div>

    )
}

export default Menu
