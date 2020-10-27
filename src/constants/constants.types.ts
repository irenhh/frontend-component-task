export type UserAction = {
  id: number;
  type: UserActionType;
  text: string;
  checked: boolean;
};

export enum UserActionType {
  CREATE = 'create',
  UPDATE = 'update',
  MOVE = 'move',
  DELETE = 'delete',
  VIEW = 'view',
  SHARE = 'share'
}

export type Role = {
  id: number;
  type: RoleType;
  permissions: number[];
  text: string;
};

export enum RoleType {
  USER = 'user',
  MEMBER = 'member',
  ADMIN = 'admin',
  CUSTOM = 'custom'
}
