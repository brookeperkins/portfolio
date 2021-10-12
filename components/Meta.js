import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta property='og:description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <meta property='og:title' content='Brooke Perkins Dot Com' key='title' />
      <meta property='og:url' content='brookeperkins.com' />
      <meta property='og:type' content='website' />
      <meta 
      property='og:image'
      content={'social.png'}
      />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Brooke Perkins',
  keywords: 'brooke perkins, portland, software engineer, developer, designer',
  description: 'The personal portfolio site of Brooke Perkins',
}

export default Meta
