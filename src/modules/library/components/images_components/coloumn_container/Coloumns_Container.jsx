import React from 'react'
import LibraryCard from '../LibraryCard/LibraryCard'
import astro1 from './../../../assets/library-card-images/astro.png'
import astro2 from './../../../assets/library-card-images/astronaut.png'
import astro3 from './../../../assets/library-card-images/control.png'
import alian1 from './../../../assets/library-card-images/alian_1.png'
import alian2 from './../../../assets/library-card-images/alian_2.png'
import alian3 from './../../../assets/library-card-images/alian_3.png'
import user1 from './../../../assets/library-users/user_1.png'
import user2 from './../../../assets/library-users/user2.png'
import user3 from './../../../assets/library-users/user3.png'
import user4 from './../../../assets/library-users/user_4.png'
import tap_icon from './../../../assets/card-icons/dots.svg'
import './Coloumns_Container.css'

const Coloumns_Container = () => {
    return (
        <>
            {/* Container of columes */}
            <div className="tjo_colums_container">
                {/* first column */}
                <div className="tjo_coloumn">
                    {/* Tap header */}
                    <div className="tjo_tap_header">
                        <span className="tjo_tap_text">Images</span>
                        <div className="tjo_icon_container">
                            <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                        </div>
                    </div>
                    <LibraryCard header_title="Captain Drake" header_sub_title="Natural born leader with years of experience in space exploration." first_img={astro1} sec_img={astro2} th_img={astro3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="12" />
                    <LibraryCard header_title="Cosmic Voyager" header_sub_title="Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds." first_img={alian1} sec_img={alian2} th_img={alian3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_visible={true} number="27" />
                </div>
                {/* container line between columns */}
                < div className="tjo_container_line" />
                {/* secound column */}
                <div className="tjo_coloumn">
                    {/* Tap header */}
                    <div className="tjo_tap_header">
                        <span className="tjo_tap_text">Documents</span>
                        <div className="tjo_icon_container">
                            <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                        </div>
                    </div>
                    <LibraryCard header_title="Captain Drake" header_sub_title="Natural born leader with years of experience in space exploration." first_img={astro1} sec_img={astro2} th_img={astro3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="12" />
                    <LibraryCard header_title="Cosmic Voyager" header_sub_title="Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds." first_img={alian1} sec_img={alian2} th_img={alian3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_visible={true} number="27" />
                </div>
                {/* container line between columns */}
                < div className="tjo_container_line" />
                {/* theerd column */}
                <div className="tjo_coloumn">
                    {/* Tap header */}
                    <div className="tjo_tap_header">
                        <span className="tjo_tap_text">Ideas</span>
                        <div className="tjo_icon_container">
                            <img src={tap_icon} alt="tap_icon" className="tjo_tap_icon" />
                        </div>
                    </div>
                    <LibraryCard header_title="Captain Drake" header_sub_title="Natural born leader with years of experience in space exploration." first_img={astro1} sec_img={astro2} th_img={astro3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_users_imag3={user3} tjo_users_imag4={user4} tjo_visible={false} number="12" />
                    <LibraryCard header_title="Cosmic Voyager" header_sub_title="Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds." first_img={alian1} sec_img={alian2} th_img={alian3} tjo_users_imag1={user1} tjo_users_imag2={user2} tjo_visible={true} number="27" />
                </div>
            </div>
        </>
    )
}

export default Coloumns_Container