// src/types/express.d.ts
import 'express';

declare module 'express' {
  export interface Request {
    user?: {
      sub: number;
      email: string;
      // если в payload есть другие поля, добавь их здесь
      [key: string]: unknown;
    };
  }
}
