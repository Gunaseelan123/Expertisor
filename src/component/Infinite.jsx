import React from 'react'
import Marquee from 'react-fast-marquee';
import coma from "../assets/coma.png";
import cap from "../assets/cap.png"
import Reviews from './Reviews';

const Infinite = () => {

    const datas = [
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },
        {
            im: coma,
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
            cap: cap
        },

    ];


    return (
        <div>
            <div>
                <Marquee speed={80} pauseOnHover >
                    {datas.map((value, index) => (
                       <Reviews key={index} value={value}/>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Infinite