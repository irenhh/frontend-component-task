import React, {FC, useMemo, useState} from 'react';
import cn from 'classnames';
import {RoleType, UserAction} from '../../constants/constants.types';
import {ROLES} from '../../constants/constants';
import {UncheckIcon} from '../../images/UncheckIcon';
import {CheckIcon} from '../../images/CheckIcon';
import {
  PermissionsBlockFields,
  PermissionsBlockWrapper,
  PermissionsItemIcon,
  PermissionsItemLabel
} from './style';
import {Title} from '../general.styles';

type Props = {
  permissionsList: UserAction[];
  listName: string;
  role: RoleType;
};

export const PermissionsBlock: FC<Props> = ({permissionsList, listName, role}) => {
  const [checkedList, setCheckedList] = useState<boolean[]>(
    Array(permissionsList.length).fill(false)
  );

  const permissions = useMemo(() => {
    const targetRole = ROLES.find((r) => r.type === role);

    return targetRole?.permissions;
  }, [role, ROLES]);

  const isCustomRole = role === RoleType.CUSTOM;

  return (
    <PermissionsBlockWrapper>
      <Title>{listName}</Title>

      <PermissionsBlockFields>
        {permissionsList.map((action, i) => {
          const checkedState = isCustomRole
            ? checkedList[i]
            : permissions && permissions.includes(action.id);

          return (
            <React.Fragment key={action.id}>
              <PermissionsItemLabel>
                <input
                  type="checkbox"
                  id={`${listName}_${action.type}`}
                  name={`${listName}_${action.type}`}
                  checked={checkedState}
                  readOnly
                />
                <PermissionsItemIcon
                  className={cn({
                    disabled: !isCustomRole
                  })}
                  onClick={() => {
                    if (!isCustomRole) {
                      return;
                    }

                    setCheckedList((checkedList) => {
                      const result = [...checkedList];
                      result[i] = !result[i];

                      return result;
                    });
                  }}
                >
                  {checkedState ? <CheckIcon /> : <UncheckIcon />}
                </PermissionsItemIcon>
                <p
                  className={cn({
                    active: checkedState
                  })}
                >
                  {action.text}
                </p>
              </PermissionsItemLabel>
            </React.Fragment>
          );
        })}
      </PermissionsBlockFields>
    </PermissionsBlockWrapper>
  );
};
