import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItemsAdmin = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''

    },
    {
        display: 'Class',
        icon: <i className='bx bx-folder'></i>,
        to: '/class',
        section: 'class'


    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'


    },
    {
        display: 'Notice',
        icon: <i className='bx bxs-graduation'></i>,
        to: '/notices',
        section: 'notices'

    },
    {
        display: 'Filieres',
        icon: <i className='bx bxs-blanket'></i>,
        to: '/filieres',
        section: 'filieres'

    }, {
        display: 'Teachers',
        icon: <i className='bx bx-male-female'></i>,
        to: '/teachers',
        section: 'teachers'
    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'

    },


]

const sidebarNavItemsTeacher = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''

    },
    {
        display: 'Class',
        icon: <i className='bx bx-folder'></i>,
        to: '/class',
        section: 'class'


    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'


    },
    {
        display: 'Notice',
        icon: <i className='bx bxs-graduation'></i>,
        to: '/notices',
        section: 'notices'

    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'

    },


]
const sidebarNavItemsStudent = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''

    },
    {
        display: 'Class',
        icon: <i className='bx bx-folder'></i>,
        to: '/class',
        section: 'class'


    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'


    },
    {
        display: 'User',
        icon: <i className='bx bx-user'></i>,
        to: '/user',
        section: 'user'

    },
]


const Sidebar = (propos) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {

        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);

    }, [location]);
    let sidebarNavItems = []
    const enseignant = propos.user.role == "enseignant";
    const student = propos.user.role == "etudiant";
    const admin = propos.user.role == "admin";

    if (enseignant) {
        sidebarNavItems = sidebarNavItemsTeacher;
    }
    if (student) {
        sidebarNavItems = sidebarNavItemsStudent;
    }
    if (admin) {
        sidebarNavItems = sidebarNavItemsAdmin;
    }
    // sidebarNavItems = sidebarNavItemsStudent;


    return <div className='sidebar'>
        <div className="sidebar__logo">
            RIA
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
