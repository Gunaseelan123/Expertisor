import React from 'react'
import Marquee from 'react-fast-marquee';

import Reviews from './Reviews';

const Infinite = () => {

    const datas = [
        {
            para: "It was a very good session; it helped me a lot and gave me a solid roadmap to achieve my goal, and I feel much more confident about my next step. Thank you.",
            name: "Aswanth A",
            course: "Full stack developer",
        },
        {
            para: "He was very friendly teach like a friend and guidance was also good. Guys i highly recommended this section for fresher finally, its worth it",
            name: "Juliet Mary",
            course: "Full stack developer",
        },
        {
            para: "I get detail step by step interview process and application apply process it was very helpful and clearly understanble thankyou for time bro",
            name: "Ajai",
            course: "Full stack developer",
        },
        {
            para: "Just for this price ,No one can give a mentorship like this,I Got a clear roadmap for my dream job,This is very helpful for me and everybody should book a slot to get a clear way to reach their goal.Thanks a Lot Anna❤️",
            name: "Karthick Raja",
            course: "Full stack developer",
        },
        {
            para: "I have a litle confusion in descion making and lack of hope to continue my job searching in IT feild after the carrier guidence he gave me a solution for my doubts ,i got a clear idea what i'll do in my job searching.",
            name: "Hariharan S ",
            course: "Full stack developer",
        },
        {
            para: "It's a very wonderful session my doubts are cleared and I got a clear idea & sharmilan bro is very friendly, guiding as a friend. I highly recommend to join this session.Thank you so much bro.",
            name: "Roshini",
            course: "Full stack developer",
        },
        {
            para: "This session is an eye-opener for me. Great talking to Sharmilan. Request him to continue mentoring those who need career guidance. This session is really worth it",
            name: "Jayaprakash",
            course: "Full stack developer",
        },
        {
            para: "Nice conversation with us .I learn more knowledge of my future career field tips and skills.thank you Ann'a and more over session was interesting and regrading to improve my skills sets of job related queries.and I will call you again anna to share my job experience with you anna.Thank you so much I will do my best in my future .it's a pleasant evening and all the best for your gudience and keep going anna.",
            name: "SHARUMATHI",
            course: "Full stack developer",
        },
        {
            para: "I had a very gud conversation which guided me alot. Such a genuine guiding....hope I get placed soon based on ur guidence...Looking forward for your vdos in utube which will help in career guidance",
            name: "Usha Kumari",
            course: "Full stack developer",
        },
        {
            para: "Sharmilan has been an incredible guide and inspiration, providing invaluable support and wisdom throughout my journey. His mentorship has truly shaped my growth, and I am deeply grateful for his guidance.",
            name: "Sriram",
            course: "Full stack developer",
        },
        {
            para: "it's very helpful for me about my career,I got some idea now, So thank you so much, it was engaging insightful session with you.. and next time I connect call with my achievements .... Thankyou so much..",
            name: "Chandru",
            course: "Full stack developer",
        },
        {
            para: "Thank you for the great opportunity to connect with you Sharmilan. The information you have provided was valuable and helpful.",
            name: "Tamilselvan R",
            course: "Full stack developer",
        },
        {
            para: "I have many doubts but he clearly explain everything ,how it work and other things.he also gave few ideas to Start my career in correct way.thank you so much for ur valuable time.",
            name: "Gokul S",
            course: "Full stack developer",
        },
        {
            para: "Thank you for the truly enlightening career counseling session. I walked away with a renewed sense of direction and actionable steps that feel both exciting and achievable. . I’m now more confident and motivated to take charge of my career with a clearer purpose. I’m truly grateful for your expertise and the personal touch you brought to the session!",
            name: "Ruba.K",
            course: "Full stack developer",
        },
        {
            para: "I didn't expect i will get these much clarity in this one session. Lot of patience and well explained session. Thanks a lot sharmilan for sharing more insights on my doubts. I truly appreciate the time and effort you've invested in mentoring me. your guidance has been invaluable, and i'm grateful for your willingness to share your knowledge and experience.",
            name: "Malleeshwari M",
            course: "Full stack developer",
        },
        {
            para: "It was quite insightful. I got some clear ideas in building a proper IT portfolio and in finding the best way for company search(job switching in less than a year bcz of a situation). Glad you guided me in my downtime.",
            name: "Sam",
            course: "Full stack developer",
        },

        {
            para: "I am a fresher. And I didn't had idea about how Zoho's testing process and the topics they will be covering. So this video gave an idea about the same and it helped me to prepare accordingly.",
            name: "Angeline",
            course: "Full stack developer",
        },
        {
            para: "The mentor’s ability to provide real-world examples and practical advice was the most helpful aspect. Their guidance on automation testing and career progression strategies gave me a clear direction.",
            name: "Arun",
            course: "Full stack developer",
        },
        {
            para: "Hi me krishnakanth Nedunchezian today I will attend 1:1 mentorship with sharmilan bro lot of doubts in my mind how to go build my career all the confusion will be cut clear answer for me thank you so much",
            name: "Krishnakanth ",
            course: "Full stack developer",
        },
        {
            para: "His guidance put me in the right direction for getting my dream job. I thank Mr. Sharmilan for sharing his knowledge.",
            name: "S KEERTHANA",
            course: "Full stack developer",
        },
        {
            para: "You delivered the points which were most needed for the hour and it was not beating around the bush.",
            name: "Pavithra Sri Bhavani cc",
            course: "Full stack developer",
        },
        {
            para: "Mr.sharmilan really guide me very well, also he sort out all of my clarification .",
            name: "Manoj",
            course: "Full stack developer",
        },
        {
            para: "Guide for career gap, nice chat, giving suggestions, and providing full explanation on IT fields. How to enter into the IT role. Thanks for your support. I will contact you further.",
            name: "Sandhiya",
            course: "Full stack developer",
        },
        {
            para: "The mentorship was highly supportive, friendly, and very useful. It provided excellent guidance, strong technical insights, and valuable career advice, making learning smooth and impactful. Highly recommended for IT freshers!",
            name: "Imran Khan V",
            course: "Full stack developer",
        },
    ];


    return (
        <div>
            <div>
                <Marquee speed={80} pauseOnHover >
                    {datas.map((value, index) => (
                        <Reviews key={index} value={value} />
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Infinite