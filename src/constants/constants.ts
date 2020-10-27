import {Role, RoleType, UserAction, UserActionType} from './constants.types';

export const USER_ACTIONS: UserAction[] = [
  {
    id: 1,
    type: UserActionType.CREATE,
    text: 'Create',
    checked: false
  },
  {
    id: 2,
    type: UserActionType.UPDATE,
    text: 'Update',
    checked: false
  },
  {
    id: 3,
    type: UserActionType.MOVE,
    text: 'Move',
    checked: false
  },
  {
    id: 4,
    type: UserActionType.DELETE,
    text: 'Delete',
    checked: false
  },
  {
    id: 5,
    type: UserActionType.VIEW,
    text: 'View',
    checked: false
  },
  {
    id: 6,
    type: UserActionType.SHARE,
    text: 'Share',
    checked: false
  }
];

export const ROLES: Role[] = [
  {
    id: 1,
    type: RoleType.ADMIN,
    text: 'Admin',
    permissions: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 2,
    type: RoleType.USER,
    text: 'User',
    permissions: [1, 2, 5, 6]
  },
  {
    id: 3,
    type: RoleType.MEMBER,
    text: 'Member',
    permissions: [5, 6]
  },
  {
    id: 4,
    type: RoleType.CUSTOM,
    text: 'Custom',
    permissions: []
  }
];
