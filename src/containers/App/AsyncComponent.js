import React from 'react';

export const AsyncAppLayout = React.lazy(() => import('../../components/Layout/AppLayout'));

export const AsyncDashboard = React.lazy(() => import('../Dashboard'));
export const AsyncBooking = React.lazy(() => import('../Booking'));
export const AsyncCalendar = React.lazy(() => import('../Calendar'));
export const AsyncNotFound = React.lazy(() => import('../../components/Exception/NotFound'));
