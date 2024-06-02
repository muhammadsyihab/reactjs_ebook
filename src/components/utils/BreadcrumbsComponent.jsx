import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const BreadcrumbsComponent = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className="breadcrumb-section">
            <h2 className="sr-only">Site Breadcrumb</h2>
            <div className="container">
                <div className="breadcrumb-contents">
                    <nav aria-label="breadcrumb" className='m-3'>
                        <Breadcrumbs aria-label="breadcrumb">
                            {pathnames.length > 0 ? (
                                <Link color="inherit" to="/dashboard">
                                    Dashboard
                                </Link>
                            ) : (
                                <Typography color="text.primary">Dashboard</Typography>
                            )}

                            {pathnames.map((name, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathnames.length - 1;

                            
                                if (isLast && pathnames[0] === 'book-detail') {
                                    return (
                                        <Typography color="text.primary" key={name}>
                                            {name}
                                        </Typography>
                                    );
                                } else {
                                    return isLast ? (
                                        <Typography color="text.primary" key={name}>
                                            {name}
                                        </Typography>
                                    ) : (
                                        <Typography color="text.primary"   key={name}>
                                            {name}
                                        </Typography>
                                    );
                                }
                            })}
                        </Breadcrumbs>
                    </nav>
                </div>
            </div>
        </section>

    );
};

export default BreadcrumbsComponent;
