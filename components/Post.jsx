import styled from 'styled-components/native'; // Импортируем библу, устанавливаем 'npm install styled-components'

// Создаем переменную, указываем глобальный объект View 
// Styles CSS
const PostView = styled.View `
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: black;
  border-bottom-style: solid;
  margin: 10px;
`;

// Image
const PostImage = styled.Image`
width: 60px;
height: 60px;
border-radius: 12px;
margin-right: 30px;

`;

const PostDetails = styled.View`
  /* Выравниваем в одну линию */
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

// Title
const PostDate= styled.Text`
  font-size: 12px;
  color: black;
`;

const PostTitle = styled.Text`
  color:black;
`
// Получаем данные из файла App.js
export const Post = ({title, imageUrl, createdAt}) => {
  
  return (
    <PostView>
      <PostImage source={{uri: imageUrl }}/>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>Какая то информация</PostDate>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
}
