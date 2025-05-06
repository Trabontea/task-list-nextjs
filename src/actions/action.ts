'use server';
// import { prisma } from '@/lib/prisma';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const addTask = async (formData: FormData) => {
  console.log('value', formData.get('title'));
  await prisma.task.create({
    data: {
      title: formData.get('title') as string,
    },
  });

  revalidatePath('/');
};
