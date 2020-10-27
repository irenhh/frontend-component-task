import React, {FC, useMemo, useState} from 'react';
import {RoleType, UserAction} from '../../constants/constants.types';
import {ROLES} from '../../constants/constants';

type Props = {
  permissionsList: UserAction[];
  listName: string;
  role: RoleType;
};

export const PermissionsBlock: FC<Props> = ({permissionsList, listName, role}) => {
  const [checked, setChecked] = useState<boolean[]>(Array(permissionsList.length).fill(false));

  const permissions = useMemo(() => {
    const targetRole = ROLES.find((r) => r.type === role);

    return targetRole?.permissions;
  }, [role, ROLES]);

  const isCustomRole = role === RoleType.CUSTOM;

  return (
    <label>
      {listName}
      {permissionsList.map((action, i) => (
        <React.Fragment key={action.id}>
          <input
            type="checkbox"
            id={`${listName}_${action.type}`}
            name={`${listName}_${action.type}`}
            checked={isCustomRole ? checked[i] : permissions && permissions.includes(action.id)}
            disabled={!isCustomRole}
            onChange={() =>
              setChecked((checked) => {
                const result = [...checked];
                result[i] = !result[i];

                return result;
              })
            }
          />
          {action.text}
        </React.Fragment>
      ))}
    </label>
  );
};
