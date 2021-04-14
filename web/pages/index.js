/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>The Office Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> The Office Quiz</h1>

          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosdoEvento) {
              infosdoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nome do usuário"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/NathanNNB/TheOfficeQuiz" />
    </QuizBackground>
  );
}
