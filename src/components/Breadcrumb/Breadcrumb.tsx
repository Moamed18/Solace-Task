// BreadcrumbsComponent.tsx
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';


const Breadcrumb: React.FC = () => {
    // const location = useLocation(); // Get the current location

    // const breadcrumbNameMap: { [key: string]: string } = {
    //     '/': 'Dashboard',
    //     '/hr-manage': 'HR Manage',
    //     '/employees': 'Employees',
    //     '/contact': 'Contact',
    // };

    // const pathnames: string[] = location.pathname.split('/').filter((x: string) => x);

    return (
        <Breadcrumbs separator=">" className="mt-4"
        sx={{
            '& .MuiBreadcrumbs-separator': {
                color: 'blue', 
                margin: '0 8px', 
            }
        }}>
            
            <Link
                href="/"
                className="text-gray-500 "
                sx={{ textDecoration: 'none', color: 'inherit' }}>
                Dashboard
            </Link>
            <Link
                href="/hr-manage"
                className="text-gray-800 "
                sx={{ textDecoration: 'none', color: 'inherit' }}>
                HR Manage
            </Link>
            <Link
                href="/employees"
                className="text-gray-800  "
                sx={{ textDecoration: 'none', color: 'inherit' }}>
                Employees
            </Link>
            <Link
                href="/employees"
                sx={{ textDecoration: 'none'}}
                className="text-blue-900  font-samibold">
                John Smith Profile
            </Link>
            
            {/* {pathnames.map((value: string, index: number) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Typography key={routeTo} className="text-gray-500">
                        {breadcrumbNameMap[routeTo] || value}
                    </Typography>
                ) : (
                    <Link key={routeTo} href={routeTo} className="text-gray-800 hover:text-blue-500 transition duration-300">
                        {breadcrumbNameMap[routeTo] || value}
                    </Link>
                );
            })} */}
        </Breadcrumbs>
    );
};

export default Breadcrumb;
