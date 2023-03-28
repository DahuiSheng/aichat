"use client"

import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header'
import Main from './Main'
import './globals.css'


const metadata = {
  title: 'ChatGPTとおしゃべり',
  description: 'ChatGPT APIを使ったチャットアプリです。一緒におしゃべりができます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <html lang="ja">
        <head />
        <body className='min-h-screen bg-white md:bg-gray-100'>
          <Header />
          <Main>
            {children}
          </Main>
        </body>
      </html>
    </ChakraProvider>
  );
}
