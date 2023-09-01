// Импортируе библиотеку  для работы с api axios
import axios from 'axios';
// FlatList - добавляет скролл
import { StatusBar, FlatList, Text, View, Image, Button, Alert } from 'react-native';
import { Post } from './components/Post';
import React from 'react';

// Основная функция
// ******************************************************************************
export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
   axios.get('https://64f0402c8a8b66ecf77957da.mockapi.io/api/key/words_test')
    // Вытаскиваем данные из axios
    .then(({ data }) => {
        // Передаем сюда
        setItems(data);
        // Если ошибка то отображаем ее в консоли
      }).catch(err => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статью')
      })
  }, []);


  return (
    <View>

      <FlatList
        // Получаем массив статей и передаем из в data
        data={items}
        // Далее рендерем каждую статью
        renderItem={({item}) => <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>}
      />

      <StatusBar theme="auto" />
    </View>
  );

}


