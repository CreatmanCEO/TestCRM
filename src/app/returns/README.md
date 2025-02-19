# Модуль возврата товаров (Returns Module)

Модуль для управления возвратами товаров в системе. Поддерживает просмотр списка товаров, изменение статуса возврата и добавление комментариев.

## Структура модуля 

## Компоненты

### ReturnsPageComponent
Основной компонент страницы, отвечающий за отображение списка товаров.

**Селектор:** `app-returns-page`

**Зависимости:**
- ReturnsService
- ReturnCardComponent
- ReturnCommentComponent

### ReturnCardComponent
Компонент карточки товара с информацией и управлением статусом.

**Селектор:** `app-return-card`

**Входные параметры:**
- `@Input() product: ReturnProduct` - данные товара

**Выходные события:**
- `@Output() statusChanged: EventEmitter<{id: string; status: 'returned' | 'not_returned'}>` - изменение статуса
- `@Output() commentChanged: EventEmitter<{id: string; comment: string}>` - изменение комментария

### ReturnCommentComponent
Компонент для работы с комментариями.

**Селектор:** `app-return-comment`

**Входные параметры:**
- `@Input() comment: string` - текст комментария

**Выходные события:**
- `@Output() commentChanged: EventEmitter<string>` - изменение текста комментария

## Интерфейсы

### ReturnProduct
```typescript
interface ReturnProduct {
  id: string;          // Идентификатор товара
  name: string;        // Название
  color: string;       // Цвет
  size: string;        // Размер
  quantity: number;    // Количество
  price: number;       // Цена
  supplier: string;    // Поставщик
  returnStatus: 'returned' | 'not_returned' | null;  // Статус возврата
  comment: string;     // Комментарий
  imageUrl: string;    // URL изображения
}
```

## Сервисы

### ReturnsService
Сервис для работы с API возвратов.

**Методы:**
- `getReturns(): Observable<ReturnProduct[]>` - получение списка товаров
- `updateReturnStatus(id: string, status: 'returned' | 'not_returned'): Observable<ReturnProduct>` - обновление статуса
- `updateComment(id: string, comment: string): Observable<ReturnProduct>` - обновление комментария

## Оптимизация

- Все компоненты используют `ChangeDetectionStrategy.OnPush`
- Реализована отписка от Observable через `takeUntil`
- Используется debounce для комментариев (300ms)
- Ленивая загрузка модуля

## Использование

1. Добавьте маршрут в app-routing.module.ts:
```typescript
{
  path: 'returns',
  loadChildren: () => import('./returns/returns.module').then(m => m.ReturnsModule)
}
```

2. Перейдите по маршруту `/returns`

## Зависимости

- @angular/core
- @angular/common
- @angular/forms
- @angular/router
- rxjs

## Стилизация

Модуль использует SCSS для стилей. Основные цвета и размеры:
- Основной цвет: #007bff
- Цвет текста: #666
- Радиус скругления: 4px
- Отступы: 1rem, 2rem
- Ширина карточки: minmax(300px, 1fr) 