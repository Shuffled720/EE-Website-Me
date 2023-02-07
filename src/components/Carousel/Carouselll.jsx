

import React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box } from '@mui/system';

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img_url: "bg_1 (Custom).jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img_url: "bg_2 (Custom).jpg"

        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            img_url: "bg_3 (Custom).jpg"

        }

    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Box >
            <img className='carousel-bg' src={props.item.img_url} alt='carr'  width='100%' height='550px'/>
            {/* <div className='carousel-text'>

                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div> */}
        </Box>
    )
}

export default Example