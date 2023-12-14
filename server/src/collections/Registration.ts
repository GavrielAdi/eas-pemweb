import { CollectionConfig } from 'payload/types';

const Registration: CollectionConfig = {
    slug: 'Registration',
    auth: {
        cookies: {
            sameSite: 'strict',
            secure: true,
        },
    },
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'school',
            type: 'text',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: ['Waiting', 'Rejected', 'Accepted'],
            defaultValue: 'Waiting',
            required: true,
        },
        {
            name: 'registration_date',
            type: 'date',
            required: true,
            defaultValue: () => new Date().toISOString(),
        },
    ],
};

export default Registration;
