import AdminComponent from '../components/Admin';
import SettingComponent from '../components/SettingComponent';
import MedicalCenterComponent from '../components/MedicalCenter';
import SalesAgentComponent from '../components/SalesAgent';
import PetDealerComponent from '../components/PetDealer';
import CustomerComponent from '../components/Customer';

// Routing configuration with descriptions
export const AdminRoutes = [
    {
        path: '/admin',
        component: <AdminComponent />,
        text: 'Admin Dashboard'
    },
    {
        path: '/admin/setting',
        component: <SettingComponent />,
        text: 'Setting Dashboard'
    },
];

export const MedicalCenterRoutes = [
    {
        path: '/medical-center/',
        component: <MedicalCenterComponent />,
        text: 'Medical Center Dashboard'
    },
];

export const SalesAgentRoutes = [
    {
        path: '/sales-agent/',
        component: <SalesAgentComponent />,
        text: 'Sales Agent Dashboard'
    },
];

export const PetDealerRoutes = [
    {
        path: '/pet-dealer/',
        component: <PetDealerComponent />,
        text: 'Pet Dealer Dashboard'
    },
];

export const CustomerRoutes = [
    {
        path: '/',
        component: <CustomerComponent />,
        text: 'Customer Dashboard'
    }
];
