export interface Product {
  id: string;
  name: string;
  vendorCode: string;
  reviews?: string;
  rating?: number;
  article: string;
  type: string;
  properties?: Record<string, number>;
  description?: string;
  price: number;
  enabled: boolean;
  image?: string;
  quantity: number;
  createAt: Date;
  updateAt: Date;
}

//Что такое интерфейсы?
//Интерфейсы — это функция TypeScript, которая определяет форму объекта для проверки типов во время компиляции. Они используются для:

//Обеспечьте безопасность типов : отслеживайте ошибки в процессе разработки (например, доступ к неопределенным свойствам).
//Опишите внутренние модели : определите структуру сущностей или моделей базы данных.
//Избегайте накладных расходов во время выполнения : интерфейсы удаляются во время компиляции в JavaScript.
//В отличие от DTO, интерфейсы не присутствуют во время выполнения, поэтому они не могут обеспечить проверку или преобразование.
