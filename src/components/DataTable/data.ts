import { User } from './DataTable';

export const rows: User[] = [
  {
    id: 1,
    email: 'john.doe@example.com',
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe',
      avatar: './public/vite.svg',
    },
    departmentName: 'Engineering',
    positionName: 'Developer',
    role: 'Employee',
  },
  {
    id: 2,
    email: 'jane.smith@example.com',
    profile: {
      firstName: 'Jane',
      lastName: 'Smith',
      fullName: 'Jane Smith',
      avatar: 'asdasd',
    },
    departmentName: 'Marketing',
    positionName: 'Manager',
    role: 'Manager',
  },
  {
    id: 3,
    email: 'bob.johnson@example.com',
    profile: {
      firstName: 'Bob',
      lastName: 'Johnson',
      fullName: 'Bob Johnson',
      avatar:
        'https://cdn.sortiraparis.com/images/80/69688/1111691-avatar-le-dernier-maitre-de-l-air-la-saison-2-se-prepare-a-explorer-le-royaume-de-la-terre.jpg',
    },
    departmentName: 'HR',
    positionName: 'Recruiter',
    role: 'Employee',
  },
];
