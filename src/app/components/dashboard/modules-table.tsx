"use client";

import React, { useState, useRef } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload } from 'lucide-react';
import { modules as initialModules, Module, UserRole } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { useToast } from '@/hooks/use-toast';

const getRoleClass = (role: UserRole) => {
  switch (role) {
    case 'CEO':
      return 'text-red-500 font-bold';
    case 'Admin':
      return 'text-violet-400 animate-glitter font-bold';
    case 'VIP':
      return 'text-yellow-400 animate-glitter font-bold';
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
  const [modules, setModules] = useState<Module[]>(initialModules);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { dictionary } = useLanguage();
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newModule: Module = {
          id: `mod-${modules.length + 1}`,
          filename: file.name,
          uploadDate: new Date().toLocaleDateString(),
          content: e.target?.result as string,
          uploader: {
            name: 'Elliot Alderson',
            role: 'Normal',
          },
        };
        setModules([newModule, ...modules]);
        toast({
          title: dictionary.modules.uploadSuccess.title,
          description: `${file.name} ${dictionary.modules.uploadSuccess.description}`,
        });
      };
      reader.readAsText(file);
    } else {
        toast({
            title: dictionary.modules.uploadError.title,
            description: dictionary.modules.uploadError.description,
            variant: "destructive",
        })
    }
    // Reset file input
    if(event.target) event.target.value = '';
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="bg-transparent border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1.5">
          <CardTitle className="font-headline">{dictionary.modules.title}</CardTitle>
          <CardDescription>{dictionary.modules.description}</CardDescription>
        </div>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".txt"
            className="hidden"
          />
          <Button onClick={triggerFileUpload}>
            <Upload className="mr-2 h-4 w-4" />
            {dictionary.modules.uploadButton}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
