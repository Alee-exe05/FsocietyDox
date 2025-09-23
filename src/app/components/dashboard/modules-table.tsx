"use client";

import React, { useState } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { modules as initialModules, Module, UserRole } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { FileWarning } from 'lucide-react';

const getRoleClass = (role: UserRole) => {
  switch (role) {
    case 'CEO':
      return 'text-red-500 font-bold';
    case 'Admin':
      return 'text-violet-400 animate-glitter font-bold';
    case 'VIP':
      return 'text-yellow-400 font-bold';
    default:
      return 'text-foreground';
  }
};

const getRowClass = (index: number) => {
    if (index === 1 || index === 2) return 'table-row-red';
    if (index === 0) return 'table-row-blue';
    return ''
}

export function ModulesTable() {
  const [modules] = useState<Module[]>(initialModules);
  const { dictionary } = useLanguage();


  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardContent>
        {modules.length > 0 ? (
            <Table>
            <TableHeader>
                <TableRow className="hover:bg-transparent">
                <TableHead>{dictionary.modules.table.filename}</TableHead>
                <TableHead>{dictionary.modules.table.uploader}</TableHead>
                <TableHead>{dictionary.modules.table.role}</TableHead>
                <TableHead className="text-right">{dictionary.modules.table.uploadDate}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {modules.map((module, index) => (
                <TableRow key={module.id} className={cn("transition-colors hover:bg-secondary/50", getRowClass(index))}>
                    <TableCell className="font-medium">{module.filename}</TableCell>
                    <TableCell>{module.uploader.name}</TableCell>
                    <TableCell>
                        <Badge variant="outline" className={cn('border-none', getRoleClass(module.uploader.role))}>
                            {module.uploader.role}
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                    {module.uploadDate}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        ) : (
            <div className="flex flex-col items-center justify-center gap-4 text-center text-muted-foreground p-8 border border-dashed rounded-lg">
                <FileWarning className="h-12 w-12" />
                <h3 className="text-lg font-semibold">{dictionary.modules.noModules.title}</h3>
                <p className="text-sm">{dictionary.modules.noModules.description}</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
