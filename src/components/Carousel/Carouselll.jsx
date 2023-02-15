

import React from 'react';
import Carousel from 'react-material-ui-carousel'


// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import { Box } from '@mui/system';

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img_url: "bg_1.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img_url: "bg_2.jpg"

        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            img_url: "bg_3.jpg"

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
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                {/* <ImageList sx={{ width: '100%', height: 500 }} cols={1} rowHeight={1}>
                
                    <ImageListItem >
                        <img
                            src={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={props.item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                
            </ImageList> */}
                <img  src={props.item.img_url} alt='carr' width='100%' height='600px' />
                {/* <div className='carousel-text'>

                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div> */}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <img  src={props.item.img_url} alt='carr' width='100%' height='250px' />

            </Box>
        </>



    )
}

export default Example