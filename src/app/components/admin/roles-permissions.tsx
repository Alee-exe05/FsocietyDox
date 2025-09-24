
"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ShieldCheck, PlusCircle, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/language-context';

type Permission = 'createUser' | 'editUser' | 'deleteUser' | 'viewLogs' | 'manageRoles' | 'moderateContent';
type Role = {
  id: number;
  name: string;
  permissions: Permission[];
  isEditable: boolean;
};

const initialRoles: Role[] = [
  { id: 1, name: 'Super Admin', permissions: ['createUser', 'editUser', 'deleteUser', 'viewLogs', 'manageRoles', 'moderateContent'], isEditable: false },
  { id: 2, name: 'Admin', permissions: ['createUser', 'editUser', 'deleteUser', 'moderateContent'], isEditable: true },
  { id: 3, name: 'Moderatore', permissions: ['moderateContent', 'editUser'], isEditable: true },
  { id: 4, name: 'Utente Staff', permissions: [], isEditable: true },
];

export function RolesPermissions() {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [newRoleName, setNewRoleName] = useState('');
  const { dictionary } = useLanguage();
  const { rolesPermissions: pageDict } = dictionary.admin;

  const allPermissions: { id: Permission; label: string }[] = [
    { id: 'createUser', label: pageDict.permissions.createUser },
    { id: 'editUser', label: pageDict.permissions.editUser },
    { id: 'deleteUser', label: pageDict.permissions.deleteUser },
    { id: 'viewLogs', label: pageDict.permissions.viewLogs },
    { id: 'manageRoles', label: pageDict.permissions.manageRoles },
    { id: 'moderateContent', label: pageDict.permissions.moderateContent },
];

  const handlePermissionChange = (roleId: number, permissionId: Permission) => {
    setRoles(roles.map(role => {
      if (role.id === roleId && role.isEditable) {
        const newPermissions = role.permissions.includes(permissionId)
          ? role.permissions.filter(p => p !== permissionId)
          : [...role.permissions, permissionId];
        return { ...role, permissions: newPermissions };
      }
      return role;
    }));
  };
  
  const handleAddRole = () => {
    if (newRoleName.trim() === '') return;
    const newRole: Role = {
      id: Math.max(...roles.map(r => r.id)) + 1,
      name: newRoleName,
      permissions: [],
      isEditable: true,
    };
    setRoles([...roles, newRole]);
    setNewRoleName('');
  };

  const handleDeleteRole = (roleId: number) => {
    setRoles(roles.filter(role => role.id !== roleId || !role.isEditable));
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <ShieldCheck />
          {pageDict.title}
        </CardTitle>
        <CardDescription>{pageDict.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-4">
            <div className="flex gap-2">
                <Input
                    type="text"
                    placeholder={pageDict.newRolePlaceholder}
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                    className="max-w-xs"
                />
                <Button onClick={handleAddRole}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {pageDict.addRoleButton}
                </Button>
            </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{pageDict.table.role}</TableHead>
                {allPermissions.map(p => <TableHead key={p.id} className="text-center">{p.label}</TableHead>)}
                <TableHead className="text-right">{pageDict.table.actions}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map(role => (
                <TableRow key={role.id}>
                  <TableCell className="font-semibold">
                    {role.name}
                    {!role.isEditable && <Badge variant="secondary" className="ml-2">{pageDict.lockedBadge}</Badge>}
                    </TableCell>
                  {allPermissions.map(permission => (
                    <TableCell key={permission.id} className="text-center">
                      <Checkbox
                        checked={role.permissions.includes(permission.id)}
                        onCheckedChange={() => handlePermissionChange(role.id, permission.id)}
                        disabled={!role.isEditable}
                      />
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                      {role.isEditable ? (
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteRole(role.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end mt-4">
            <Button>{pageDict.saveButton}</Button>
        </div>
      </CardContent>
    </Card>
  );
}
