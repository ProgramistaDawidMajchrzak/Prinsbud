import React, { useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';

import gallery1 from '../images/gallery-2.jpg';
import gallery2 from '../images/gallery-3.jpg';
import gallery3 from '../images/gallery-4.jpg';
import gallery4 from '../images/gallery-5.jpg';

export default function Gallery() {

    const galleryImages = [
        { id: 1, imageSrc: gallery1 },
        { id: 2, imageSrc: gallery2 },
        { id: 3, imageSrc: gallery3 },
        { id: 4, imageSrc: gallery4 }
    ]

    const [openLightbox, setOpenLightBox] = useState(false);
    const [lightbox, setLightBox] = useState();

    return (
        <>
            <div className="product-box-gallery">
                {galleryImages.map(image =>
                    <div
                        onClick={() => {
                            setLightBox(image.id)
                            setOpenLightBox(true)
                        }}
                        className='product-box-gallery-image'
                        key={image.id} >
                        <img src={image.imageSrc} alt="" />
                    </div>
                )}
            </div>
            {openLightbox && <div className="image-lightbox">
                <div onClick={() => setOpenLightBox(false)} className="image-lightbox-opacity"></div>
                <img src={galleryImages[lightbox - 1].imageSrc} alt="img" />
                <ClearIcon onClick={() => setOpenLightBox(false)} className='image-lightbox-close-icon' />
            </div>}
        </>
    )
}
