import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="list-group-item"><i className="bi bi-twitter p-1"></i>Tuiter</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house p-1"></i>
                Home
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash p-1"></i>
                Explore
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell p-1"></i>
                Notifications
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope p-1"></i>
                Messages
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark p-1"></i>
                Bookmarks
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list p-1"></i>
                Lists
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person p-1"></i>
                Profile
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots p-1"></i>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;