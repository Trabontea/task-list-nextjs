'use server';
// import { prisma } from '@/lib/prisma';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addTask(formData: FormData) {
  try {
    const title = formData.get('title');
    if (typeof title !== 'string' || !title) {
      throw new Error('Invalid title');
    }

    await prisma.task.create({
      data: {
        title,
      },
    });
    revalidatePath('/');
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

export async function toggleTask(id: string) {
  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (task) {
      await prisma.task.update({
        where: { id },
        data: { completed: !task.completed },
      });
      revalidatePath('/');
    }
  } catch (error) {
    console.error('Error toggling task:', error);
  }
}

export async function deleteTask(id: string) {
  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (task) {
      await prisma.task.delete({
        where: { id },
      });
      revalidatePath('/');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}

export async function editTask(id: string, newTitle: string) {
  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (task) {
      await prisma.task.update({
        where: { id },
        data: {
          title: newTitle,
          updatedAt: new Date(),
        },
      });
      revalidatePath('/');
    }
  } catch (error) {
    console.error('Error editing task:', error);
  }
}
