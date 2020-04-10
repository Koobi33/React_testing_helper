import { act } from 'react-dom/test-utils';

export function wait(amount = 0) {
  return new Promise((resolve) => setTimeout(resolve, amount));
}

// Использовать в тестах после монтирования компонента
// если нужно просто дождаться ответа от сервера после рендера компонента
export async function actWait(amount = 0) {
  await act(async () => {
    await wait(amount);
  });
}

// Использовать, если нужно сделать запрос и обновить компонент после запроса.
export async function updateWrapper(wrapper, amount = 0) {
  await act(async () => {
    await wait(amount);
    wrapper.update();
  });
}
