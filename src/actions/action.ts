'use server';
import prisma from '@/lib/db';

export const addTask = async (formData: FormData) => {
  await prisma.task.create({
    data: {
      title: formData.get('title') as string,
    },
  });
};
