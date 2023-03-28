import Header from './Header'
import Main from './Main'
import './globals.css'

export const metadata = {
  title: 'ChatGPTとおしゃべり',
  description: 'ChatGPT APIを使ったチャットアプリです。一緒におしゃべりができます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body className='min-h-screen bg-white md:bg-gray-100'>
        <Header />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
