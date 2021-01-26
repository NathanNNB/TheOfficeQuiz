import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>The Office Quiz</title>
        <meta name="viewport" content="initial-scale=1.0" width="device-width"/>
        <meta property="og:image" content="https://wallpaperaccess.com/full/1146177.jpg"/>

      </Head>
      <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1> The Office Quiz</h1>

            </Widget.Header>
          <Widget.Content>
            <p>Não sei</p>

          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>

            <h1>Quiz da Galera</h1>
            <p>asdasdas</p>

          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl = 'https://github.com/NathanNNB/TheOfficeQuiz'/>
    </QuizBackground>
  )
}
