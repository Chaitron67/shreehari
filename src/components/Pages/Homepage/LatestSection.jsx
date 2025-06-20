import React from 'react'
import "./LatestSection.css"

const LatestSection = () => {
    return (
        <>
            <section class="container image-section">
                <h2>Explore Our Latest Collection</h2>
                <div id="model-image">
                    <a href="shop.html"><img src="/assets/images/image2.jpg" alt="banner"/></a>
                    <div id="necklace-images">
                        <img src="/assets/images/necklace3.jpg" alt="necklace-image" height="306px" />
                        <img src="/assets/images/necklace4.jpg" alt="necklace-image" height="306px" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestSection