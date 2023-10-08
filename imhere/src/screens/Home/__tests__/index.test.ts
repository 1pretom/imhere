import { fireEvent, render } from '@testing-library/react-native';
import Home from './Home';

test('adiciona um participante à lista', () => {
  const { getByPlaceholderText, getByText } = render(<Home />);
  const input = getByPlaceholderText('Insira o nome');
  const addButton = getByText('Add');

  fireEvent.changeText(input, 'Novo Participante');
  fireEvent.press(addButton);

  // Verifica se o participante foi adicionado à lista
  expect(getByText('Novo Participante')).toBeTruthy();
});
